jquery.jibuntokei.js
====================

自分で1440枚の画像を用意すれば美人時計みたいに表示する時計の jQuery プラグイン。

使い方
-----

任意のディレクトリに1440枚の画像ファイルを置きます。この時、画像ファイル名は次のような名前にします。  
0時0分の画像の場合 : 0000.jpg  
0時1分の画像の場合 : 0001.jpg  
...  
23時58分の画像の場合 : 2358.jpg  
23時59分の画像の場合 : 2359.jpg  

### HTML
```HTML
<div id="clock"></div>
```
### JavaScript
```JS
$(document).ready(function(){
    $('#clock').jibunTokei({
        dir: 'images/',  // 画像ディレクトリのパス
        ext: 'jpg'       // 画像の拡張子
    });
});
```
