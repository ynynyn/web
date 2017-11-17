window.onload = function(){
   var oImg = document.getElementById('banner').getElementsByTagName('img');
	var oLi= document.getElementById('round').getElementsByTagName('li');
	var arrImg = Array("img/1.jpg","img/banner3.jpg","img/1.jpg");
	var num=0;
     var timer = setInterval(autoPlay,2000);
       function autoPlay(){
		if( num <  arrImg.length-1){
			changIfor('1');
			}else{
				num=0;
				changIfor('0');
				}
			}
	function changIfor(v){
		if(v==1){
			num++;
			}else if(v==-1){
				num--;
				}else{
					num==0;
					}
		    oImg[0].src = arrImg[num];
			for(j=0;j<oLi.length;j++){
				oLi[j].style.backgroundColor = '';
				}
			oLi[num].style.backgroundColor = " #dca912";
		}
	oImg[0].onmouseover = function(){
		clearInterval(timer);
		}	
	oImg[0].onmouseout = function(){
		timer = setInterval(autoPlay,2000);
		}
 function myMove(obj,attr,target,speed,fn){
			   speed = (parseInt(getStyle(obj,attr))<target)?speed:-speed;
			   clearInterval(obj.timer);
			   obj.timer=setInterval(function(){
				var nowPis = parseInt(getStyle(obj,attr)) + speed;
				if(Math.abs(target - nowPis)< Math.abs(speed)){
					obj.style[attr] = target + "px";
					  clearInterval(obj.timer);
					} else{
					  obj.style[attr] = nowPis + "px";
					} 
				  },100);
			   }
function getStyle(obj,attr){return obj.currentStyle ? obj.currentStyle[attr]: getComputedStyle(obj)[attr];}
 }