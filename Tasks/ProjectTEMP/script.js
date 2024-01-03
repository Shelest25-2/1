document.getElementById('navigation').onmouseover = function(event){
    var target=event.target;
    if (target.className=='notlogo')
    {
        target=event.target.parentNode;
    }
    if(target.className=='menu-item'){
        var s=target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display='block';
    }
}

document.onmouseover=function(event){
    var target=event.target;
    if(target.className!='menu-item' && target.className!='submenu' && target.className!='notlogo' && target.className!='submA'){
        closeMenu();
    }
}

function closeMenu(){
    var menu=document.getElementById('navigation');
    var subm=document.getElementsByClassName('submenu');
    for(var i=0;i<subm.length;i++){
        subm[i].style.display="none";
    }
}