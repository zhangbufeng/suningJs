/*
* @Author: dapang
* @Date:   2018-07-22 12:38:43
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-07-23 23:55:07
*/
window.onload=function(){
	let aside=document.getElementsByClassName("aside")[0];
	let chas=aside.getElementsByClassName("cha");
	let asideBox=document.getElementsByClassName("asideBox");
	console.log(chas);
	for(let i=0;i<chas.length;i++){
		chas[i].onmouseenter=function(){
			for(let j=0;j<chas.length;j++){
				asideBox[j].style.display="none";
			}
			asideBox[i].style.display="block";
		}
		chas[i].onmouseleave=function(){
			asideBox[i].style.display="none";
		}
	}

	let bigBox=document.getElementsByClassName("bigBox")[0];
    let background=bigBox.getElementsByClassName("background")[0];
    let banner=background.getElementsByClassName("banner")[0];
    let warper=banner.getElementsByClassName("warper")[0];
    let as=warper.getElementsByTagName("a");
    console.log(as);
    let num=0;
    let t=setInterval(move,1000);
    function move(){
    	num++;
    	if(num==10){
    		for(let i=0;i<as.length;i++){
    			as[i].style.zIndex=5;
    			num=0;
    		}
    	}
    	as[num].style.zIndex=10;
    }
    banner.onmouseenter=function(){
    	clearInterval(t);
    }
    banner.onmouseleave=function(){
    	t=setInterval(move,2000);
    }
    

}