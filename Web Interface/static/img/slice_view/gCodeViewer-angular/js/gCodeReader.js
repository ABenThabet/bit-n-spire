/**
 * User: hudbrog (hudbrog@gmail.com)
 * Date: 10/21/12
 * Time: 7:31 AM
 */

GCODE.gCodeReader = (function(){
// ***** PRIVATE ******
    var gcode, lines;
    var z_heights = {};
    var model = [];
    var max = {x: undefined, y: undefined, z: undefined};
    var min = {x: undefined, y: undefined, z: undefined};
    var modelSize = {x: undefined, y: undefined, z: undefined};
    var filamentByLayer = {};
    var printTimeByLayer;
    var totalFilament=0;
    var printTime=0;
    var speeds = {};
    var speedsByLayer = {};
    var gCodeOptions = {
        sortLayers: false,
        purgeEmptyLayers: true,
        analyzeModel: false
    };

    var prepareGCode = function(){
        if(!lines)return;
        gcode = [];
        var i;
        for(i=0;i<lines.length;i++){
            if(lines[i].match(/^(G0|G1|G90|G91|G92|M82|M83|G28)/i))gcode.push(lines[i]);
        }
        lines = [];
        console.log("GCode prepared");
    };

    var sortLayers = function(){
        var sortedZ = [];
        var tmpModel = [];
        var i;

        for(var layer in z_heights){
            sortedZ[z_heights[layer]] = layer;
        }
        sortedZ.sort(function(a,b){
            return a-b;
        });
        for(i=0;i<sortedZ.length;i++){
            tmpModel[i] = model[z_heights[sortedZ[i]]];
        }
        model = tmpModel;
        delete tmpModel;
    };

    var purgeLayers = function(){
        var purge=true;
        if(!model){
            console.log("Something terribly wring just happened.");
            return;
        }
        for(var i=0;i<model.length;i++){
            purge=true;
            if(!model[i])purge=true;
            else {
                for(var j=0;j<model[i].length;j++){
                    if(model[i][j].extrude)purge=false;
                }
            }
            if(purge){
                model.splice(i,1);
                i--;
            }
        }
    };



// ***** PUBLIC *******
    return {

        loadFile: function(reader){
            console.log("loadFile");
            model = [];
            z_heights = [];

            lines = reader.target.result.split(/\n/);
            reader.target.result = null;
//            prepareGCode();

            worker.postMessage({
                    "cmd":"parseGCode",
                    "msg":{
                        gcode: lines,
                        options: {
                            firstReport: 5
                        }
                    }
                }
            );
            delete lines;



        },
        setOption: function(options){
            for(var opt in options){
                gCodeOptions[opt] = options[opt];
            }
        },
        passDataToRenderer: function(mdl){
//            model = mdl;
            if(gCodeOptions["sortLayers"])sortLayers();
            if(gCodeOptions["purgeEmptyLayers"])purgeLayers();
            GCODE.renderer.doRender(model, 0);
            GCODE.renderer3d.setModel(model);

        },
        processLayerFromWorker: function(msg){
//            var cmds = msg.cmds;
//            var layerNum = msg.layerNum;
//            var zHeightObject = msg.zHeightObject;
//            var isEmpty = msg.isEmpty;
//            console.log(zHeightObject);
            model[msg.layerNum] = msg.cmds;
            z_heights[msg.zHeightObject.zValue] = msg.zHeightObject.layer;
//            GCODE.renderer.doRender(model, msg.layerNum);
        },
        processAnalyzeModelDone: function(msg){
            min = msg.min;
            max = msg.max;
            modelSize = msg.modelSize;
            totalFilament = msg.totalFilament;
            filamentByLayer = msg.filamentByLayer;
            speeds = msg.speeds;
            speedsByLayer = msg.speedsByLayer;
            printTime = msg.printTime;
            printTimeByLayer = msg.printTimeByLayer;
        },
        getLayerFilament: function(z){
            return filamentByLayer[z];
        },
        getLayerSpeeds: function(z){
          return speedsByLayer[z]?speedsByLayer[z]:{};
        },
        getModelInfo: function(){
            return {
                min: min,
                max: max,
                modelSize: modelSize,
                totalFilament: totalFilament,
                speeds: speeds,
                speedsByLayer: speedsByLayer,
                printTime: printTime,
                printTimeByLayer: printTimeByLayer
            };
        },
        getGCodeLines: function(layer, fromSegments, toSegments){
            var i=0;
            var result = {first: model[layer][fromSegments].gcodeLine, last: model[layer][toSegments].gcodeLine};
            return result;
        }
    }
}());
