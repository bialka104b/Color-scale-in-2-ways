var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var r=199;
var g=25;
var b=100;
context.fillStyle='rgb('+r+','+g+','+b+')';

var x=30;
var y=195;
var width=30;
var height=30;
var n=1;

var n,k,x;
for (n=1;n<7;n++){
    x=30;
    for (k=1;k<7;k++) {
        if(n<1) continue;
        context.fillRect(x,y,width,height);
        x=x+33;
        r=r-7;
        g=g+5;
        b=b+15;
        context.fillStyle='rgb('+r+','+g+','+b+')';
    }
    y=y-33;
}

y=250;
width=30;
height=30;
r=255;
g=50;
b=50;
context.fillStyle='rgb('+r+','+g+','+b+')';

for (n=1;n<7;n++) {
    x=30;
    for (k=1;k<7;k++) {
        if(1>n) continue;
        context.fillRect(x,y,width,height);
        x=x+33;
        r=r-7;
        g=g+5
        b=b+15;
        context.fillStyle='rgb('+r+','+g+','+b+')';
    }
    y=y+33;
}