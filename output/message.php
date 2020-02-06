<?php
    $msgtext = htmlspecialchars($_POST["msgtext"]);
    $to = "zziikkemd@gmail.com";
    $subj = "Новый заказ на разработку";
    $isgone = mail($to, $subj, $msgtext);
    echo json_encode($isgone);