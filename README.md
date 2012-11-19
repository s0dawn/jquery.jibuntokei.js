jquery.jibuntokei.js
====================

美人時計のように毎分好きな画像を表示する jQuery プラグイン。

使い方
-----
### HTML
```HTML
<div id="clock"></div>
```
### JavaScript
```JS
$(document).ready(function(){
    $('#clock').jibunTokei({
        dir: 'images/',
        ext: 'jpg'
    });
});
```
