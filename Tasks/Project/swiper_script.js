
let pipis_div=document.querySelector('.pipisDiv');
let pipises=document.querySelectorAll('.pipis');

pipis_div.addEventListener('mousedown',touchStart,false);
pipis_div.addEventListener('mouseup',touchMove,false);

var x1=null;

var interval=1;

setInterval(() => {
    interval=1;
}, 1000);

function touchStart(event){
    x1=event.clientX;
}

function touchMove(event){
    x2=event.clientX;

    var xDiff=x2-x1;

    if (xDiff>0){
        left();
    }
    if(xDiff<0){
        right();
    }
    x1=null;
}


console.log(pipises);

let len=2*pipises.length;

let pipis_slider =[];
for( let i=0;i<pipises.length;i++){
    pipis_slider[i]=pipises[i].src;
    pipis_slider[i+pipises.length]=pipises[i].src;
    pipises[i].remove();
}


let dw=document.documentElement.clientWidth/15;
let width=220;
width+=dw;

let offset=-1;
let step=0;

function draw(i){
    let img=document.createElement('img');
    img.src=pipis_slider[i];
    img.classList.add('pipis');
    img.style.left=offset*width+'px';
    img.id=i;
    //console.log(document.documentElement.clientWidth);
    img.style.padding='20px '+dw/2+'px';

    document.querySelector('.pipisDiv').appendChild(img);
    
    step++;
    offset++;
}

for(let i=0;i<len;i++)
{
    draw(i);
}
    var pipises2=document.querySelectorAll('.pipis');


step=0;
step_slide=0;

function checkStep(){
    step%=pipises2.length;
    if(step<0){
        step=pipises2.length-1;
    }
}

function opSet(){
    for(let i=0;i<pipises2.length;i++){
        pipises2[i].style.opacity="1";
    }
    pipises2[step].style.opacity='0';
}

function right(){   
    //console.log('right');
    if(interval)
    { 
    checkStep();
    opSet();
    step++;  
    step_slide++; 
    checkStep();

    var offset2=0;

    for(let i=0;i<pipises2.length;i++){
        var vrlen=(offset2*width-width*step_slide+1)%(width*len);
        if(vrlen<0)
         vrlen+=(width*len);
        pipises2[i].style.left=vrlen-3*width+'px';
        offset2++;
    }
    interval=0;

    }
}

function left(){
    if(interval)
    {
    step--;    
    step_slide--;
    checkStep();
    opSet();

    var offset2=0;

    for(let i=0;i<pipises2.length;i++){
        var vrlen=(offset2*width-width*step_slide+1)%(width*len);
        if(vrlen<0)
         vrlen+=(width*len);
        pipises2[i].style.left=vrlen-3*width+'px';
        offset2++;
    }
    interval=0;

    }
}

setInterval(() => {
   left() 
}, 10000);

right();//При первой прогрузке карусель отобоажается не совсем корректно
/*for(let i=0;i<5;i++)
left();*/
