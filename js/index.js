/*
* @Author: dapang
* @Date:   2018-07-22 12:38:43
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-07-23 23:55:07
*/
window.onload=function(){
	//测导航
	let aside=document.getElementsByClassName("aside")[0];
	let chas=aside.getElementsByClassName("cha");
	let asideBox=document.getElementsByClassName("asideBox");
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
	//banner部分
	let bigBox=document.getElementsByClassName("bigBox")[0];
	let bigbox = bigBox.querySelector(".bigbox");
	console.log(bigbox)
    let background=bigBox.getElementsByClassName("background")[0];
    let banner=background.getElementsByClassName("banner")[0];
    let warper=banner.getElementsByClassName("warper")[0];
    let as=warper.getElementsByTagName("a");
	let prev = banner.querySelector(".prev");
	let next=banner.querySelector(".next");
	let btns=banner.querySelector(".btns");
	let a=btns.querySelectorAll("a");
	let num=0;
	let now=0;
    let t=setInterval(move,2000);
    function move(){
		num++;
		if (num == 0) {
			bigbox.style.background = "#256AE3";
		}
		if (num == 1) {
			bigbox.style.background = "#0C8051";
		}
		if (num == 2) {
			bigbox.style.background = "#E3C89B";
		}
		if (num == 3) {
			bigbox.style.background = "#D28CFF";
		}
		if (num == 4) {
			bigbox.style.background = "#D2C38A";
		}
		if (num == 5) {
			bigbox.style.background = "#D9D7D8";
		}
		if (num == 6) {
			bigbox.style.background = "#E9E8E5";
		}
		if (num == 7) {
			bigbox.style.background = "#FEC1C9";
		}
		if(num==as.length-2){
			num=0
		}
    	for(let i=0;i<as.length-2;i++){
			as[i].style.opacity="0"
			
			a[i].style.backgroundColor="#fff"
			a[i].style.borderColor = "#B5AFA5"
		}
		as[num].style.opacity="1"
		a[num].style.backgroundColor = "#ff6700"
		a[num].style.borderColor = "#ff6700"
	}
	function move1() {
		num--;
		if (num == 1) {
			bigbox.style.background = "#D02247";
		}
		if (num == 2) {
			bigbox.style.background = "#47FFF2";
		}
		if (num == 3) {
			bigbox.style.background = "#D4F1EF";
		}
		if (num == 4) {
			bigbox.style.background = "#1F2120";
		}
		if (num == 5) {
			bigbox.style.background = "#D8D8D8";
		}
		if (num == 6) {
			bigbox.style.background = "#FB3570";
		}
		if (num == 7) {
			bigbox.style.background = "#FFBEC8";
		}
		if (num < 0) {
			num = as.length-3;
		}
		for (let i = 0; i < as.length - 2; i++) {
			as[i].style.opacity = "0"
			a[i].style.backgroundColor = "#fff"
			a[i].style.borderColor = "#B5AFA5"
		}
		as[num].style.opacity = "1"
		a[num].style.backgroundColor = "#ff6700"
		a[num].style.borderColor = "#ff6700"
	}
    banner.onmouseenter=function(){
    	clearInterval(t);
    }
    banner.onmouseleave=function(){
    	t=setInterval(move,2000);
    }
    prev.onclick=function(){
		move1();
	}
	next.onclick=function(){
		move();
	}
	for(let i=0;i<a.length;i++){
		a.onclick=function(){
			if (i == 0) {
				bigbox.style.background = "#F19CC5";
			}
			if (i == 1) {
				bigbox.style.background = "#D02247";
			}
			if (i == 2) {
				bigbox.style.background = "#47FFF2";
			}
			if (i == 3) {
				bigbox.style.background = "#D4F1EF";
			}
			if (i == 4) {
				bigbox.style.background = "#1F2120";
			}
			if (i == 5) {
				bigbox.style.background = "#D8D8D8";
			}
			if (i == 6) {
				bigbox.style.background = "#FB3570";
			}
			if (i == 7) {
				bigbox.style.background = "#FFBEC8";
			}
			for (let j = 0; j < as.length; j++) {
				console.log(as.length)
				as[j].style.opacity = 0;
				a[j].style.backgroundColor = "#fff"
				a[j].style.borderColor = "#B5AFA5"
			}
			as[i].style.opacity = 1;
			a[i].style.backgroundColor = "#ff6700"
			a[i].style.borderColor = "#ff6700"
		}
	}
}