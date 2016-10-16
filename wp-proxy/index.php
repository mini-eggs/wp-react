<?php

require_once('getBaseData.php');
require_once('../wp-load.php');

if(isset($_REQUEST['type'])) {
    switch($_REQUEST['type']){
        case "base":
            $data = getBaseData();
            break;
        default:
            $data = null;
            break;
    }
    echo json_encode($data);
}