<?php

header('Access-Control-Allow-Origin: *');

if(isset($_REQUEST['type'])) {
    switch($_REQUEST['type']){
        case "base":
            require_once('getBaseData.php');
            require_once('../wp-load.php');
            $data = getBaseData();
            $data = json_encode($data);
            break;
        case "createJson":
            require_once('getBaseData.php');
            require_once('../wp-load.php');
            $fp = fopen('wp-data.json', 'w');
            fwrite($fp, json_encode(getBaseData()));
            fclose($fp);
            $data = "Json created.";
            break;
        case "getJson":
            $data = file_get_contents('wp-data.json');
            break;
        default:
            $data = null;
            break;
    }

    echo $data;
}