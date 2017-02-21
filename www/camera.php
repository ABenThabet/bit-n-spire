<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>
<div style="position: absolute; left:0;">
        <div id="play" style="position: relative; top:220; left:460;">
                <img src="start_stream.png" onclick="start();" style="cursor:pointer;">
        </div>
        <div id="stop" style="position: relative; top: 380; left: 15; visibility:hidden;">
                <img src="stop_stream.png" height="64" width="64" onclick="stop();" style="cursor:pointer;">
        </div>
	<div id="logo" style="position: relative; top:290; left:910;">
                <img src="logo.PNG" height="86" width="86">
        </div>
</div>
        <div id="test4"><img src="default.jpg" height="591" width="1030"></div>
<script language="JavaScript">
function start()
{
	$.ajax({
  url: 'start_streaming.php',
  success: function(data) {
    alert('Directory created');
  }
});
	$.get("/start_stream.php");
        $("#test4").html('<div style="top:110px" align="center"><img src="' + window.location.protocol + '//' + window.location.hostname + ':9000' + '?action=stream" height="591" width="1030"/></div>');
	document.getElementById("play").style.visibility = "hidden";
	document.getElementById("stop").style.visibility = "visible";
};
function stop()
{
	$.get("/stop_stream.php");
        $("#test4").html('<img src="default.jpg" height="591" width="1030">');
	document.getElementById("stop").style.visibility = "hidden";
	document.getElementById("play").style.visibility = "visible";
};
</script>
