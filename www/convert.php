<?php
function exec_callback($command, $callback){
    exec($command, $array, $ret);
    if(!empty($array)){
        foreach ($array as $line){
                if (strpos($line, 'LAYER') !== false) {
                        $number=filter_var($line, FILTER_SANITIZE_NUMBER_INT);
                        echo $number."\n";
                }
                if (strpos($line, 'Layer count') !== false) {
                        $GLOBALS['t']=$number=filter_var($line, FILTER_SANITIZE_NUMBER_INT);
                }
                call_user_func($callback, $line);
        }
    }
}

// example to use
function print_lines($line){
    //echo "> $line\n";
}
session_start();
$target_dir = "uploads/";
$target_file = $target_dir . basename($_SESSION["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
exec_callback('sudo ./cura_engine '.$target_dir.pathinfo($target_file,PATHINFO_BASENAME).' -o '.$target_dir.pathinfo($target_file,PATHINFO_FILENAME).'.gcode', 'print_lines');
shell_exec('sudo rm '.$target_dir.pathinfo($target_file,PATHINFO_BASENAME));
shell_exec('sudo mv '.$target_dir.pathinfo($target_file,PATHINFO_FILENAME).'.gcode /AstroBoxFiles/uploads/');
?>

