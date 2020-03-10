<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Puzzle</title>
    <link rel="stylesheet" href="style3.css">
</head>
<body>
    <div id="container"><div id="prev"></div>
        <div id="puzzle"></div>
        <div id="pieces" ondrop="drop(event)" ondragover="allowDrop(event)">
        <h1>Wybierz obrazek do ułożenia</h1><h4>Naciśnij spację aby podejrzeć ułożony obrazek</h3>
    </div><div style="clear:both"></div>

        <div id="mins">
        <?php
        
            if ($handle = opendir('img/800x440')) {
            while (false !== ($file = readdir($handle))) {
                if ($file != "." && $file != "..") {
                    $myimg = substr($file, 0,-4);
                    //echo('<img id="'.$myimg.'" src="img/800x440/'.$file.'" width="170" height="90" onmouseover="style.opacity=1;" onmouseout="style.opacity=0.5;" onclick=choice("'.$myimg.'")>');
                    echo('<img id="'.$myimg.'" src="img/800x440/'.$file.'" width="170" height="90" onmouseover=blinkPrev("'.$myimg.'",1) onmouseout=blinkPrev("'.$myimg.'",0.5) onclick=choice("'.$myimg.'")>');

                }
            }
            closedir($handle);
            }
            ?>
        </div>
    </div>
    <canvas id="canvas" width="100" height="110">uuuups...</canvas>

<script src="main3.js"></script>
</body>
</html>
