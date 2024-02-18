
let pipis_div2=document.querySelector('.pipisDiv2');
let pipises_2_2=document.querySelectorAll('.pipis2');

pipis_div2.addEventListener('mousedown',touchStart2,false);
pipis_div2.addEventListener('mouseup',touchMove2,false);

var x1=null;

var interval2=1;

setInterval(() => {
    interval2=1;
}, 1000);

function touchStart2(event){
    x1=event.clientX;
}

function touchMove2(event){
    x2=event.clientX;

    var xDiff=x2-x1;

    if (xDiff>0){
        left2();
    }
    if(xDiff<0){
        right2();
    }
    x1=null;
}


console.log(pipises_2_2);

let len2=2*pipises_2_2.length;

let pipis_slider2 =[];
for( let i=0;i<pipises_2_2.length;i++){
    pipis_slider2[i]=pipises_2_2[i].src;
    pipis_slider2[i+pipises_2_2.length]=pipises_2_2[i].src;
    pipises_2_2[i].remove();
}


let dw2=document.documentElement.clientWidth/15;
let width2=220;
width2+=dw2;

let offset2_2=-1;
let step2=0;

function draw2(i){
    let img=document.createElement('img');
    img.src=pipis_slider2[i];
    img.classList.add('pipis2');
    img.style.left2=offset2_2*width2+'px';
    img.id=i;
    //console.log(document.documentElement.clientWidth);
    img.style.padding='20px '+dw2/2+'px';

    document.querySelector('.pipisDiv2').appendChild(img);
    
    step2++;
    offset2_2++;
}

for(let i=0;i<len2;i++)
{
    draw2(i);
}
    var pipises_2_22=document.querySelectorAll('.pipis2');


step2=0;
step_slide2=0;

function checkStep2(){
    step2%=pipises_2_22.length;
    if(step2<0){
        step2=pipises_2_22.length-1;
    }
}

function opSet2(){
    for(let i=0;i<pipises_2_22.length;i++){
        pipises_2_22[i].style.opacity="1";
    }
    pipises_2_22[step2].style.opacity='0';
}

function right2(){   
    //console.log('right2');
    if(interval2)
    { 
    checkStep2();
    opSet2();
    step2++;  
    step_slide2++; 
    checkStep2();

    var offset2_2=0;

    for(let i=0;i<pipises_2_22.length;i++){
        var vrlen2=(offset2_2*width2-width2*step_slide2+1+width2/2)%(width2*len2);
        if(vrlen2<0)
         vrlen2+=(width2*len2);
        pipises_2_22[i].style.left=vrlen2-3*width2+'px';
        offset2_2++;
    }
    interval2=0;
    }
}

function left2(){
    if(interval2)
    {
    step2--;    
    step_slide2--;
    checkStep2();
    opSet2();

    var offset2_2=0;

    for(let i=0;i<pipises_2_22.length;i++){
        var vrlen2=(offset2_2*width2-width2*step_slide2+1+width2/2)%(width2*len2);
        if(vrlen2<0)
         vrlen2+=(width2*len2);
        pipises_2_22[i].style.left=vrlen2-3*width2+'px';
        offset2_2++;
    }
    interval2=0;

    }
}

setInterval(() => {
    right2(); 
 }, 10000);

right2();interval2=1;
right2();interval2=1;
right2();interval2=1;
right2();
