$(function(){
	// banner轮播图
	var imgs=$("a",$(".lunbo")[0]);
	var anniu=$("li",$(".anniu")[0]);
	var ban=$(".banner1")[0]
	var btnR=$(".bright")[0];
	var btnL=$(".bleft")[0];
	var btn=$(".btn")[0]
	var flag=true;
		imgs[0].style.zIndex=7;
		imgs[1].style.zIndex=6;
		imgs[2].style.zIndex=5;
		imgs[3].style.zIndex=4;
		imgs[4].style.zIndex=3;
		anniu[0].style.background="#C81623";
		//记录当前图片
		var num=0;
		var t=setInterval(move,2000);
		//当鼠标移入box时停下。移出开始执行
	
	function move(){
		//更新下标
      num++;
      if(num==imgs.length){
             num=0;
         }
         for (var i = 0; i < imgs.length; i++) {
         	animate(imgs[i],{opacity:0},600);
         	anniu[i].style.background="#3E3E3E"
         };
        animate(imgs[num],{opacity:1},600,function(){
        	flag=true;
        });
           anniu[num].style.background="#C81623";
       }
	
	//底部的选项卡
	for (var j = 0; j < anniu.length; j++) {

		anniu[j].index=j;
		anniu[j].onmouseover=function(){
			for (var i = 0; i < imgs.length; i++) {
          	imgs[i].style.zIndex=0;
          	animate(imgs[i],{opacity:0},600);
          	anniu[i].style.background="#3E3E3E"
          	
          }; 
          //imgs[this.index].style.zIndex=1;
           animate(imgs[this.index],{opacity:1},600);
          anniu[this.index].style.background="#C81623";
          num=this.index;
		}
	};
	//鼠标移上去停止执行
	ban.onmouseover=function(){
		clearInterval(t)
		btn.style.display="block";
	}
	ban.onmouseout=function(){
		t=setInterval(move,2000)
		btn.style.display="none";
	}
	btnR.onclick=function(){
		if(flag){
			flag=false;
			move(); 
		}
		   	
   }

  //左边的按键
  btnL.onclick=function(){
  	if(flag){
  		flag=false;
  		movee();
  	}
	
	}

	function movee(){
        num--;
      if(num<0){
             num=imgs.length-1;
         }
         //所有图片层级下降，当前图片层级调高
         for (var i = 0; i < imgs.length; i++) {
          	animate(imgs[i],{opacity:0},600);
          	anniu[i].style.background="#3E3E3E"
          	
          } 
          animate(imgs[num],{opacity:1},600,function(){
          	flag=true;
          });
          anniu[num].style.background="#C81623";
      }	
      // 节点轮播
    var win=$(".ul")[0];
	nodeScroll(win,4)
	function nodeScroll(obj,num){
   var box=$(".xiabox")[0]
	var img=$("a",box)
	var btnr=$(".bright")[1]
	var btnl=$(".bleft")[1]
	var Btn=$(".btn")[1];
	var flags=true;
	var length=img.length
	var iw=parseInt(getStyle(img[0],"width"));
	//初始化
	box.style.width=iw*length+"px";
	var gt=setInterval(moveR,2000);
	function moveR(){
		
			animate(box,{left:-num*iw},600,function(){
		for (var i = 0; i < num; i++) {
			var first=getFirst(box);
			box.appendChild(first);
			box.style.left=0;
			};
			flags=true;
		})
		
		
		
	}
	obj.onmouseover=function(){
		clearInterval(gt);
		Btn.style.display="block";
	}
	obj.onmouseout=function(){
		gt=setInterval(moveR,2000);
		Btn.style.display="none";
	}
	btnl.onclick=function(){
		if(flags){
			flags=false;
		}
		moveL();
	}
	btnr.onclick=function(){
		if(flags){
			flags=false;
		}
		moveR();
	}
	function moveL(){
		for (var i = 0; i < num; i++) {
		var last=getLast(box);
		var first=getFirst(box);
		console.log(first)
		insertBefore(last,first);
		box.style.left=-iw*num+"px";
		animate(box,{left:0},600,function(){
         flags=true;
		})
		
		};	
     
	}

	}
	  var goib=$(".guib")
	  var god=$(".gury")
	  for (var i = 0; i < goib.length; i++) {
	  	yido(goib[i],god[i])
	  };
	  
	  
	//阴影部分
		var yin=$(".yin");
	    var rewbox=$("li",$(".shangr")[0])
	   for (var i = 0; i < yin.length; i++) {
	  	yido(rewbox[i],yin[i])
	    };
	    var banfu=$(".banfu");
	    var bannerzi=$(".bannerzi");
	   
	    for (var i = 0; i < banfu.length; i++) {
	    	 yido(bannerzi[i],banfu[i])
	    };
	    
	   
	  function yido(shs,ssj){
	   ssj.style.display="none";
	  shs.onmouseover=function(){
	  	ssj.style.display="block";
	  }
	   shs.onmouseout=function(){
	  	ssj.style.display="none";
	  }
	 }
	// 选项卡
	for (var i = 0; i < 11; i++) {
		var links=$("li",$(".tab")[i])
	   var lists=$(".flor",$(".floor")[i])
	   tabs(links,lists);
	};
	
	function tabs(links,lists){
          for(var i=0;i<links.length;i++){
          links[i].index=i;
          links[i].onmouseover=function(){
            for(var j=0;j<lists.length;j++){
            links[j].className="";
            lists[j].style.display="none";
          }
          links[this.index].className="select";
          lists[this.index].style.display="block"
          }
          
       }
   }
   //图片移动
     function yidong(obj,obs,whh){
  	for (var i = 0; i < obj.length; i++) {
       obj[i].index=i;
      obj[i].onmouseover=function(){
        animate(obs[this.index],{marginLeft:whh},500,Tween.Quad.easeIn)
      }
      obj[i].onmouseout=function(){
        animate(obs[this.index],{marginLeft:0},500,Tween. Bounce.easeInOut)
      }
     };
    }     
     // 右侧
         var over=getClass('over');
		var carD=getClass('car-down');
		yidong(over,carD,-70);		
	
    // 天天低价
	 var qinr=$("img",$(".donghua")[0])
        yidong(qinr,qinr,-10)
    
   // 双下标遍历
   for (var i = 0; i < $(".rongqi").length; i++) {
   	 var ims=$("a",$(".box")[i]);
     var Box=$(".rongqi")[i]
	var ann=$("li",$(".ann")[i]);
	var btr=$(".sright")[i];
	var btl=$(".sleft")[i];
	var sbtn=$(".sbtn")[i];
   	  shuangxia(ims,Box,ann,btr,btl,sbtn)
  };
   //双下标轮播
  function shuangxia(picims,picBox,picann,picbtr,picbtl,picsbtn){
    
	var flsg=true;
	var widths=parseInt(getStyle(picBox,"width"))
		for (var i = 0; i < picims.length; i++) {
			if(i==0){
				continue;
			}
			picims[i].style.left=widths+"px";
			picann[0].style.background="#B61B1F"
		};
		var index=0;
		var next=0;
		var st=setInterval(moveg,1500);
		function moveg(){
			//下标更新
			next++;
			//判断边界
			if(next==picims.length){
				next=0
			}
			picann[index].style.background="#3E3E3E";
		    picann[next].style.background="#B61B1F";
			picims[next].style.left=widths+"px";
			//动画执行
			animate(picims[index],{left:-widths})
			animate(picims[next],{left:0},function(){
				flsg=true;
			})
			//循环下标。使当前的
			index=next;

		}
		picBox.onmouseover=function(){
		clearInterval(st)
		picsbtn.style.display="block";

	}
	picBox.onmouseout=function(){
		st=setInterval(moveg,1500);
		picsbtn.style.display="none";
	}
	//选项卡
	for (var i = 0; i < picann.length; i++) {
		picann[i].index=i;
		picann[i].onclick=function(){
			if(this.index==index){
				return;
			}
			//就位
			
			picann[index].style.background="#3E3E3E";
			picann[this.index].style.background="#B61B1F"
			//动画
			if(this.index>index){
				picims[this.index].style.left=widths+"px";
				animate(picims[index],{left:-widths})
			animate(picims[this.index],{left:0},function(){
				flsg=true;
			})
			}
			if(this.index<index){
			picims[this.index].style.left=-widths+"px";
			animate(picims[index],{left:widths})
			animate(picims[this.index],{left:0},function(){
				flsg=true;
			})
			}
			
			//更新
			index=this.index;
			//保证上面和下面的同步
			next=index;
		}
	 };
	 //左右按键
	  picbtr.onclick=function(){
		if(flsg){
			flsg=false;
		moveg();
		}
	}
	picbtl.onclick=function(){
		if(flsg){
       flsg=false;
      movek();
		}
	}
	function movek(){
		next--;
		//判断边界
		if(next<0){
			next=picims.length-1;
		}
		//就位
		picann[index].style.background="#3E3E3E";
		picann[next].style.background="#B61B1F";
		picims[next].style.left=-widths+"px";
		animate(picims[index],{left:widths})
		animate(picims[next],{left:0},function(){
			flsg=true;
		});
		index=next;

	}

   }
   //天天低价
   var dibox=$(".dongdong")[0]
	var diimg=$("li",dibox);
	var lengths=diimg.length;
	var kh=parseInt(getStyle(diimg[0],"height"));
	console.log(diimg)
	//初始化
	dibox.style.height=kh*lengths+"px";  
	var ct=setInterval(movet,2000);
	function movet(){
		var index1=getLast(dibox);
		var next1=getFirst(dibox);
		insertBefore(index1,next1);
		dibox.style.top=-kh+"px";
		animate(dibox,{top:0},600)
			
	}
	// 楼层跳转
	     var floors=$(".floor");
          //console.log(floors);
          var elevator=$("li",$(".elevator")[0])
          var car6=$(".car6")[0];
          console.log(car6)
          //console.log(elevator);
          var nuem=$(".num");
          // console.log(num);
          var font=$(".font");
          // console.log(font)
          var arr=[];
         var elevators=$(".elevator")[0] 
          var flgs=true;
          for(var i=0;i<floors.length;i++){
            arr.push(floors[i].offsetTop)
          }
          // console.log(arr);
          for(var i=0;i<elevator.length;i++){
            if(i==0){
              nuem[i].style.display="none";
              font[i].style.display="block";
            }else{
              nuem[i].style.display="block";
              font[i].style.display="none";
            }
          }


          window.onscroll=function(){
            var doc=document.body.scrollTop?document.body:document.documentElement;
            for(var i=0;i<arr.length;i++){
              if(doc.scrollTop>=arr[i]-100){
                for(var j=0;j<elevator.length;j++){
                  nuem[j].style.display="block";
                  font[j].style.display="none";
                }
                nuem[i].style.display="none";
                font[i].style.display="block";
              }

            }
           
          
          for(var i=0;i<elevator.length;i++){
            elevator[i].index=i;
            elevator[i].onclick=function(){
              animate(document.body,{scrollTop:arr[this.index]},500);
              animate(document.documentElement,{scrollTop:arr[this.index]},500)
            }
          }
       //返回顶部
  

	 car6.onclick=function(){
	 	animate(document.body,{scrollTop:0},function(){flgs=true;})
		animate(document.documentElement,{scrollTop:0},function(){flgs=true;})
	    }
			if (document.body.scrollTop>=1800&&document.body.scrollTop<=9700) {
                 elevators.style.opacity="1";
				animate(elevators,{opacity:1})
			}else{
				 elevators.style.opacity="0";
			animate(elevators,{opacity:0})
			} 
		
     }
     	

})