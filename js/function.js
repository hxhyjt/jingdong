/*
getClass(select)
获取具有指定class的元素的集合
select指定的classname
  思路：
   1.判断浏览器
    document.getElementsByClassName
   2.获取指定的元素
   true  w3c  Chrome FireFox
   document.getElementsByClassName
   false   ie6-8
   获取所有的元素
   遍历所有元素
   筛选  obj.className==classname;
       arr.push(obj)
       return arr;
       context 如果传了就从指定范围传，如果不传就从默认的document 找
       


*/
function getClass (select,context) {
      var context=context||document;
      if(document.getElementsByClassName){
      return context.getElementsByClassName(select)
      }else{
       var all=context.getElementsByTagName('*');
       var arr=[];
       for (var i = 0; i < all.length; i++) {
       if(checkClass(all[i].className,select)){
            arr.push(all[i]);

       }
      }
      return arr;
      }
}
//className 是否包含含有select
//checkClass(all[i].className--classname select --select
function checkClass(classname,select){
      //var flag=false;
      var cl=classname.split(" ");
      for (var i = 0; i < cl.length; i++) {
            if(cl[i]==select){
          return true;
     }      
    };

   return false;
}

//获取文本和更换文本
function setContent(obj,inner){
      if(inner==undefined){
            if(obj.innerText){
            return  obj.innerText;
            }else{
            return obj.textContent;
            }
    }else{
             if(obj.innerText){
              obj.innerText=inner;
            }else{
             obj.textContent=inner;
            }   
   
      }
      
}
/*
$(string)获取页面中的元素
".one"获取指定类名元素的集合
"#one"获取指定id元素的第一个元素
"div"获取指定标签元素的集合


思路：
 第一步
  判断字符串的首字符
   . getClass()
   # document.getElementById()
   标签 document.getElementsByTagName()

*/
function $(selector,context){
  if(typeof selector=="string"){
      var context=context||document;
    if(selector.charAt(0)=="."){
      //.one-->one
      return getClass(selector.slice(1),context);  
    }else if(selector.charAt(0)=="#"){
      //#one->one
      return document.getElementById(selector.slice(1))
      //div--->div
    }else if(/^[a-z][a-z1-6]{0,9}$/.test(selector)){
      return context.getElementsByTagName(selector);


    }else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
      return document.createElement(selector.slice(1,-1))
    }
  }else if(typeof selector=="function"){
    on(window,"load",selector)
    /*window.onload=function(){
      selector();
    }*/
  }
  
}
/*
 getStyle(one,"width")
 获取指定元素指定的样式
*/
function getStyle(obj,attr){
  if(obj.currentStyle){
   return obj.currentStyle[attr];
  }else{
   return getComputedStyle(obj,null)[attr];
  }

}

//获取子节点
/*
getChild(obj,type)
获取所有的子节点
obj.指定的对象
type 获取子节点的类型
   思路：获取所有的子节点
   声明一个数组
   遍历所有的子节点
   通过子节点的类型
   true chilid[i].nodetype==1
   false  (childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')*/
function getChild(obj,type){
  var child=obj.childNodes;
  var type=type==undefined?true:type;
  //alert(type)
  var arr=[];
  for (var i = 0; i < child.length; i++) {
    if(type===true){
         if(child[i].nodeType==1){
          arr.push(child[i]);
         }
    }else{
       if(child[i].nodeType==1||(child[i].nodeType==3&&child[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
          arr.push(child[i]);
         }
    }
  };
  return arr;

}
/*function getChild(parent,t){
  var childs=parent.childNodes;
  var arr=[]
  var t=t||false;
  alert(t)
  if(t==true){
      for (var i = 0; i < childs.length; i++) {
      
      if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
        arr.push(childs[i])
      }
    };
  }else if(t==false){
      for (var i = 0; i < childs.length; i++) {
        
        if(childs[i].nodeType==1){
          arr.push(childs[i])
        }
      };
  }
  
  return arr
}*/
// 获取第一个子节点

function getFirst(obj){
  return getChild(obj)[0];
}
// 获取最后一个子节点

function getLast(obj){
  var allChild=getChild(obj);

  return allChild[allChild.length-1];
}
// 获取任意一个子节点
function getNum(obj,num){
  return getNum=getChild(obj)[num];
}


// 获取下一个兄弟节点
/*function getNext(objs){
  var next=objs.nextSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,"")=='')){
               next=next.nextSibling
      if(next==null){
      return false;
    }
  }
  return next
}*/
function getNext(obj,type){
        if(type){
          return getNext1(obj,type);
        }else{
          return getNext2(obj,type);
        }
      }
   function getNext1(obj,type){
      var next=obj.nextSibling;
      if(next==null){
        return false;
      }
      while(next.nodeType==8||(next.nodeType==3)){
            next=next.nextSibling
        if(next==null){
          return false;
        }
      }
      return next;
    }
    function getNext2(obj,type){
      var next=obj.nextSibling;
      if(next==null){
        return false;
      }
      while(next.nodeType==8||(next.nodeType==3&&(/^\s+$/.test(next.nodeValue)))){
            next=next.nextSibling
        if(next==null){
          return false;
        }
      }
      return next;
    }
/*获取先前文本的*/
function getPre(obj,type){
        if(type){
          return getPre1(obj,type);
        }else{
          return getPre2(obj,type);
        }
      }
   function getPre1(obj,type){
      var previous=obj.previousSibling;
      if(previous==null){
        return false;
      }
      while(previous.nodeType==8||(previous.nodeType==3)){
            previous=previous.previousSibling;
        if(previous==null){
          return false;
        }
      }
      return previous;
    }
    function getPre2(obj,type){
      var previous=obj.previousSibling;
      if(previous==null){
        return false;
      }
      while(previous.nodeType==8||(previous.nodeType==3&&(/^\s+$/.test(previous.nodeValue)))){
            previous=previous.previousSibling
        if(previous==null){
          return false;
        }
      }
      return previous;
    }
//获取上一个兄弟节点

function getTop(objs){
  var next=objs.previousSibling;
  if(next==null){
    return false;
  }
  while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,"")=='')){
               next=next.previousSibling;
      if(next==null){
      return false;
    }
  }
  return next
}
//插入一个对象之前
function insertBefore(obj1,obj2){
  var parentNodes=obj2.parentNode;
  parentNodes.insertBefore(obj1,obj2);
}
//插入一个对象之后
/*
将obj1插入到obj2后面
思路：将obj1插入obj1下一个兄弟节点的前面
获取obj2的下一个兄弟节点
判断兄弟节点
true 获取的父元素insertBefore(obj1,next)
false appendChild(obj)*/
function insertAfter(obj1,obj2){
  var parent=obj2.parentNode;
    /*var next=obj2.nextSibling;
    insertBefore(obj1,obj2);*/
    var next=getNext(obj2);
    if(next){
     parent.insertBefore(obj1,next);
    }else{
     parent.appendChild(obj1);
    }
}
/*
appendBefore(obj1,obj2)
将obj插入到父元素的最前面
思路:1,找到obj1的第一个子元素first
2，true obj2.insertBefore(obj,first)
false obj2.appendChild*/
function appendBefore(obj1,obj2){
  var first=getFirst(obj2);
  if(first){
    obj2.insertBefore(obj1,first)
  }else{
    obj2.appendChild(obj1)
  }
}
/*给一个事件添加多个*/
function on(obj,event,fn){
  if(obj.addEventListener){
    obj.addEventListener(event,fn,false)
  }else{
    obj.attachEvent('on'+event,fn)
  }
}
/*给一个事件删除一个或多个程序*/
function off(obj,event,fn){
  if(obj.removeEventListener){
    obj.removeEventListener(event,fn,false)
  }else{
    obj.detachEvent('on'+event,fn)
  }
}
/*offset()
获取obj到浏览器的距离
(left:top:)
第一步： 获取所有定位属性的父元素
第二步 将所有父元素的offsetLeft+(border-left)+自身的offset*/
function offset(obj){
  //原本的result没有这个属性。
  var result={left:0,top:0};
  var arr=[];
  //将对象添加的数组中
  arr.push(obj);
  // 获取对象的父元素
  var parent=obj.parentNode;
  while(parent.nodeName!=="BODY"){
    if (getStyle(parent,"position")=="relative"||getStyle(parent,"position")=="absolute"){
      arr.push(parent)
    }
   /* 循环每个父元素*/
    parent=parent.parentNode;
  }
  //console.log(arr)
  // 遍历所有的父元素
  for (var i = 0; i < arr.length; i++) {
    // 获取所有定位属性的父元素左边距
    var left=arr[i].offsetLeft
    //获取所有定位属性父元素的左边框
    var borderLeft=getStyle(arr[i],"border-left")?parseInt(getStyle(arr[i],"border-left")):0;
    //将子元素的左边框变成0
    if(i==0){
      borderLeft=0
    }
    // 返回这个距离
    result.left+=(left+borderLeft);
     //获取所有定位属性的父元素的上边距
    var top=arr[i].offsetTop;
    //获取所有定位属性的父元素的上边框
    var borderTop=getStyle(arr[i],"border-top")?parseInt(getStyle(arr[i],"border-top")):0;
       //将子元素的上边框变成0
    if(i==0){
      borderTop=0
    }
     // 返回这个距离
    result.top+=(top+borderTop);
  };
   return result;
}
function mousewheel (obj,upcallback,downcallback) {
  if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
     }else if(obj.addEventListener){
      obj.addEventListener("mousewheel",scrollFn,false);
//chrome,safari -webkit-
     obj.addEventListener("DOMMouseScroll",scrollFn,false);
//firefox -moz-
}
function scrollFn(e){
  var ev=e||window.event;
  var val=ev.wheelDelta||ev.detail;
  if(val==-120||val==3||val==1){
    upcallback&&upcallback.call(obj)
    console.log("向上")
  }
  if(val==120||val==-3||val==-1){
    downcallback&&downcallback.call(obj);
    console.log("向下")


  }
  
  if (ev.preventDefault ){
    ev.preventDefault(); //阻止默认浏览器动作(W3C)
   }else{
   ev.returnValue = false;
    }
   }
}