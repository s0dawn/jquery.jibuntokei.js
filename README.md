jquery.jibuntokei.js
====================

������1440���̉摜��p�ӂ���Δ��l���v�݂����ɕ\�����鎞�v�� jQuery �v���O�C���B

�g����
-----

�C�ӂ̃f�B���N�g����1440���̉摜�t�@�C����u���܂��B���̎��A�摜�t�@�C�����͎��̂悤�Ȗ��O�ɂ��܂��B  
0��0���̉摜�̏ꍇ : 0000.jpg  
0��1���̉摜�̏ꍇ : 0001.jpg  
...  
23��58���̉摜�̏ꍇ : 2358.jpg  
23��59���̉摜�̏ꍇ : 2359.jpg  

### HTML
```HTML
<div id="clock"></div>
```
### JavaScript
```JS
$(document).ready(function(){
    $('#clock').jibunTokei({
        dir: 'images/',  // �摜�f�B���N�g���̃p�X
        ext: 'jpg'       // �摜�̊g���q
    });
});
```
