<?php 
    header('Content-Type:text/html;charset=utf-8');

 //$con = mysql_connect("192.168.22.97","itcast","123456");
 $con = mysql_connect("127.0.0.1","root","");
    if (!$con){
        die('Could not connect: ' . mysql_error());
    }

    mysql_select_db("test", $con);

    $sql = "DELETE FROM teacher WHERE id = $_POST[id]";

    mysql_query($sql,$con);

    echo '{"status":"ok"}';

    mysql_close($con);

?>