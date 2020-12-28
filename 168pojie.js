
// // // // setTimeout("alert('大家好！')",2000)

// // // // function box(){
// // // // 	alert('大家好！')
// // // // }
// // // // setTimeout(box,2000)


// // // // id=setTimeout(function (){
// // // // 	alert('大家好！');
// // // // },2000);
// // // // alert (id);
// // // // clearTimeout(id);  取消当前的超时调用方法

// // // // setInterval(function(){
// // // // 	alert('可以重复不断的执行，大家好！')
// // // // },2000)

// // // // id=setInterval(function(){
// // // // 	alert('可以重复不断的执行，大家好！')
// // // // },2000)
// // // // clearInterval(id)  取消当前的重复调用方法

// // // // var start=1
// // // // var end=5
// // // // id=setInterval(function(){	
// // // // 	if (start>end){
// // // // 		clearInterval(id); //this代表本身
// // // // 		}else{
// // // // 			//alert(start);
// // // // 			document.getElementById('a').innerHTML+=start;
// // // // 		}
// // // // 		start++;
// // // // 	},1000)


// // // // var num=0,max=5;
// // // // function box(){
// // // // num++;
// // // // document.getElementById('a').innerHTML+=num;
// // // // if(num==max){alert("5秒时间到！~");}else{
// // // // 	setTimeout(box,1000);   //这是一个递归
// // // // }
// // // // }
// // // // setTimeout(box,1000)

// // // // alert(location)
// // // // alert(location.hash)
// // // // alert(location.host)
// // // // alert(location.hostname)
// // // // alert(location.href)
// // // // alert(location.pathname)
// // // // alert(location.port)
// // // // alert(location.protocol)
// // // // alert(location.search)
// // // // location.href="http://www.163.com"





// // // // function getArgs(){  //
// // // // 	var args=[];
// // // // 	var qs= location.search.length>0?location.search.substring(1):'';
// // // // 	alert(qs);

// // // // 	var items=qs.split('&');
// // // // 	alert(items);

// // // // 	var item=null,name=null,value=null;
// // // // 	for(var i=0;i<items.length;i++){
// // // // 		item=items[i].split('=');
// // // // 		name=item[0];
// // // // 		value=item[1];
// // // // 		alert(name);
// // // // 		alert(value);
// // // // 		args[name]=value;
// // // // 	}
// // // // 	return args;
// // // // }
// // // // var data=getArgs();
// // // // alert(data['id']);


// // // // function next(){
// // // // 	history.forward();
// // // // }

// // // // function back(){
// // // // 	history.back();
// // // // }
// // // // function go(n){
// // // // 	history.go(n);
// // // // }
// // // // function reflu(){
// // // // 	location.reload();
// // // // }

// // // // alert('浏览器名称：'+navigator.appName)

// // // // alert('浏览器版本：'+navigator.appVersion)
// // // // alert('浏览器用户代理字符串：'+navigator.userAgent)
// // // // alert('浏览器所在的系统：'+navigator.platform)
// // // // */


// // // // //location.assign('http://www.baidu.com')
// // // // //location.reload(true)
// // // // //location.replace('http://www.baidu.com')
// // // // //alert(history.lenght)
// // // // /*
// // // // for(var i=0;i<navigator.plugins.length;i++){
// // // // 	document.write('插件名'+navigator.plugins[i].name+'<br>')
// // // // }


// // // // /*
// // // // if(window.closed){
// // // // 	alert('关闭窗口')
// // // // }

// // // // *//*
// // // // document.write(navigator.userAgent)
// // // // alert(window.closed)

// // // // alert(window.name)

// // // // /*
// // // //                    DOM类型
// // // // 类型名   	 说明
// // // // Node     	 表示所有类型值的统一接口，IE 不支持
// // // // Document 	表示整个HTML文档或文档的根节点
// // // // Element 	表示元素节点类型
// // // // Text 		表示文本节点类型
// // // // Comment 	表示文档中的注释类型
// // // // CDATASection 表示 CDATA 区域类型
// // // // DocumentType 表示文档声明类型
// // // // DocumentFragment 表示文档片段类型
// // // // Attr 		表示属性节点类型



// // // //                             节点的类型（全）
// // // // Node 接口是 DOM1 级就定义了，Node 接口定义了 12 个常量和数值以表示每个节点的类
// // // // 型。除了 IE 之外，所有浏览器都可以访问这个类型。
// // // // 			      Node的常量
// // // // 常量名					 	说明 	nodeType的值
// // // // ELEMENT_NODE 				元素 		1
// // // // ATTRIBUTE_NODE 				属性 		2
// // // // TEXT_NODE 					文本 		3
// // // // CDATA_SECTION_NODE			 CDATA 		4
// // // // ENTITY_REFERENCE_NODE 		实体参考	 5
// // // // ENTITY_NODE 				实体 		6
// // // // PROCESSING_INSTRUCETION_NODE 处理指令	 7
// // // // COMMENT_NODE 				注释 		8
// // // // DOCUMENT_NODE 				文档根		 9
// // // // DOCUMENT_TYPE_NODE 			doctype/文档声明 	10
// // // // DOCUMENT_FRAGMENT_NODE 		文档片段	 11
// // // // NOTATION_NODE				 符号 		12
// // // //  */


// // // // /*
// // // // window.onload=function(){

// // // // alert(Node)
// // // // alert(Node.ELEMENT_NODE) //1




// // // // alert(document)//*获取整个HTML文档对象
// // // // alert(document.nodeType)//9
// // // // alert(document.childNodes[0])//第1个子节点，文档声明




// // // // alert(document.documentElement) //*直接获取HTML标签节点
// // // // alert(document.body)//*直接获取body标签节点
// // // // alert(document.doctype)//获取HTML标签之前的文档声明，!DOCTYPE节点
// // // // alert(document.title)//获取title标题字符，可以赋值
// // // // alert(document.URL)//获取当前URL路径
// // // // alert(document.domain)//只能服务端上运行，获取域名
// // // // alert(document.referrer)//只能服务端上运行，获取通过链接访问来的，上一个页面的URL




// // // // /*
// // // // document.anchors; //获取文档中所有带name属性的<a>元素集合
// // // // document.links; //获取文档中所有带 href 属性的<a>元素集合
// // // // document.applets; //获取文档中<applet>元素集合，已不用
// // // // document.forms; //获取文档中所有的<form>元素集合
// // // // document.images; //获取文档中所有的<img>元素集合
// // // // *//*
// // // // alert(document.anchors.length)
// // // // alert(document.links.length)
// // // // alert(document.forms.length)
// // // // alert(document.images.length)





// // // // /*
// // // // Element类型：元素节点类型
// // // // 	部分元素对应类型表
// // // // 元素名 			类型
// // // // HTML 			HTMLHtmlElement
// // // // DIV 			HTMLDivElement
// // // // BODY 			HTMLBodyElement
// // // // P 				HTMLParamElement
// // // //  */

// // // // /*


// // // // var box=document.getElementById('box')
// // // // var text1=document.createTextNode('MR.') //同时创建两个或多个同一级别的文本节点
// // // // var text2=document.createTextNode('zhang')//会产生分离的N个节点
// // // // box.appendChild(text1)
// // // // box.appendChild(text2)

// // // // box.normalize()//把同级的相邻的N个文本节点合并在一起
// // // // alert(box.childNodes.length)//1
// // // // alert(box.firstChild.nodeValue)//测试BOXMR.zhang

// // // // box.firstChild.splitText(3)//取文本节点的前3个字符，打断，分割成新的文本节点。即把一个文本节点一分为二了
// // // // alert(box.firstChild.nodeValue)//测试B
// // // // box.firstChild.deleteData(2,1)//从2位置起，删除1个字符 
// // // // alert(box.firstChild.nodeValue) //B
// // // // box.firstChild.insertData(1,'添加字')//在第1个位置插入指定的字符
// // // // alert(box.firstChild.nodeValue)  //B添加字

// // // // var box2=document.getElementById('box2')
// // // // box2.firstChild.replaceData(0,2,'MISS')//从0位置起，删除2个字符，替换为指定的字符MISS
// // // // alert(box2.firstChild.nodeValue)
// // // // var str1=box2.firstChild.substringData(0,3)//从第0个位置获取3个字符，直接输出，不分割原文本节点
// // // // alert(str1)




// // // // var comm=box2.childNodes[1] //获取box2中的注释节点
// // // // alert (comm.nodeType)//8
// // // // alert(comm.nodeValue) //获取注释节点中的文字
// // // // /*
// // // // PS：在 IE 中，注释节点可以使用！当作元素来访问。
// // // // var comment = document.getElementsByTagName('!'); 返回文档中的所有注释节点，包括<!DOCTYPE>
// // // // alert(comment.length);
// // // //  */


// // // // /*

// // // // }

// // // //  */
// // // // /*
// // // // 元素节点
// // // // 方法 								说明
// // // // document.getElementById(名) 			获取特定 ID 元素的HTML节点
// // // // document.getElementsByTagName(名) 	获取相同元素的节点列表，返回对象数组
// // // // document.getElementsByName(名)		获取相同名称的节点列表，返回对象数组
// // // // 		getAttribute(名) 			获取特定元素节点属性的值
// // // // 		setAttribute(名，值) 		设置特定元素节点属性的值
// // // // 		removeAttribute(名) 			移除特定元素节点属性

// // // // */

// // // // function abc(){
// // // // 	alert('onclick出现')
// // // // }



// // // // window.onload=function(){


// // // // var box=document.getElementById('box'); //DOM操作，必须放到HTML加载后才查找得到相应的标签。
// // // // 										//否则要用到window.onload=function(){...}事件，当网页所有内容都加载完毕后，再执行的函数
// // // // 									     //按HTML元素的id属性，获取HTML元素对象（包含标签里面的所有内容）
// // // // 											//box要养成区分大小写的好习惯，因为不是所有浏览器都兼容不区分大小写
// // // // alert(box) //返回一个id=box的DIV对象
// // // // alert(box.tagName)//获取元素节点的大写的标签名
// // // // alert(box.innerHTML)//获取元素节点里的文本，如果内嵌的有HTML标签也作为文本一起获取
// // // // box.innerHTML='玩转<b>JS</b>' //设置节点标签中的文本（可包含HTML代码）
// // // // alert(box.id) //获取元素节点id属性的值
// // // // alert(box.title) //获取元素节点title属性的值
// // // // alert(box.className)//获取元素节点class属性的值
// // // // alert(box.style)//获取元素节点style属性对象
// // // // alert(box.style.color)//获取元素节点style属性对象中color属性的值
// // // // alert(box.bbb) //自定义属性的值直接获取（只有IE浏览器支持）

// // // // //以上属性都可以直接进行赋值改变！！！！！！！！！！！！！！！！！！！！！



// // // // var box2=document.getElementById('a1'); //获取超链接元素节点（包含标签里面的所有内容）
// // // // alert(box2)  //返回超链接地址
// // // // alert(box2.tagName)
// // // // alert(box2.innerHTML)



// // // // var box3=document.getElementById('input1') //获得输入框元素节点（包含标签里面的所有内容）
// // // // alert(box3) //返回一个id=box的DIV对象
// // // // alert(box3.tagName)//获取元素节点的大写的标签名
// // // // alert(box3.id) //获取元素节点id属性的值
// // // // alert(box3.value) //获取了input框中的文本
// // // // box3.value='改变了输入框中的文本'



// // // // var box4=document.getElementsByTagName('li'); //按HTML的元素标签名，获取所有此HTML标签
// // // // 												//名字的元素对象，返回包含多个元素对象的数组。
// // // // alert(box4) //返回包含多个li元素对象的数组。
// // // // alert(box4.length)  //数组的个数，即有多少个li标签。
// // // // alert(box4[0])//返回第1个li元素对象
// // // // alert(box4.item(0))//同上
// // // // alert(box4[0].tagName) //返回第1个元素对象的HTML标签名
// // // // alert(box4[0].innerHTML) //返回第1个HTML元素对象内的文本
// // // // box4[0].innerHTML="啊啊啊" //改变第1个HTML元素对象内的文本



// // // // var body=document.getElementsByTagName('body')[0] //因为body标签只有一个，所以直接取下标0，就得到body标签对象中的所有内容
// // // // alert(body)  //得到body标签对象（包含标签里面的所有内容），后面做动态HTML时，非常需要body节点来操作
// // // // alert(body.innerHTML) //取body标签里面的所有内容



// // // // var all=document.getElementsByTagName('*') //返回所有的HTML标签对象形成的数组
// // // // alert(all.length)    //得到此网页中共有多少对（个）HTML标签
// // // // alert(all[12].tagName)
// // // // alert(all[12].innerHTML)



// // // // var input=document.getElementsByName('inputname1')  //按HTML标签元素的name属性，获取所有
// // // // 												//相同名字的标签对象，返回对象数组
// // // // 												//在IE浏览器中，如果某HTML标签，没有标准的name属性，就获取不到，如<div name='aaa'>,但谷歌，火狐可以。
// // // // alert(input) //返回标签对象数组
// // // // alert(input.length) //返回获取的标签个数
// // // // alert(input[0].value) //返回第一个标签里的value属性的值
// // // // alert(input[1].value) //返回第二个标签里的value属性的值
// // // // alert(input[1].type) //返回第二个标签里的type属性的值
// // // // alert(input[1].checked) //返回第二个标签里的checked属性的值


// // // // var box5=document.getElementById('box')
// // // // alert(box.getAttribute('bbb'))//获取某HTML标签元素的属性的值 ，其实前面用.获取大部分已可以（用这种方式获取自定义的属性，所有浏览器都可以获取到）
// // // // alert(box.getAttribute('style'))//获取某HTML标签元素的style属性的字符串值 (非IE返回的是字符串,IE返回的是属性对象)
// // // // alert(box.getAttribute('class'))//获取某HTML标签元素的class属性的值 (非IE可获取,IE不能获取)
// // // // alert(box.getAttribute('className'))//获取某HTML标签元素的class属性的值 (IE可获取,非IE不能获取)
// // // // alert(box.getAttribute('onclick'))//获取某HTML标签元素的onclick属性中的字符串（IE7以上返回的是函数式）
// // // // alert(box.onclick)//获取某HTML标签元素的onclick属性指向的函数式



// // // // var box6=document.getElementById('box')
// // // // box6.setAttribute('align','center') //给获取的某个HTML标签创建新的属性和值，可以设置自定义属性
// // // // box6.setAttribute('bbb','xxx')      //如果属性已有，就覆盖。
// // // // box6.setAttribute('style','color:green')//IE7及以下不支持styly属性设置



// // // // var box6=document.getElementById('a1')
// // // // box6.removeAttribute('href') //移除获取的某个HTML标签的某个属性

// // // // }




// // // // /*
// // // // 						document节点操作
// // // // DOM 不单单可以查找节点，也可以创建节点、复制节点、插入节点、删除节点和替换节点。
// // // // 方法 							说明
// // // // document.write(字符串) 				这个方法会清除原来的HTML文档，然后把任意字符串写到HTML文档中，但掌握不了插入次序。多用于测试。					
// // // // document.createElement(HTML代码) 	创建一个元素节点
// // // //    节点.appendChild(新节点变量名) 	将新节点追加到该节点里面的子节点列表的末尾
// // // // document.createTextNode(字符串)		创建一个文件节点
// // // //  父节点.insertBefore(新节点，某节点)	从父节点起将新节点插入在某个节点前面(可以变通一下插入在它后面)
// // // //  父节点.replaceChild(新节点，旧节点)	从父节点起，用新节点替换旧节点，会覆盖旧节点的所有内容
// // // // 	节点.cloneNode(true) 				复制节点，true是把标签内的文本也复制  false只是把标签复制
// // // //  父节点.removeChild() 				从父节点起移除节点
// // // // */



// // // // window.onload=function(){
// // // // // document.write('<div id=a>这是JS写入的文字1</div>') //覆盖原HTML文档把任意依次字符写入到HTML文档中，但掌握不了插入次序
// // // // // document.write('<div id=b>这是JS写入的文字2</div>') 
// // // // var box=document.getElementById('box')
// // // // var p=document.createElement('p') //创建一个元素节点P，存在于内存中，还没有添加到文档中去。
// // // // box.appendChild(p)//在DIV（BOX）节点里面的子节点列表末尾添加新的P节点
// // // // var text=document.createTextNode("JS添加第4节")//创建文本节点
// // // // p.appendChild(text)//把文本节点添加到P节点里面的子节点列表末尾



// // // // var div=document.createElement('div') //创建新的DIV标签
// // // // div.setAttribute('id','pos1')//给新的DIV标签设置属性
// // // // document.getElementsByTagName('body')[0].appendChild(div) //添加到body标签里面的子节点列表的最后去
// // // // /////// box2=document.getElementsByTagName('div')[1] //获取这个新添加的DIV标签
// // // // /////// box2.setAttribute('id','pos') //给新的DIV标签添加id=pos属性


// // // // var div2=document.createElement('div') //创建新的DIV标签，如果用原DIV就会把之前上一步的操作覆盖了。
// // // // box.parentNode.insertBefore(div2,box) //从BOX的父节点，即body节点，把新的DIV标签插入到BOX DIV标签之前，与它同级
// // // // box.parentNode.insertBefore(div2,box.nextSibling) //从BOX的父节点，把新的DIV标签插入到BOX DIV标签之后，与它同级



// // // // var box3=document.getElementById('box3') //获取box3节点
// // // // //////alert(box3.parentNode)
// // // // var a=document.createElement('a')  //创建新的A标签
// // // // a.setAttribute('href','http://www.sogou.com') //设置A标签的超链接属性
// // // // a.innerHTML='搜索' //设置A标签里面的文本
// // // // box3.parentNode.replaceChild(a,box3) //从BOX3的父节点起，替换原BOX3节点为新的A节点



// // // // var box4=document.getElementById('box4')//获取要复制的节点
// // // // var clone=box4.cloneNode(true)//复制节点赋给变量clone，true是把标签内的文本也复制  false只是把标签复制
// // // // box4.parentNode.appendChild(clone) //把复制的节点，添加到BOX4的父节点即BODY节点里面的子节点列表的末尾



// // // // var box=document.getElementById('box') //获取ID=DOX的节点
// // // // //box.removeChild(box.childNodes[1]) //删除此节点下的第2个子节点，因为第1个子节点是空白节点
// // // // var box=removeWhiteNode(box)//去除此节点里面的所有空白节点
// // // // box.removeChild(box.firstChild)//删除本节点下面的第一个子节点
// // // // // alert(removeWhiteNode(box).length)

// // // // var box5=document.getElementById('del') //获取ID=del的节点
// // // // box5.parentNode.removeChild(box5) //删除整个获取的节点






// // // //     //去除某个节点中的子节点中的空白节点
// // // // function removeWhiteNode(node){ //传入的是节点
// // // // 	for(var i=0;i<node.childNodes.length;i++){
// // // // 		if (node.childNodes[i].nodeType===3 && /^\s+$/.test(node.childNodes[i].nodeValue)){ //如果当前节点为文本节点且文本是空白
// // // // 			node.childNodes[i].parentNode.removeChild(node.childNodes[i]) //从当前节点的父节点起移除本子节点
// // // // 		}}
// // // // 		//alert(node)
// // // // 	return node //返回节点
// // // // }


// // // // }








// // // // /*
// // // //                         节点的类型和属性
// // // // DOM获取的HTML标签节点，分为以下3种类型。都有 nodeName、nodeType 和 nodeValue 三个属性
// // // // 节点类型 	
// // // // 			nodeName 	nodeType 	nodeValue
// // // // 元素节点 	元素名称 	1 			null
// // // // 属性节点 	属性名称 	2 			属性值
// // // // 文本节点 	#text 		3 			文本内容(不包含 html)
// // // // */



// // // // window.onload=function(){
// // // // var box=document.getElementById('box')
// // // // alert(box)
// // // // alert(box.nodeName) //返回HTML大写标签名，等价于box.tagName
// // // // alert(box.nodeType) //元素节点类型为1
// // // // alert(box.nodeValue) //元素节点没有值，返回null



// // // // /*
// // // // 		     层次节点操作
// // // // 属性 			说明
// // // // childNodes 		获取当前元素节点的所有子节点，谷歌和火狐浏览器包括了HTML代码之间的换行和空白，
// // // // 					也认为是文本节点对象IE浏览器不包括。返回对象数组。
// // // // firstChild 		获取当前元素节点的第一个子节点
// // // // lastChild 		获取当前元素节点的最后一个子节点
// // // // ownerDocument 	获取该节点的文档根节点，相当与 document
// // // // parentNode 		获取当前节点的父节点
// // // // previousSibling 获取当前节点的前一个同级节点
// // // // nextSibling 	获取当前节点的后一个同级节点
// // // // attributes 		获取当前元素节点的所有属性节点集合
// // // // */



// // // // alert(box.childNodes) //获取当前元素节点的所有子节点，返回对象数组，包括了HTML代码之间的换行和空白也认为是文本节点对象
// // // // alert(box.childNodes.length) //3个: DIV测试标签  <b>玩转JS</b>  并不难
// // // // alert(box.childNodes[0].nodeName) //文本节点 #text
// // // // alert(box.childNodes[0].nodeType) //3
// // // // alert(box.childNodes[0].nodeValue) //DIV测试标签
// // // // alert(box.childNodes[0].innerHTML) //文本节点，取不到里面的内容。undefined

// // // // alert(box.childNodes[1].nodeName) //*元素节点 B
// // // // alert(box.childNodes[1].nodeType) //*1
// // // // alert(box.childNodes[1].nodeValue) //*元素节点，节点中没有值 null
// // // // alert(box.childNodes[1].innerHTML) //*元素节点，取到了里面的内容。 玩转JS



// // // // for(i=0;i<box.childNodes.length;i++){
// // // // 	if(box.childNodes[i].nodeType===1){	alert('这是元素节点：'+box.childNodes[i].nodeName+'-'+box.childNodes[i].innerHTML)
// // // // }else if(box.childNodes[i].nodeType===3){alert('这是文本节点：'+box.childNodes[i].nodeValue)
// // // // }}



// // // // var box2=document.getElementById('pox1')
// // // // var box3=document.getElementById('pox2')
// // // // box2.innerHTML='<b>这是innerHTML赋值</b>'  //innerHTML赋值时，里面的HTML代码会被执行
// // // // box3.childNodes[0].nodeValue='<b>这是nodeValue赋值</b>' //nodeValue赋值时，里面的HTML代码会被转义，不能被执行



// // // // var box4=document.getElementById('box')
// // // // alert(box4.firstChild.nodeValue)//获取元素节点里面的第1个子节点（文本节点）
// // // // alert(box4.lastChild.nodeValue)//获取元素节点里面的最后一个子节点（文本节点）
// // // // boot=box4.ownerDocument //返回当前节点所在文档的根节点对象数组，即相当于document,就是整个HTML文档对象,这是一个特别的类型
// // // // alert(boot.childNodes[0].tagName)//HTML .尽管是最顶层的元素节点，只有1个，但返回的却是一个数组，要用下标取出来
// // // // alert(boot.childNodes[0].innerHTML)//
// // // // alert(boot.nodeType) // 9 这是一个特别的类型
// // // // alert(boot.nodeName) //#document



// // // // alert(box4.parentNode.nodeName) //当前节点的父节点 body
// // // // alert(box4.previousSibling.nodeName) //当前节点的前一个同级节点(HTML源文件代码要在同一行或不能有回车换行)
// // // // alert(box4.nextSibling.innerHTML)//当前节点的下一个同级节点(HTML源文件代码要在同一行或不能有回车换行)



// // // // alert(box4.attributes) //获取当前(元素)节点中的所有属性节点，返回属性节点数组
// // // // alert(box4.attributes.length) //5 得到属性个数
// // // // alert(box4.attributes[0].nodeType) //属性类型 现在浏览器已从左到右获得属性了，以前的是从右到左
// // // // alert(box4.attributes[0].nodeName)//属性名称
// // // // alert(box4.attributes[0].nodeValue) //属性的值
// // // // alert(box4.attributes['style']) //是否有这个style属性 object Attr
// // // // alert(box4.attributes['style'].nodeValue) //style属性的值



// // // //                                 ////*移除空白节点
// // // // var box5=document.getElementById('x')
// // // // alert(box5.childNodes.length) //7 返回该节点中的所有子节点数组，因为包括了html代码之间的换行和空白，所以这种情况下要忽略或去除空白。
// // // // box6=removeWhiteNode(box5.childNodes) //去除空白字符的节点，
// // // // alert(box6.length)//3

// // // // function removeWhiteNode(node){ //传入的是节点数组
// // // // 	for(var i=0;i<node.length;i++){
// // // // 		if (node[i].nodeType===3 && /^\s+$/.test(node[i].nodeValue)){ //如果当前节点为文本节点且文本是空白
// // // // 			node[i].parentNode.removeChild(node[i]) //从当前节点的父节点起移除本子节点
// // // // 		}}
// // // // 	return node //返回数组
// // // // }




// // // //     //去除节点中的子节点中的空白节点
// // // // function removeWhiteNode2(node){ //传入的是节点
// // // // 	for(var i=0;i<node.childNodes.length;i++){
// // // // 		if (node.childNodes[i].nodeType===3 && /^\s+$/.test(node.childNodes[i].nodeValue)){ //如果当前节点为文本节点且文本是空白
// // // // 			node.childNodes[i].parentNode.removeChild(node.childNodes[i]) //从当前节点的父节点起移除本子节点
// // // // 		}}
// // // // 		//alert(node)
// // // // 	return node //返回数组
// // // // }
// // // // }


// // // /*
// // // //判断浏览器的模式
// // // 从 IE6 开始开始区分标准模式和混杂模式(怪异模式)，主要是看有没有文档的声明。IE 为
// // // document 对象添加了一个名为 compatMode 属性，这个属性可以识别 IE 浏览器的文档处于
// // // 什么模式如果是：
// // // 标准模式，则返回 CSS1Compat，如果是混杂模式则返回 BackCompat。
// // // 后来，火狐和谷歌也有了这些模式。
// // // 从 IE8 后，又引入 documentMode新属性，因为 IE8 有 3 种呈现模式分别为：
// // // 标准模式 8，仿真模式 7，混杂模式 5。所以如果
// // // 想测试 IE8 的标准模式，就判断 document.documentMode > 7 即可
// // //  */
// // // window.onload=function(){

// // // alert(document.compatMode) //CSS1Compat
// // // //去掉HTML之前的申明，浏览器就进入混杂模式
// // // //浏览器的模式不同，主要体现在JS获取浏览器页面的宽度长度方法不一样，要做浏览器兼容处理
// // // if (document.compatMode == 'CSS1Compat') {
// // // alert(document.documentElement.clientWidth);
// // // } else {
// // // alert(document.body.clientWidth);
// // // }




// // // ////滚动页面的方法
// // // var box=document.getElementById('box')
// // // box.scrollIntoView() //把指定的节点的信息在浏览器中滚动到可见的范围内，即滚动页面
// // // // document.getElementById('box').scrollIntoView()//设置指定可见，多与事件绑定




// // // ////children
// // // ////获取某个节点的子节点对象数组，并忽略空白节点
// // // var boxren=box.children
// // // alert(boxren.length)
// // // alert(box.childNodes.length)//不忽略空白节点的子节点数组对象




// // // ////contains(节点)判断节点是不是另一个节点的子节点,火狐现在已支持了
// // // var p=box.firstChild
// // // alert(box.contains(p))//true




// // // alert(box.compareDocumentPosition(p)) //20
// // // /*在 谷歌和Firefox 的 DOM3 级实现了 compareDocumentPosition()方法
// // // 确定两个节点之间的关系。
// // // 		返回数值的关系掩码表
// // // 掩码 			节点关系
// // // 1 				无关(节点不存在) 
// // // 2 				居前(节点在参考点之前) 
// // // 4 				居后(节点在参考点之后) 
// // // 8 				包含(节点是参考点的祖先)
// // // 16 				被包含(节点是参考点的后代)
// // // PS：为什么会出现 20，那是因为满足了 4 和 16 两项，最后相加了。
// // // */




// // // /////innerText获取文本并过滤掉HTML，直接删掉了
// // // /////textContent 同上，以前是火狐用的
// // // var box4=document.getElementById('box4')
// // // alert(box4.innerText)//获取文本(含换行)并过滤掉HTML，直接删掉了
// // // alert(box4.textContent)//获取文本(不含换行)并过滤掉HTML
// // // box4.innerText='js赋值了<b>神奇</b>'//赋值时，（遇到HTML代码就转义为纯文本显示，不执行）
// // // alert(box4.textContent)
// // // box4.textContent='JS的另一个获取标签内<b>文本</b>的属性<em>啊</em>'//赋值时，（遇到HTML代码就转义为纯文本显示，不执行）




// // // ////innerHTML获取文本并包含HTML
// // // ////赋值时，如果遇到HTML代码就执行，不转义为纯文本
// // // ////虽然 innerHTML 可以插入 HTML（HTML执行，不转义成纯文本），但本身还是有一定的限制，也就是
// // // ///所谓的作用域元素，(必须在<body></body>之间)离开这个作用域就无效了，
// // // ///并且一旦<script></script>失效，就把相应标签的内容还原成网页的静态内容了。
// // // // box4.innerHTML='<script>alert('xxx')</script>'//失败并还原，还原成网页的静态内容
// // // // box4.innerHTML='<style>background:red</style>JS中的innerHTML<b>赋值</b>'//部分失败，背景变不成红色




// // // ////outerText (现在的火狐仍不支持)取值时忽略了HTML.而赋值方法相当危险，他
// // // ////不单替换了文本内容，还将元素直接抹去，就是说标签没了（HTML转义成纯文本显示，不执行）
// // // var box5=document.getElementById('box5')
// // // alert(box5.outerText)//取值时忽略了HTML
// // // box5.outerText='这是OUTERTEXT的赋值<b>啊</b>'




// // // ////outerHTML 获得该节点的所有HTML代码
// // // ///而赋值方法相当危险，他不单替换了文本内容，还将元素直接抹去。（HTML执行，不转义成纯文本）
// // // var box6=document.getElementById('box6')
// // // alert(box6.outerHTML)//取值时忽略了HTML
// // // box6.outerHTML='这是OUTERHTML的赋值<b>啊1111111111</b>'



// // // }





// // // /*
// // // PS：关于最常用的 innerHTML 属性和节点操作方法的比较，在插入大量 HTML 标记时
// // // 使用 innerHTML 的效率明显要高很多。因为在设置 innerHTML 时，会创建一个 HTML 解
// // // 析器。这个解析器是浏览器级别的(C++编写)，因此执行 JavaScript 会快的多。但，创建和
// // // 销毁 HTML 解析器也会带来性能损失。最好控制在最合理的范围内，如下：

// // // for (var i = 0; i < 10; i ++) {
// // // ul.innerHTML = '<li>item</li>'; //避免频繁
// // // }
// // // //改
// // // for (var i = 0; i < 10; i ++) { a = '<li>item</li>'; //临时保存
// // // }
// // // ul.innerHTML = a;


// // //  */

// // // /*
// // // 操作内联或链接的CSS样式表(除行内CSS)
// // // 在获取CSS样式表对象后,可以用以下的属性和方法来操作
// // // 属性或方法 		说明
// // // disabled 	获取和设置样式表是否被禁用
// // // href 		如果是通过<link>包含的，则样式表为 URL，否则为 null
// // // media 		样式表支持的所有媒体类型的集合
// // // ownerNode 	指向拥有当前样式表节点的指针
// // // parentStyleSheet		 @import 导入的情况下，得到父 CSS 对象
// // // title 		ownerNode 中 title 属性的值
// // // type 		样式表类型字符串
// // // cssRules 	样式表包含样式规则的集合，IE 不支持
// // // ownerRule 	@import 导入的情况下，指向表示导入的规则，IE 不支持
// // // deleteRule(index) 		删除 cssRules 集合中指定位置的规则，IE 不支持
// // // insertRule(rule, index) 	向 cssRules 集合中指定位置插入 rule 字符串，IE 不支持



// // // */

// // // window.onload=function(){
// // // // alert(document.implementation.hasFeature('styleSheets','2.0')) //检测浏览器是否支持链接,内联式样式表
 
// // //                 ////一,获取CSS对象的方法一(分IE和非IE)
// // // // var link=document.getElementsByTagName('link')[0]//获取外联的CSS的link标签元素节点
// // // // var sheet=link.sheet||link.styleSheet //获取链接的CSS样式表对象.非IE||IE支持

// // // //// var style=document.getElementsByTagName('style')[0]; //获取内联的CSS的style标签元素节点
// // // //// var style=style.sheet||style.styleSheet//获取内联的CSS样式表对象.非IE||IE支持
// // // // alert(sheet=style)
				

// // // 				////一,获取CSS对象的方法二(通用)
// // // var sheets=document.styleSheets//获取内联和外链接的所有的CSS集合(除标签元素内的行内CSS),所有浏览器都支持
// // // var sheet=sheets[0]//取第1个
// // // // alert(sheet)
// // // // alert(sheet.disabled=false) //获取或设置是否禁止使用连接的CSS
// // // alert(sheet.href) //获取CSS的链接地址

// // // 				////二,获取CSS样式规则集合(不行,难道要放在服务器端或没有权限????)
// // // // alert(sheet.cssRules)//获取样式规则的集合,即一群一群的CSS样式组成的的数组
// // // // alert(sheet.cssRules[0])//获取样式表中第一个规则
// // // // alert(sheet.cssRules[0].cssText)//获取CSS文件中第1条CSS规则的文本
// // // // alert(sheet.cssRules[0].selectorText)//获取第1条CSS规则的选择符
// // // // alert(sheet.cssRules[1])//获取样式表中第二个规则
// // // /*
// // // CSSStyleRule 样式表规则可以使用的属性
// // // 属性 			说明
// // // cssText 			获取当前整条规则对应的文本，IE 不支持
// // // parentRule			 @import 导入的，返回规则或 null，IE 不支持
// // // parentStyleSheet 	当前规则的样式表，IE 不支持
// // // selectorText		 获取当前规则的选择符文本
// // // style 				很重要,返回 CSSStyleDeclaration 对象，可以获取和设置样式属性值
// // // type 				表示规则的常量值，对于样式规则，值为 1，IE 不支持
// // // */
// // // // sheet.deleteRule(0)//非IE删除第1条规则
// // // // sheet.insertRule('body{background-color:red}',0)//非IE在第1个位置,添加一条CSS样式规则

// // // // alert(sheet.rules)//IE获取规则集合的方法
// // // // sheet.removeRule(0)//IE删除第1条规则
// // // // sheet.addRule('body','background-color',0)//IE在第1个位置,添加一条CSS样式规则


// // //            //获取和赋值CSS文件中某一个规则的属性值
// // // // var rules=sheet.cssRules||sheet.rules //兼容IE和非IE获取CSS文件中规则集合的方法
// // // // var rule1=rules[0]
// // // // alert(rule1.style.color)//red
// // // // rule1.style.color=green//设置值


// // // }





// // // /*
// // // 在一个表格里
// // // thead标签只能有一个
// // // tfoot标签只能有一个
// // // caption标签只能有一个
// // // tbody标签可以有多个
// // // tr标签可以有多个
// // // td和th标签可以有多个
// // //  */


// // // window.onload=function(){

// // // 	               ////使用DOM获取表格中的信息（有点繁）
// // // var table=document.getElementsByTagName('table')[0]//先获取table节点
// // // var tbody=table.getElementsByTagName('tbody')[0]//再从table节点中获取tbody节点
// // // var tbody2=document.getElementsByTagName('tbody')[0]//也可以直接获取tbody节点
// // // alert(tbody2.tagName)
// // // alert(tbody.children[1].children[1].innerHTML)//女  ，获取到tbody节点中第2个子节点
// // // 					                          ////中的第2个子节点中的文本节点




// // //                   ////使用HTML DOM来创建获取表格中的信息（方便）
// // // /*
// // // 首先要获取到table节点，再用HTML DOM中，给这些元素标签的属性和方法
// // // 属性或方法 说明
// // // caption 保存着<caption>元素的引用
// // // tBodies 保存着<tbody>元素的 HTMLCollection 集合（集合即数组，用下标去访问）
// // // tFoot 保存着对<tfoot>元素的引用
// // // tHead 保存着对<thead>元素的引用
// // // rows 保存着对<tr> 元素的 HTMLCollection 集合
// // // createTHead() 创建<thead>元素，并返回引用
// // // createTFoot() 创建<tfoot>元素，并返回引用
// // // createCaption() 创建<caption>元素，并返回引用
// // // deleteTHead() 删除<thead>元素
// // // deleteTFoot() 删除<tfoot>元素
// // // deleteCaption() 删除<caption>元素
// // // deleteRow(pos) 删除指定的行
// // // insertRow(pos) 向 rows 集合中的指定位置插入一行<tr>


// // // <tbody>元素添加的属性和方法
// // // 属性或方法 说明
// // // rows 保存着<tbody>元素中行的 HTMLCollection 所有的行（tr节点）
// // // deleteRow(pos) 删除指定位置的行
// // // insertRow(pos) 向 rows 集合中的指定位置插入一行<tr>，并返回引用


// // // <tr>元素添加的属性和方法
// // // 属性或方法 说明
// // // cells 保存着<tr>元素中单元格的 HTMLCollection 一行中的所有格（td节点）
// // // deleteCell(pos) 删除指定位置的单元格
// // // insertCell(pos) 向 cells 集合的指定位置插入一个单元格<td>，并返回引用


// // // PS：因为表格较为繁杂，层次也多，在使用之前所学习的 DOM 只是来获取某个元素会
// // // 非常难受，所以使用 HTML DOM 会清晰很多。
// // //  */
// // // alert(table.caption.innerHTML)//获取caption元素节点中的文字， 人员表
// // // alert(table.tFoot.innerText)//获取tfoot元素节点中的文字合计：2人
// // // alert(table.tBodies) //获得table中的所有tbody节点
// // // alert(table.rows)//获取table中所有的行（<tr>节点）
// // // alert(table.tBodies[0].rows) //获取tbody标签（表格主体）中的所有的行（tr节点）
// // // alert(table.tBodies[0].rows[0].cells) //获取tbody标签（表格主体）中第1行（tr节点）的所有单元格（td节点）

// // // alert(table.tBodies[0].rows[1].cells[1].innerHTML)
// // // //（很清晰方便）女 ，获取到第1个tbody节点中第2行第2个单元格的内容




// // // table.deleteCaption() //删除<caption>元素及其之间的所有内容
// // // table.deleteTHead()//删除<thead>元素及其之间的所有内容
// // // table.tBodies[0].deleteRow(1)//删除第1个tbody标签内的第2行（<tr>节点）
// // // table.tBodies[0].rows[0].deleteCell(1)//删除第1个tbody标签内的第1行内的第2个单元格（<td>节点）




// // // //用JS创建表格
// // // var table=document.createElement('table')//创建table
// // // table.width=700//设置table的属性
// // // table.border=1
// // // document.body.appendChild(table)//从body标签下面添加table

// // // table.createCaption().innerHTML='用JS创建的表格' //创建表格的题目

// // // var thead=table.createTHead() //创建<thead>元素，并返回此元素节点
// // // var tr1=thead.insertRow(0)//在<thead>元素中0位置插入一行，并返回此行元素节点
// // // var td1=tr1.insertCell(0) //在此行<tr>中0号位置创建一个单元格<td>，并返回此元素节点
// // // td1.innerHTML='姓名' //设置此单元格中的文本
// // // tr1.insertCell(1).innerHTML='性别'
// // // tr1.insertCell(2).innerHTML='年龄'

// // // var tbody=table.createTBody() //创建<tbody>元素，并返回此元素节点
// // // var tr1=tbody.insertRow(0)//在<tbody>元素中0位置插入一行，并返回此行元素节点
// // // var td1=tr1.insertCell(0) //在此行<tr>中0号位置创建一个单元格<td>，并返回此元素节点
// // // td1.innerHTML='ssss' //设置此单元格<td>中的文本
// // // tr1.insertCell(1).innerHTML='d'//在此<tr>行的1号位置插入一个单元格<td>,并设置文本节点
// // // tr1.insertCell(2).innerHTML='41'//在此<tr>行的2号位置插入一个单元格<td>,并设置文本节点

// // // var tr1=tbody.insertRow(1)//在<tbody>元素中1位置插入一行，并返回此行元素节点
// // // var td1=tr1.insertCell(0) //在此行<tr>中0号位置创建一个单元格<td>，并返回此元素节点
// // // td1.innerHTML='llll' //设置此单元格<td>中的文本
// // // tr1.insertCell(1).innerHTML='n'//在此<tr>行的1号位置插入一个单元格<td>,并设置文本节点
// // // tr1.insertCell(2).innerHTML='18'//在此<tr>行的2号位置插入一个单元格<td>,并设置文本节点

// // // var tfoot=table.createTFoot() //创建<tfoot>元素，并返回此元素节点
// // // var tr=tfoot.insertRow(0)//在<tfoot>元素中0位置插入一行<tr>，并返回此行元素节点
// // // tr.insertCell(0).innerHTML='合计'//在此<tr>行的0号位置插入一个单元格<td>,并设置文本节点
// // // var td=tr.insertCell(1)//在此<tr>行的1号位置插入一个单元格<td>
// // // td.innerHTML='<b>2人</b>'//设置文本
// // // // td.colspan='2'//这样设置属性没有用
// // // td.setAttribute('colspan','2')//这样设置属性才行,设置合并两格




// // // }




// // // /*

// // // */
// // // window.onload=function(){


// // // /*
// // // 但不是每个浏览器都能支持最
// // // 新的 CSS 能力。CSS 的能力和 DOM 级别密切相关，所以我们有必要检测当前浏览器支持
// // // CSS 能力的级别。IE上并不能精确检测。
// // // DOM1 级实现了最基本的文档处理，DOM2 和 DOM3 在这个基础上增加了更多的交互
// // // 能力，这里我们主要探讨 CSS，DOM2 增加了 CSS 编程访问方式和改变 CSS 样式信息。
// // //            DOM 一致性检测
// // // 功能   版本号        说明
// // // Core 1.0、2.0、3.0 基本的 DOM,用于表现文档节点树
// // // XML 1.0、2.0、3.0 Core 的 XML 扩展，添加了对 CDATA 等支持
// // // HTML 1.0、2.0 XML 的 HTML 扩展，添加了对 HTML 特有元素支持
// // // Views 2.0 基于某些样式完成文档的格式化
// // // StyleSheets 2.0 将样式表关联到文档
// // // CSS 2.0 对层叠样式表 1 级的支持
// // // CSS2 2.0 对层叠样式表 2 级的支持
// // // Events 2.0 常规的 DOM 事件
// // // UIEvents 2.0 用户界面事件
// // // MouseEvents 2.0 由鼠标引发的事件(如：click)
// // // MutationEvents 2.0 DOM 树变化时引发的事件
// // // HTMLEvents 2.0 HTML4.01 事件
// // // Range 2.0 用于操作 DOM 树中某个范围的对象和方法
// // // Traversal 2.0 遍历 DOM 树的方法
// // // LS 3.0 文件与 DOM 树之间的同步加载和保存
// // // LS-Async 3.0 文件与 DOM 树之间的异步加载和保存
// // // Valuidation 3.0 在确保有效的前提下修改 DOM 树的方法

// // // ////检测浏览器是否支持 DOM CSS 能力或 DOM2 级 CSS 能力
// // // PS：这种检测方案在 IE 浏览器上不精确，IE6 中，hasFeature()方法只为 HTML 和版本
// // // 1.0 返回 true，其他所有功能均返回 false。但 IE 浏览器还是支持最常用的 CSS2 模块。
// // // */

// // // alert('DOMC的CSS能力：'+document.implementation.hasFeature('HTMLEvents','2.0'))
// // // alert('DOM2级CSS能力：'+document.implementation.hasFeature('CSS','2.0'))




// // // 					////操作行内的CSS取值和赋值
// // // var box=document.getElementById('box')
// // // alert(box.style.color)//可以直接访问到样式中的属性的值
// // // alert(box.style.fontSize) //遇到font-size这种属性 要把－去掉s改成大写，就能访问到
// // // box.style.color='green'//可以直接给样式中的属性的赋值

// // //                   //也可以这样做
// // // alert(box.style.cssFloat)   //非IE用
// // // alert(box.style.styleFloat) //IE用
// // // alert(box.style.cssFloat||box.style.styleFloat)  //*用或运算,谁有不是undefined谁输出
// // // typeof box.style.cssFloat != 'undefined' ? box.style.cssFloat = 'left' : box.style.styleFloat = 'left';
// // // //用三目条件式来兼容非IE和IE浏览器




// // // /*
// // // DOM2 级样式规范为 style 定义了一些属性和方法,但几乎没什么用
// // // 属性或方法     说明
// // // cssText      访问或设置 style 中的 CSS 代码文本,有点用,IE也支持
// // // length       CSS 属性的数量
// // // parentRule   CSS 信息的 CSSRule 对象
// // // getPropertyCSSValue(name) 返回包含给定属性值的 CSSValue 对象
// // // getPropertyPriority(name) 如果设置了!important，则返回，否则返回空字符串
// // // item(index) 返回指定位置 CSS 属性名称
// // // removeProperty(name) 从样式中删除指定属性
// // // setProperty(name,v,p) 给属性设置为相应的值，并加上优先权
// // // box.style.cssText; //获取 CSS 代码
// // // */

// // // // alert(box.style.cssText) //*获取CSS文本,有点用
// // // // alert(box.style.length); //3，返回CSS属性的个数,不准确,IE 不支持
// // // // box.style.removeProperty('color'); //移除某个 CSS 属性，IE 不支持
// // // // box.style.setProperty('color','#ff9900'); //设置某个 CSS 属性，IE 不支持

// // // /*
// // // PS：Firefox、Safari、Opera9+、Chrome 支持这些属性和方法。IE 只支持 cssText

// // // PS：style 属性仅仅只能获取行内的 CSS 样式，对于另外两种形式内联<style>和链接
// // // <link>方式则无法获取到
// // // */




// // //                       //获取计算后的样式(其中含有未设置的默认样式)但不能赋值
// // // var style=window.getComputedStyle(box2,null)//非IE用这个方法获取
// // // /*window 对象下提供了 getComputedStyle()方法。接受两个
// // // 参数，第一个是需要计算的样式元素节点，第二个是伪类(:hover)，如果没有没有伪类，就填 null。*/
// // // alert(style.color)//计算后的样式
// // // alert(style.display)//未设置的样式的默认值
// // // var style=window.getComputedStyle(box2,':') //[object CSS2Properties]
// // // alert(style) 

// // // var styleie=box.currentStyle//IE用这个方法获取计算后的样式或未设置的默认样式
// // // alert(styleie.fontSize)

// // // var styleall = window.getComputedStyle ? window.getComputedStyle(box2, null) : null || box2.currentStyle;//全部浏览器兼容
// // // //同时兼容IE和非IE的写法
// // // alert(styleall.height)
// // // alert(styleall.marginTop)
// // // alert(styleall.border)
// // // ////border样式计算后是一个集合,只有谷歌可以按上面的方法获取,其他的这样获取不到,要处理.
// // // ////但在border在行内样式中又可以获取到,因为是直接获取的字符串.
// // // }








// // // /*
// // // 改变内联或联接的CSS样式表

// // // */


// // // window.onload=function(){

// // // var box=document.getElementById('box')
// // // box.id='pos'  //用改变id的方法修改为那个id的CSS样式,但id变了,以后获取元素就混乱了,非常不建议这么做

// // // var box2=document.getElementById('box2')
// // // // box2.className='bbb' //通过改变DIV标签的class名字的值,来修改为(覆盖写入)那个class名的CSS样式,推荐
// // // box2.className+=' '+'bbb ccc ddd'//叠加class名的CSS样式

// // // }






// // /*



// // */
// // window.onload=function()
// // {


// // var box = document.getElementById('box')
// // alert(box.style.width)
// // alert(box.style.height)//获取行内的CSS长宽

// // var style=window.getComputedStyle?window.getComputedStyle(box,null):null||box.currenStyle
// // alert(style.width)
// // alert(style.height)//获取计算后的CSS长宽

// // var sheet=document.styleSheets[0]
// // var rule=(sheet.cssRules||sheet.rules)[0]//如果出错后,后面的JS代码就不再执行了
// // alert(rule.style.background)//获取内联或外链接的CSS属性

// // ///以上三种都不能获取实际大小


// // alert(box.clientWidth)
// // alert(box.clientHeight)//获取元素对象的实际大小,返回 数值 单位默认px 用其他单位(pt ,em)的会自动转换为px


// // alert(box.scrollWidth)//获取滚动实际大小
// // alert(box.scrollHeight)//增加周边CSS属性后,值会不同


// // alert(box.offsetWidth)//对增加外边框和内边距起反应,比较好用
// // alert(box.offsetHeight)

// // alert(box.offsetTop)
// // alert(box.offsetLeft)


// // alert(box.offsetParent)//获取当前元素的父元素,如果CSS文件中不设置定位,就问题很多,不保险.






// // }






// // window.onload=function(){
// // /*
// // getBoundingClientRect()。这个方法返回一个矩形对象，包含四个属性：left、top、right 和 bottom。分别表示元素各边与页面上边和左边的距离。
// // var box = document.getElementById('box'); //获取元素
// // alert(box.getBoundingClientRect().top); //元素上边距离页面上边的距离
// // alert(box.getBoundingClientRect().bottom); //元素下边距离页面上边的距离
// // alert(box.getBoundingClientRect().left); //元素左边距离页面左边的距离
// // alert(box.getBoundingClientRect().right); //元素右边距离页面左边的距离
// // */
// // // box=document.getElementById('box')
// // // alert(box.getBoundingClientRect().top)
// // // alert(box.getBoundingClientRect().bottom)
// // // alert(box.getBoundingClientRect().right)
// // // alert(box.getBoundingClientRect().left)




// // alert(typeof BrowserDetect)//动态加载应放到window.onload外面去,让它先执行到
// // }





// // ////动态加载外部的javascript代码文件
// // var script=document.createElement('script')
// // script.type='text/javascript'//设置属性值 
// // script.src='browserdetect.js'//设置属性值 
// // document.head.appendChild(script)//添加到<head>标签中去
// // ////一定要注意执行的顺序,动态加载应放到window.onload外面去,让它先执行到




// // ////在网页内动态的添加JS
// // var script2=document.createElement('script')
// // script2.type='text/javascript'//设置属性值 
// // // js=document.createTextNode("alert('Zhang')")//IE不支持
// // // script2.appendChild(js)
// // js2="alert('ZhangSW')"
// // script2.text=js2//全浏览器都支持的写法
// // document.head.appendChild(script2)//添加到<head>标签中去
// // ////
// // /*PS：IE 浏览器认为 script 是特殊元素，不能在访问子节点。为了兼容，可以使用 text
// // 属性来代替。script.text = "alert('')"; //IE 和其他浏览器都可以支持了。*/




// // ////动态的加载外链接的CSS文件
// // var link=document.createElement('link')
// // link.rel='stylesheet'//设置属性值 
// // link.type='text/css'//设置属性值 
// // link.href='21-DOM4.css'//设置属性值 
// // document.head.appendChild(link)
// // ////




// // ////在网页内动态的添加CSS样式
// // var style=document.createElement('style')
// // style.type='text/css'//设置属性值 
// // //var css1= document.createTextNode(#box{background:red}'); IE 不支持
// // //style.appendChild(css1);
// // style.innerHTML='#box{color:red;}'
// // document.head.appendChild(style)








// // /*
// // JavaScript 有三种事件模型：内联模型、脚本模型和 DOM2 模型。

// // 一最早的内联模型
// // <input name=a id=box type="button" value="按钮1" onclick="alert('Zhang')"> 
// // <input name=a id=box type="button" value="按钮1" onclick="box()"> 
// // */
// // function box(){//如果放在一个匿名函数里面或onload中,就看不到了
// // 	alert('javascript内联模型,onload事件外的函数Zhang')
// // }




// // window.onload=function(){//当页面完全加载后在 window 上面触发，或当框架集加载完毕后在框架集上触发。

// // 	var box=document.getElementById('box3')
// // 	box.onclick=function(){ //1,用匿名函数直接执行程序代码
// // 		alert('JavaScript脚本模式用匿名函数执行到的')
// // 	}

// //    	var box=document.getElementById('box4')
// //    box.onclick=box2 //2,以通过指定的函数名赋值的方式来执行函数(赋值的函数名不要跟着括号)

// // function box2(){
// // 	alert('JavaScript脚本模式用onload事件里面的的函数执行到的Zhang')
// // }


// // function fun1(){
// // 	alert('头一炮')
// // }







// // /*
// // JavaScript 可以处理的事件类型为：鼠标事件、键盘事件、HTML事件。
// // JavaScript 			事件处理函数及其使用列表
// // 事件处理函数 			影响的元素 何时发生
// // onabort 	图像 当图像加载被中断时
// // onblur 		窗口、框架、所有表单对象 当焦点从对象上移开时
// // onchange 	输入框，选择框和文本区域 当改变一个元素的值且失去焦点时
// // onclick 	链接、按钮、表单对象、图像映射区域 当用户单击对象时
// // ondblclick 	链接、按钮、表单对象 当用户双击对象时
// // ondragdrop 	窗口 当用户将一个对象拖放到浏览器窗口时
// // onError 	脚本 当脚本中发生语法错误时
// // onfocus 	窗口、框架、所有表单对象 当单击鼠标或者将鼠标移动聚焦到窗口或框架时
// // onkeydown 	文档、图像、链接、表单 当按键被按下时
// // onkeypress 	文档、图像、链接、表单 当按键被按下然后松开时
// // onkeyup 	文档、图像、链接、表单 当按键被松开时
// // onload 		主题、框架集、图像 文档或图像加载后
// // onunload 	主体、框架集 文档或框架集卸载后
// // onmouseout 	链接 当图标移除链接时
// // onmouseover 链接 当鼠标移到链接时
// // onmousedown	当用户按下了鼠标还未弹起时触发
// // onmouseup	当用户释放鼠标按钮时触发
// // onmove 		窗口当浏览器窗口移动时
// // onreset 	表单复位按钮 单击表单的 reset 按钮
// // onresize 	窗口 当选择一个表单对象时
// // onselect 	表单元素 当选择一个表单对象时
// // onsubmit 	表单 当发送表格到服务器时
// // PS：所有的事件处理函数都会都有两个部分组成，on + 事件名称，例如 click 事件的事
// // 件处理函数就是：onclick。在这里，我们主要谈论脚本模型的方式来构建事件，违反分离原
// // 则的内联模式，我们忽略掉。
// // 对于每一个事件，它都有自己的触发范围和方式(或HMTL标签)，如果超出了触发范围和方式，事件处理将失效。
// // */
// // var input=document.getElementById('box5')
// // input.onclick=fun1//当用户单击鼠标按钮或按下回车键时触发。
// // input.ondblclick=fun1//双击对象时执行
// // input.onmousedown=fun1//当用户按下了鼠标还未弹起时触发
// // input.onmouseup=fun1//当用户释放鼠标按钮时触发
// // input.onmouseover=fun1//当鼠标移到某个元素上方时触发
// // input.onmouseout=fun1//当鼠标移出某个元素上方范围时触发
// // input.onmousemove=fun1//当鼠标指针在元素上移动时触发


// // onkeydown=fun1//按下键盘上任意键触发，如果按住不放，会重复触发
// // onkeypress=fun1//按下键盘上的字符(字母+符号)键触发，如果按住不放，会重复触发
// // onkeyup=fun1//当用户释放键盘上的任意键触发





// // window.onload=fun1//当页面完全加载后在 window 上面触发，或当框架集加载完毕后在框架集上触发
// // window.onunload=fun1//当页面完全卸载后在 window 上面触发，或当框架集卸载后在框架集上触发,现在基本不支持了,但IE支持

// // var input=document.getElementById('box6')
// // input.onselect=fun1//当用户选择文本框(input 或 textarea)中的一个或多个字符触发。纯选文字不行.
// // input.onchange=fun1//当文本框(input 或 textarea)内容改变且失去焦点后触发。

// // var sel=document.getElementById('aaa')
// // sel.onfocus=fun1//当元素获得焦点时在 window 及相关元素上面触发
// // onfocus=fun1//当页面获得焦点时在 window 及相关元素上面触发
// // sel.onblur=fun1//当页面或者元素失去焦点时在 window 及相关元素上面触发
// // onblur=fun1//当页面失去焦点时执行

// // var form=document.getElementById('form1')
// // form.onsubmit=fun1//当用户点击提交按钮在<form>元素上触发
// // form.onreset=fun1//当用户点击重按钮在<form>元素上触发


// // window.onresize=fun1//当窗口或框架的大小变化时在 window 或框架上触发。(2次)
// // window.onscroll=fun1//当用户滚动带滚动条的元素时触发。(2次)





// // }





// // window.onload=function(){
// // function fun1(){
// // 	alert('事件触发了')
// // }
// // //在面向对象那章我们了解到：在一个对象里，由于作用域的关系，this代表着离它最近对象。
// // alert(this)//this在全局范围代表window

// // //事件处理三部分组成：对象.事件处理函数=函数。例如：单击文档任意处。
// // document.onclick=fun1

// // document.onclick=function(){ 
// // 	alert(this)//this代表被绑定的对象document
// // }

// // /*
// // 当触发某个事件时，会产生一个事件对象，这个对象由浏览器通过参数悄悄的传递过来.包含着所
// // 有与事件有关的信息。包括导致事件的元素、事件的类型、以及其它与特定事件相关的信息。
// // 事件对象，我们一般称作为 event 对象，是浏览器通过函数把这个对象作为参
// // 数传递过来的。那么首先，我们就必须验证一下，在执行函数中没有传递参数，是否可以得
// // 到隐藏的参数。
// // */
// // document.onclick=function(){
// // 	alert(arguments.length)//传过来的参数   1
// // 	alert(arguments[0])//[object MouseEvent] 浏览器通过参数传递过来的对象事件
// // }

// // document.onkeydown=function(evt){
// // 	alert(arguments[0])//[object KeyboardEvent] 浏览器通过参数传递过来的对象事件
// // 	alert(evt)//[object KeyboardEvent] 浏览器通过参数传递过来的对象事件IE不支持这么获取
// // }
// // /*直接接收 event 对象，是 W3C 的做法，IE 不支持，IE 自己定义了一个 event 对象，直
// // 接在 window.event 获取即可。*/
  
// // alert(window.event)




// // /*
// // 二．鼠标事件
// // 鼠标事件是 Web 上面最常用的一类事件，毕竟鼠标还是最主要的定位设备。那么通过
// // 事件对象可以获取到鼠标按钮信息和屏幕坐标获取等。
// // 1.鼠标按钮
// // 只有在主鼠标按钮被单击时(常规一般是鼠标左键)才会触发 onclick 事件，因此检测按钮
// // 的信息并不是必要的。
// // 用onclick事件检测按钮信息,并不行.
// // 可以用 mousedown 和 mouseup 事件,在其 event 对象存在一个 button 属性，表示按下
// // 或释放按钮。(这2个可以检测到滚轮和右键)

// // 非IE(W3C)中的 button 属性值 		说明
// // 0 	表示主鼠标按钮(常规一般是鼠标左键) 
// // 1 	表示中间的鼠标按钮(鼠标滚轮按钮)
// // 2 	表示次鼠标按钮(常规一般是鼠标右键)

// // IE中的 button 属性值	 说明
// // 0	 表示没有按下按钮
// // 1	 表示主鼠标按钮(常规一般是鼠标左键) 2 表示次鼠标按钮(常规一般是鼠标右键) 3 表示同时按下了主、次鼠标按钮
// // 4	 表示按下了中间的鼠标按钮
// // 5	 表示同时按下了主鼠标按钮和中间的鼠标按钮
// // 6  	表示同时按下了次鼠标按钮和中间的鼠标按钮
// // 7	 表示同时按下了三个鼠标按钮
// // */
// // document.onmousedown=function(evt){
// // 	e=evt||window.event
// // 	alert(e.button)// 0   1   2
// // 	if(e){
// // 		switch(e.button){
// // 			case 0:
// // 			alert('左键被点击')
// // 			return
// // 			case 1:
// // 			alert('滚轮被点击')
// // 			return
// // 			case 2:
// // 			alert('右键被点击')
// // 			return
// // 		}
// // 	}
// // }





// // /*2.可视区及屏幕坐标
// // 事件对象提供了两组来获取浏览器坐标的属性，一组是页面可视区左边，另一组是屏幕坐标。
// // 坐标属性
// // 属性 	说明
// // clientX 可视区 X 坐标，距离左边框的位置
// // clientY 可视区 Y 坐标，距离上边框的位置
// // screenX 屏幕区 X 坐标，距离左屏幕的位置
// // screenY 屏幕区 Y 坐标，距离上屏幕的位置*/

// // var box=document.getElementById('box')
// // var box2=document.getElementById('box2')

// // document.onmousemove=function(evt){
// // 	box.innerHTML='可视区'+evt.clientX+','+evt.clientY
// // 	box2.innerHTML='屏幕区'+evt.screenX+','+evt.screenY
// // }




// // /*
// // 3.修改键(要与onclick配合使用)
// // 有时，我们需要通过键盘上的某些键来配合鼠标来触发一些特殊的事件。这些键为：
// // Shfit、Ctrl、Alt 和 Meat(Windows 中就是 Windows 键，苹果机中是 Cmd 键)，它们经常被用
// // 来修改鼠标事件和行为，所以叫修改键。
// // 							修改键属性
// // 属性 			说明
// // shiftKey 		判断是否按下了 Shfit 键
// // ctrlKey 		判断是否按下了 ctrlKey 键
// // altKey 			判断是否按下了 alt 键
// // metaKey 		判断是否按下了 windows 键，IE 不支持
// // */

// // onclick=function(evt){
// // 	var e=evt||window.event
// // 	if(e.shiftKey){alert('你按了SHIFT键')}
// // 	if(e.ctrlKey){alert('你按了Ctrl键')}
// // 	if(e.altKey){alert('你按了ALT键')}
// // 	if(e.metaKey){alert('你按了WIN键')}
// // 	//alert(e)
// // }


// // document.onclick=function(evt){
// // 	alert(getKey(evt))
// // }
// // function getKey(evt){
// // 	var e=evt||window.event
// // 	var keys=[]
// // 	if (e.shiftKey){keys.push('shift')}
// // 	if (e.ctrlKey){keys.push('ctrl')}
// // 	if (e.altKey){keys.push('alt')}
// // 	if (e.metaKey){keys.push('win')}
// // 	return keys
// // }

// // }








// // /*
// // keydown按下任意键
// // keyup 弹起任意键
// // keypress 按下字符键 abc 123 特殊字符,不含功能键
// // */


// // window.onload=function(){
// // /*
// // 1.键码
// // 在发生 keydown 和 keyup 事件时，event 对象的 keyCode 属性中会包
// // 含这个按下的键的ASCII码。
// // //分号键;在 Firefox 和 Opera 中，分号键时 keyCode 值为 59，也就是 ASCII 中
// // //分号的编码；而 IE 和 谷歌和Safari 返回 186，即键盘中按键的键码。
// // */
// // window.onkeydown=function(evt){//用onkeydown事件,不区分大小写返回键的ASCII码
// // alert(evt.keyCode)
// // }




// // /*
// // 2.字符编码
// // Firefox、Chrome 和 Safari 的 event 对象都支持一个 charCode 属性，这个属性只有在发
// // 生 keypress 事件时才包含值，而且这个值是按下的那个键所代表字符的 ASCII 编码。区分大小写
// // */
// // window.onkeypress=function(evt){//用onkeypress事件,区分大小写返回键的ASCII码
// // asc=evt.charCode
// // alert(asc)
// // alert(String.fromCharCode(asc))//用 String.fromCharCode()将 ASCII 编码转换成实际的字符
// //  }





// // /*
// // 3,在标准的 DOM 事件中，event 对象包含与创建它的特定事件有关的属性和方法。触发
// // 的事件类型不一样，可用的属性和方法也不一样。
// // W3C 中 event 对象的属性和方法
// // 属性/方法		 类型		 读/写		 说明
// // bubbles			 Boolean 只读 表明事件是否冒泡
// // cancelable 		Boolean 只读 表明是否可以取消事件的默认行为
// // currentTarget 		Element 只读 其事件处理程序当前正在处理事件的那个元素
// // detail 			Integer 只读 与事件相关的细节信息
// // eventPhase 		Integer 只读		调用事件处理程序的阶段：1 表示捕
// // 获阶段，2 表示“处理目标”，3 表示冒泡阶段
// // preventDefault() 		Function 只读 取消事件的默认行为。如果 cancelabel 是 true，则可以使用这个方法
// // stopPropagation() 		Function 只读 取消事件的进一步捕获或冒泡。如果bubbles 为 true，则可以使用这个方法
// // target 		Element  只读   事件的目标
// // type 		String   只读   被触发的事件的类型
// // view 		AbstractView  只读  与事件关联的抽象视图。等同于发生事件的 window 对象

// // IE 中 event 对象的属性
// // 属性 					类型     读/写        说明
// // cancelBubble 			Boolean  读/写    默认值为 false，但将其设置为 true 就可以取消事件冒泡
// // returnValue 			Boolean  读/写    默认值为 true，但将其设置为 false 就可以取消事件的默认行为
// // srcElement 				Element  只读 	 事件的目标
// // type 					String 	 只读 	 被触发的事件类型
// // */

// // document.onclick=function(evt){
// // 	var e=evt||window.event
// // 	alert(e.target||e.srcElement)//事件的目标,即你点击哪里,就可以得到哪里的DOM元素对象
// // alert((e.target||e.srcElement).tagName)//获取事件目标标签的标签名
// // alert((e.target||e.srcElement).innerHTML)//获取事件目标标签内的内容
// // }







// // //事件冒泡的过程及取消
// // //用鼠标点里面的标签,外面包含它的元素也被点击到了,依次一层一层的也产生了被点击的事件
// // document.onclick = function () {
// // alert('我是 document');
// // };
// // document.documentElement.onclick = function () {
// // alert('我是 html');
// // };
// // document.body.onclick = function () {
// // alert('我是 body');
// // };
// // document.getElementById('box').onclick = function () {
// // alert('我是 div');
// // };
// // document.getElementsByTagName('input')[0].onclick = function (evt) {
// // var e=evt||window.event
// // alert('我是 input');
// // ////e.stopPropagation()//非IE取消冒泡
// // e.cancelBubble=true //取消冒泡,新版浏览器都支持了,外面的元素不被点击到了
// // };



// // }












// //                  ////防止多个window.onload被最后一个覆盖了
// // window.onload=function(){
// // alert('Mr.')
// // }

// // if (typeof window.onload=='function'){//检测如果已存在window.onload事件
// // 	var saved=null
// // 	saved=window.onload //用变量保存上一个window.onload事件
// // }

// // window.onload=function(){

// // if (saved) saved()//先执行上一个保存的window.onload事件
// // // alert('Zhang')

// //              //事件切换换器
// // var box=document.getElementById('box')
// // box.onclick=function(){
// // alert("Zhang")
// // tored.call(this)//通过匿名函数执行另一个函数，里面的this代表了window,可以使用call（）传递this

// // }

// // function tored(){
// // 	this.className='red'//this代表了最近的绑定的对象，即box 
// // 	this.onclick=toblue//functhin(){ ...}如果是全局执行，this就代表了window
// // 	}
// // function toblue(){
// // 	this.className='blue'
// // 	this.onclick=tored
// // 	}
// // }

// //             //事件添加器
// // //对象操作可以用数组操作来完成。window.onload=window['onload']
// // function addEvent(obj,type,fn){//obj相当于window  type相当于onload   fn相当于function(){}
// // var saved=null
// // if (typeof obj['on'+type]=='function'){
// // 	saved=obj['on'+type]}//保存上一个事件
// // 	obj['on'+type]=function(){//新的重复事件
// // 		if (saved){saved()}//先执行上一个事件中的程序
// // 		fn()//再执行本次新事件中的程序
// // 	}
// // }


// // addEvent(window,'load',function(){
// // 	alert('Zhang')
// // })

// // addEvent(window,'load',function(){
// // 	alert('aa')
// // })

// // addEvent(window,'load',function(){
// // 	alert('ff')
// // })






// // /*
// // “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// // addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// // 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。

// //        					////1 获取邻近的节点
// // 在 W3C 提供了一个事件对象的属性：relatedTarget；这个属性可以在 mouseover 和 mouseout 事件
// // 中获取从最近的哪里移入和从最近的哪里移出的 DOM 对象。
// // */
// // window.addEventListener('load',function(){
// // var box=document.getElementById('box')
// // box.addEventListener('mouseover',function(evt){//获取鼠标是从最近的哪个DOM节点移入BOX DIV节点的
// // alert(sp=evt.relatedTarget)
// // },false)


// // box.addEventListener('mouseout',function(evt){//获取鼠标从BOX DIV节点移出时,经过的第一个DOM节点
// // 	alert(sp2=evt.relatedTarget)
// // },false)

// // 									////2 阻止默认行为
// // var a1=document.getElementsByTagName('a')[0]
// // a1.onclick=function(){
// // alert('不跳转')
// // return false //可以截断标签的默认操作.但必须放在最后,可能根本无法执行到.如果放到前面,后面的代码又无法执行到.
// //              //还有不能放到addEventListener中
// // }             //用evt.preventDefault(); //W3C，阻止默认行为，放哪里都可以


// // a1.onclick=function(evt){//传统写法
// // 	evt.preventDefault()
// // }


// // a1.addEventListener('click',function(evt){
// // evt.preventDefault()
// // ////window.event.returnValue = false;//IE，阻止默认行为
// // },false)




// // 						////3 上下文菜单事件
// // /*上下文(右键菜单事件)菜单事件：contextmenu，当我们右击网页的时候，会自动出现 windows 自带的
// // 菜单。那么我们可以使用 contextmenu 事件来修改我们指定的菜单，但前提是把右击的默认
// // 行为取消掉。*/
// // window.addEventListener('contextmenu',function(evt){//在window对象中添加右键菜单事件
// // e=evt||window.event//兼容IE取得事件对象
// // e.preventDefault()//截断默认的行为(不弹出原菜单)
// // ////alert('1')

// // var menu=document.getElementById('menu')//得到菜单节点
// // menu.style.display='block'//显示菜单
// // menu.style.left=e.clientX+'px'//菜单的左边等于鼠标事件的左边距
// // menu.style.top=e.clientY-10+'px'//菜单的上边等于鼠标事件的上边距

// // document.addEventListener('click',function(){ //点左键
// // 	menu.style.display='none' //菜单消失
// // },false)
// // },false)





// // 				////4 卸载前事件：beforeunload，这个事件可以在离开本页的时候给出相应的提示，“离 开”或者“返回”操作
// // window.addEventListener('beforeunload',function(evt){
// // evt.preventDefault()
// // alert('一定要离开吗')
// // },false)





// // ////5 鼠标滚轮事件 mousewheel (非火狐)和 DOMMouseScroll(火狐用)，用于获取鼠标上下滚轮的距离。此事件放在document中.

// // document.addEventListener('mousewheel',function(evt){//非火狐用,当鼠标滚轮滚动时
// // 	alert(evt.wheelDelta)//返回滚轮的距离
// // },false)

// // document.addEventListener('DOMMouseScroll',function(evt){//火狐用,当鼠标滚轮滚动时
// // 	alert(evt.detail)//返回滚轮的距离
// // },false)


// // ////6 DOMContentLoaded 事件和 readystatechange 事件，有关 DOM 加载方面的事件,可以不加载视频或图像,提高DOM的性能


// // },false)














// // window.onload=function(){

// // var box=document.getElementById('box')

// // /*
// // clientLeft 和 clientTop
// // 这组属性可以获取元素设置了左边框和上边框的大小。
// // */
// // alert(box.clientTop)//获取左边框的长度
// // alert(box.clientLeft)//获取上边框的长度



// // alert(box.scrollTop)//获取滚动内容上方的位置
// // alert(box.scrollLeft)//获取滚动内容左边的位置
// // box.scrollTop=100//设置滚动内容的位置


// // alert(box.offsetLeft); //这组属性可以获取当前元素相对于父元素的左边的位置。
// // alert(box.offsetTop); //获取当前元素相对于父元素的上面的位置
// // }


// // /*
// // W3C 事件处理函数
// // “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作(相同的事件)：
// // addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// // 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
// // IE8及以前的不支持，IE9及以后的支持了
// //  */
// // //解决了相同事件不会被覆盖，相同函数可以屏蔽掉，可以传递this,多个方法可执行
// // window.addEventListener('load',function(){alert('zhang')},false)
// // window.addEventListener('load',function(){alert('SW')},false)
// // window.addEventListener('load',function(){alert('8888888888888888888888')},false)




// //               //用这个重写事件切换器
// // window.addEventListener('load',function(){//window添加onload事件
// // var box=document.getElementById('box')
// // box.addEventListener('click',function(){//box DIV对象先添加onclick事件
// // alert('中间添加一个方法')}
// // ,false)
// // box.addEventListener('click',tored,false)//box DIV对象又添加onclick事件
// // },false)


// // function tored(){
// // 	this.className='red'//this代表了最近的绑定的对象，即box 
// // 	this.removeEventListener('click',tored,false)//移除事件，防止缓冲满了
// // 	this.addEventListener('click',toblue,false)//添加事件
// // 	}
// // function toblue(){
// // 	this.className='blue'
// // 	this.removeEventListener('click',toblue,false)
// // 	this.addEventListener('click',tored,false)
// // 	}






// // /*
// // IE8.0及以下 实现了与 DOM 中类似的两个方法：attachEvent()和 detachEvent()。这两个方法接受
// // 相同的参数：事件名称和函数。
// // 在使用这两组函数的时候，先把区别说一下：1.IE 不支持捕获，只支持冒泡；2.IE 添加
// // 事件不能屏蔽重复的函数；3.IE 中的 this 指向的是 window 而不是 DOM 对象。IE 不能
// // 传递 this，可以 call 过去。4.在传统事件上，IE 是无法接受到 event 对象的，但使用
// // 了 attchEvent()却可以，但有些区别。
// // IE 中的事件绑定函数 attachEvent()和 detachEvent()可能在实践中不去使用，有个
// // 原因：1.IE9 就将全面支持 W3C 中的事件绑定函数


// //  */








// /*
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
//  //用evt.preventDefault(); //W3C，阻止默认行为，放哪里都可以
//  */

// /*
// 在 JavaScript 中，表单对应的则是
// HTMLFormElement 类型。HTMLFormElement 继承了 HTMLElement，因此它拥有 HTML 元
// 素具有的默认属性，并且还独有自己的属性和方法：
// HTMLFormElement 属性和方法
// 属性或方法 说明(必须在Form对象上操作)
// acceptCharset 服务器能够处理的字符集
// action 接受请求的 URL
// elements 表单中所有控件的集合
// enctype 请求的编码类型
// length 表单中控件的数量
// name 表单的名称
// target 用于发送请求和接受响应的窗口名称
// reset() 将所有表单重置
// form.submit() 提交表单


// */
// window.addEventListener('load',function(evt){
// var fm=document.getElementById('myform')
// /*
// 获取表单<form>对象的方法有很多种，如下：
// document.getElementById('myForm'); //使用 ID 获取<form>元素
// document.getElementsByTagName('form')[0]; //使用获取第一个元素方式获取
// document.forms[0]; //使用 forms 的数字下标获取元素
// document.forms['yourForm']; //使用 forms 的名称下标获取元素
// */
// fm.addEventListener('submit',function(evt){
// evt.preventDefault()//阻止提交按钮
// },false)
// ////PS:把submit事件绑定到input中的submit按钮上,是无法触发submit事
// ////件的,必须把它绑定到form对象上才行.

// var sub1=document.getElementById('sub1')
// sub1.addEventListener('click',function(){
// 	fm.submit()//可以让普通对象提交表单
// },false)

// ////按ctrl+回车键提交表单
// // document.onkeydown=function(evt){//传统写法
// // 	if(evt.ctrlKey && evt.keyCode==13){fm.submit()}
// // }
// document.addEventListener('keydown',function(evt){//新写法
// if(evt.ctrlKey && evt.keyCode==13){fm.submit()}
// },false)
// ////PS：在表单中尽量避免使用 name="submit"或 id="submit"等命名，这会和 submit()方法发生冲突导致无法提交。



// },false)



























// /*
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
//  //用evt.preventDefault(); //W3C，阻止默认行为，放哪里都可以

// 在 JavaScript 中，表单对应的则是
// HTMLFormElement 类型。HTMLFormElement 继承了 HTMLElement，因此它拥有 HTML 元
// 素具有的默认属性，并且还独有自己的属性和方法：
// HTMLFormElement 属性和方法
// 属性或方法 说明(必须在Form对象上操作)
// acceptCharset 服务器能够处理的字符集
// action 接受请求的 URL
// elements 表单中所有控件的集合
// enctype 请求的编码类型
// length 表单中控件的数量
// name 表单的名称
// target 用于发送请求和接受响应的窗口名称
// reset() 将所有表单重置
// reset 重围按键被点击时发生的事件
// form.submit() 提交表单
// submit提交表单数据时发生的事件
// */

// window.addEventListener('load',function(){
// 	      ////1 防止表单被不断的重复提交
// var fm=document.getElementById('myform')//获取form表单元素

// var flag=false//第二种方法的侦听变量
// fm.addEventListener('submit',function(evt){//提交表单事件发生时
// 	evt.preventDefault()//阻断提交操作
// 	//alert('重复提交')
// 	//document.getElementById('sub').disabled=true //一提交就设置disabled属性为真 ,禁用了提交按钮,这是一种方法
//     if(flag==true) return //第二种方法,一提交就设置变量为真,如果为真时函数返回
// 	flag=true //表示已提交一次
// 	setTimeout(function(){fm.submit()},5000)//模拟延时5秒后提交
// },false)
// /*PS：在某些浏览器，F5 只能起到缓存刷新的效果，有可能获取不到真正的源头更新的
// 数据。那么使用 ctrl+F5 就可以把源头给刷出来。*/




// ////2  在网页其他地方单击左键,重置表单内的数据
// document.addEventListener('click',function(evt){
// 	fm.reset()
// },false)





// //// 3  表单字段访问
// /*
// 1) 表单处理中，我们建议使用 HTML DOM，它有自己的
// elements 属性，该属性是表单中所有表单元素的集合,非表单元素不算。
// fm.elements[0]; //获取第一个表单字段元素,非表单控件会被忽略
// fm.elements['user']; //获取 name 是 user 的表单字段元素
// fm.elements.length; //获取所有表单字段的数量*/

// // alert(fm.elements)//表单控件集合
// // alert(fm.elements.length)//表单控件的个数
// // alert(fm.elements['user'])//以name属性得到具体的表单控件,如果名字有重复的,就返回集合




// /*2)共有的表单字段属性
// 除了<fieldset>元素之外，所有表单字段都拥有相同的一组属性。由于<input>类型可以
// 表示多种表单字段，因此有些属性只适用于某些字段。以下罗列出共有的属性：
// 属性或方法 	说明
// disabled 	布尔值，表示当前字段是否被禁用
// form 	指向当前字段所属表单的指针，只读
// name 	当前字段的名称
// readOnly 	布尔值，表示当前字段是否只读
// tabIndex 	表示当前字段的切换
// type 	当前字段的类型
// value 	当前字段的值
// 这些属性其实就是 HTML 表单里的属性，*/

// // var sexlist=fm.elements['sex']//名字有重复的,就返回集合
// // alert(sexlist[0].value)//男
// // alert(sexlist[0].type)//radio
// // sexlist[0].type='checkbox'//可以修改类型
// /*对于非<input>元素，这个 type 的属性值如下：
// 元素说明 HTML 标签 type 属性的值
// 单选列表 <select>...</select> select-one
// 多选列表 <select multiple>...</select> select-multiple
// 自定义按钮 <button>...</button> button
// 自定义非提交按钮 <button type="button">...</button> button
// 自定义重置按钮 <button type="reset">...</button> reset
// 自定义提交按钮 <button type="submit">...</button> submit
// PS：<input>和<button>元素的 type 属性是可以动态修改的，而<select>元素的 type 属性
// 则是只读的。(在不必要的情况下，建议不修改 type)。*/
// // alert(sexlist[0].name)//sex
// // alert(sexlist[0].form)//[object HTMLFormElement]
// // //sexlist[0].disabled=true
// // //sexlist[1].readOnly=false
// // alert(sexlist[0].readOnly)
// // alert(sexlist[1].tabIndex)





// /*3)共有的表单字段方法
// 每个表单字段都有两个方法：foucs()和 blur()。
// 方法 说明
// focus() 将焦点定位到表单字段里
// blur() 从元素中将焦点移走
// fm.elements[0].focus(); //将焦点移入
// fm.elements[0].blur(); //将焦点移出*/
// fm.elements['user'].focus()//将焦点移入文本框




// /*4 共有的表单字段事件
// 表单共有的字段事件有以下三种：
// 事件名 	说明
// blur 	当字段失去焦点时触发
// change 	对于<input>和<textarea>元素，在改变 value 并失去焦点时触发；对于<select>元素，在改变选项时触发
// focus 	当前字段获取焦点时触发
// */
// fm.elements['user'].addEventListener('blur',function(){//添加了这个文本框失去焦点的事件
// 	alert('焦点离开')
// },false)





// },false)











// /*
// W3C 事件处理函数
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作(相同的事件)：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
// IE8及以前的不支持，IE9及以后的支持了
//  */
// window.addEventListener('load',function(){
// /*
// 			1   Select对象
// 属性/方法 		说明
// add(new,rel) 	插入新元素，并指定位置
// multiple 		布尔值，是否允许多项选择
// options 		通过<select>对象获取到里面的<option>元素的集合
// remove(index) 	移除给定位置的选项
// selectedIndex 	基于 0 的选中项的索引，如果没有选中项，则值为-1
// size 			选择框中可见的行数
//  */
// var fm=document.getElementById('myform')//获取了form对象
// var city=fm.elements['city']//获取了selcet对象
// alert(city)
// city.multiple=true//多行
// city.size=6//行数
// alert(city.type)//单选选择
// alert(city.options)//通过<select>对象获取到里面的<option>元素的集合
// alert(city.options[0])
// alert(city.options[1].value)
// alert(city.options[1].text)
// alert(city.options[1].selected)
// alert(city.options[1].label)
// alert(city.options[1].index)
//  /*
// 			2   Option对象
// 属性 	说明
// index 	当前选项在 options 集合中的索引
// label 	当前选项的标签
// selected 	布尔值，表示当前选项是否被选中
// text 	选项的文本
// value 	选项的值
// */

// city.addEventListener('change',function(){//改变事件发生时
// 	alert(this.selectedIndex)//选中项的索引，如果没有选中项，则值为-1.
// 							//用于设置
// 	alert(this.options[this.selectedIndex].value+'--'+this.options[this.selectedIndex].text)//取出选中项的值和文本

// if(city.options[2].selected){
// 	alert('正确')
// }else{alert('错误')}

// },false)



//                ////设置谁被选中
// city.selectedIndex=3//从select对象上设置选中的项
// city.options[1].selected=true//从option对象上设置选中的项




//                    //3  删除选项
// city.remove(3)
// ////city.removeChild(city.options[0]); //DOM 移除
// ////city.options[0] = null; //null 移除
// ////PS：当第一项移除后，下面的项，往上顶，所以不停的移除第一项，即可全部移除



// /*

// 			4 添加选项
// 使用 Option 构造函数创建：
// var option = new Option('北京 t', '北京 v');创建选项
// city.appendChild(option); //IE 出现 bug
// 使用 add()方法来添加选项：
// var option = new Option('北京 t', '北京 v');
// city.add(option, 0); //0，表示添加到第一位
//  */
// var option=new Option('重庆TEXT','重庆V')//创建选项
// city.add(option,2)//添加选项





// 			////5 移动选项 
// city.addEventListener('click',function(){
// 	var info=fm.elements['info']
// 	info.appendChild(this.options[city.selectedIndex])//把点到的选择移动到新的selcet列表中
// },false)





// /*排列选项
// 选择框提供了一个 index 属性，可以得到当前选项的索引值，和 selectedIndex 的区别是，
// 一个是选择框对象的调用，一个是选项对象的调用。*/
// var option1 = city.options[1];
// city.insertBefore(option1, city.options[option1.index - 1]); //往下移动移位





// /*

// 单选按钮
// 通过 checked 属性来获取单选按钮的值。
// for (var i = 0; i < fm.sex.length; i ++) { //循环单选按钮
// if (fm.sex[i].checked == true) { //遍历每一个找出选中的那个
// alert(fm.sex[i].value); //得到值
// } }
// PS：除了 checked 属性之外，单选按钮还有一个 defaultChecked 按钮，它获取的是原本
// 的 checked 按钮对象，而不会因为 checked 的改变而改变。
// if (fm.sex[i].defaultChecked == true) {
// alert(fm.sex[i].value);
// }




// 复选按钮
// 通过 checked 属性来获取复选按钮的值。复选按钮也具有 defaultChecked 属性。
// var love = '';
// for (var i = 0; i < fm.love.length; i ++) {
// if (fm.love[i].checked == true) {
// love += fm.love[i].value;
// } }
// alert(love);

//  */



// },false)

















// /*
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
//  //用evt.preventDefault(); //W3C，阻止默认行为，放哪里都可以

// 在 JavaScript 中，表单对应的则是
// HTMLFormElement 类型。HTMLFormElement 继承了 HTMLElement，因此它拥有 HTML 元
// 素具有的默认属性，并且还独有自己的属性和方法：
// HTMLFormElement 属性和方法
// 属性或方法 说明(必须在Form对象上操作)
// acceptCharset 服务器能够处理的字符集
// action 接受请求的 URL
// elements 表单中所有控件的集合
// enctype 请求的编码类型
// length 表单中控件的数量
// name 表单的名称
// target 用于发送请求和接受响应的窗口名称
// reset() 将所有表单重置
// reset 重围按键被点击时发生的事件
// form.submit() 提交表单
// submit提交表单数据时发生的事件
// */

// window.addEventListener('load',function(){
// var fm=document.getElementById('myform')
// /*
// 1 文本框脚本
// 在 HTML 中，有两种方式来表现文本框：一种是单行文本框<input type="text">，一种
// 是多行文本框<textarea>。虽然<input>在字面上有 value 值，而<textarea>却没有，但通过都
// 可以通过 value 获取他们的值。
// var textField = fm.elements[0];
// var areaField = fm.elements[1];
// alert(textField.value + ',' + areaField.value); //得到 value 值
// 使用表单的 value 是最推荐使用的
// 还有一个属性对应的是 defaultValue ，可以得到原本的 value 值，不会因为设置值的改变而变化
// */
// // alert(fm.elements['user'].value)
// // alert(fm.elements['word'].value)
// // fm.addEventListener('submit',function(){
// // 	alert(fm.elements['user'].defaultValue)
// // 		alert(fm.elements['word'].defaultValue)
// // },false)




// /*
// 2 选择文本 */
// // fm.elements['user'].select()//将文本框里的文本选中，并且将焦点设置到文本框中




// /* 3 选择部分文本  要直接选定部分文本，这个行为还没有标准。Firefox
// 的解决方案是： setSelectionRange() 方法。这个方法接受两个参数：索引和长度。*/
// // fm.elements['user'].setSelectionRange(3,5)




// /*4  使用 select 事件，可以选中文本框文本后触发。*/
// fm.elements['user'].addEventListener('select',function(){
// 	alert(this.value)//返回文本框的值 
// 	alert(this.selectionStart)//返回选中文字的开始索引
// 	alert(this.selectionEnd)//返回选中文字的结束索引前
// 	//获取选中的文本
// 	alert(this.value.substring(this.selectionStart,this.selectionEnd))//文本处理函数截取(返回选中的文本)
// },false)
// //document.selection.createRange().text; //获取 IE8.0及以下选择的文本


// },false)
















// /*
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。
//  //用evt.preventDefault(); //W3C，阻止默认行为，放哪里都可以
// */

// window.addEventListener('load',function(){
// var fm=document.getElementById('myform')
// // var user=fm.elements['user']
// // var content=fm.elements['word']


// ////1 只允许输入数字(不能阻止复制,中文输入)
// // content.addEventListener('keypress',function(evt){//当按下键盘的某键时
// // char=evt.charCode//获取字符编码
// // zi=String.fromCharCode(char)//把字符编码转换成字
// // if(!/\d/.test(zi)){//如果输入的不是数字
// // 	evt.preventDefault()}//屏蔽了非数学键盘的功能
// // },false)





// /////*2 要阻止裁剪、复制和粘贴，那么我们可以在剪贴板相关的事件上进行处理，
// /*JavaScript 提供了六组剪贴板相关的事件：
// 事件名 	说明
// copy	 在发生复制操作时触发
// cut 	在发生裁剪操作时触发
// paste 	在发生粘贴操作时触发
// beforecopy	 在发生复制操作前触发
// beforecut 	在发生裁剪操作前触发
// beforepaste 	在发生粘贴操作前触发
// 由于剪贴板没有标准，导致不同的浏览器有不同的解释。Safari、Chrome 和 Firefox 中，
// 凡是 before 前缀的事件，都需要在特定条件下触发。而 IE 则会在操作时之前触发带 before
// 前缀的事件。
// 如果我们想要禁用裁剪、复制、粘贴，那么只要阻止默认行为即可*/
// // content.addEventListener('copy',function(evt){
// // 	evt.preventDefault()//阻止复制
// // },false)

// // content.addEventListener('beforecopy',function(evt){
// // 	evt.preventDefault()
// // 	alert('复制前')
// // },false)

// // content.addEventListener('paste',function(evt){
// // 	evt.preventDefault()//阻止粘贴
// // },false)
// // content.addEventListener('cut',function(evt){
// // 	evt.preventDefault()//阻止剪切
// // },false)




// ////3 屏蔽中文输入法
// /*
// 通过 CSS 来禁止调出输入法：(但是谷歌不支持)
// style="ime-mode:disabled" //CSS 直接编写
// 节点.style.imeMode = 'disabled'; //或在 JS 里设置也可以
// */
// // content.style.imeMode='disabled'//屏蔽中文输入法,但谷歌不支持




// ////4 即时验证数据非法后取消输入
// // content.addEventListener('keyup',function(evt){
// // 	this.value=this.value.replace(/[^\d]/g,'')//即时把数字转换为空
// // },false)





// //5 控件被输满字符后,光标自动跳到下一个
// fm.elements['a1'].addEventListener('keyup',tabforward,false)//按一个键抬起时,就执行函数tabforward
// fm.elements['a2'].addEventListener('keyup',tabforward,false)
// fm.elements['a3'].addEventListener('keyup',tabforward,false)
// function tabforward(){
// 	if (this.value.length==this.maxLength){//*maxLength 因为length是关键字,所以l必须大写,否则取不到值
// 		//如果输入的字的长度等于最大的长度值
// 		for(var i=0;i<fm.elements.length;i++){//遍历form中的控件
// 			if(fm.elements[i]==this){//如果遍历到的控件是本事件的控件
// 				fm.elements[i+1].focus()//让下一个控件获取焦点
// 				return//返回
// 			}
// 		}
// 	}
// }


// },false)

















// // window.asdf()//出错了,导致后面执行不到
// // 



// try{//尝试执行,
// 	window.asdf()}
// catch(e){//捕获错误后执行
// 	alert(e)
// alert(e.name)
// alert(e.message)

// }
// finally{
// 	alert('不管是否有错误都会执行到')
// 	//一般作收尾和清理的工作
// }

// //出错后会继续执行后面的代码
// 	alert('')

// /*在 e 对象中，ECMA-262 还规定了两个属性：message 和 name，分别打印出信息和名称。
// alert('错误名称：' + e.name);
// alert('错误名称：' + e.message);
// PS：Opera9 之前的版本不支持这个属性。并且 IE 提供了和 message 完全相同的
// description 属性、还添加了 number 属性提示内部错误数量。Firefox 提供了 fileName(文件名)、
// lineNumber(错误行号)和 stack(栈跟踪信息)。Safari 添加了 line(行号)、sourceId(内部错误代
// 码)和 sourceURL(内部错误 URL)。所以，要跨浏览器使用，那么最好只使用通用的 message。*/

// /*
// 有7 种错误类型：
// 1.Error  是基类型(其他六种类型的父类型)，主要用于开发人员抛出自定义错误
// 2.EvalError 很难产生
// 3.RangeError   抛出(范围)错误,一般在数值超出相应范围时触发
// 4.ReferenceError  //抛出 (引用)错误,通常访问不存在的变量产生这种错误
// 5.SyntaxError  抛出 (语法)错误,一般缺少括号,分号,大括号等
// 6.TypeError  抛出 (类型 )错误,
// 7.URIError 很难产生

// */

// //利用不同的错误类型，可以更加恰当的给出错误信息或处理。
// try {
// new 10;
// } catch (e) {
// if (e instanceof TypeError) { //如果是类型错误，那就执行这里
// 	//通过这个方法,可以更准确的得到错误类型,而更准确的去处理
// alert('发生了类型错误，错误信息为：' + e.message);
// } else {
// alert('发生了未知错误！');
// } }


// /*PS：常规错误和这种浏览器兼容错误，我们都不建议使用 try-catch。因为常规错误可以
// 修改代码即可解决，浏览器兼容错误，可以通过普通 if 判断即可。并且 try-catch 比一般语
// 句消耗资源更多，负担更大。所以，在万不得已，无法修改代码，不能通过普通判断的情况
// 下才去使用 try-catch，比如后面的 Ajax 技术*/

// try {
// new 10;
// } catch (e) {
// if (e instanceof TypeError) {
// throw new TypeError('实例化的类型导致错误！'); //抛出错误.直接中文解释错误信息
// } else {
// throw new Error('抛出未知错误！');
// } }

// /*
// 三．***错误事件
// error 事件是当某个 DOM 对象产生错误的时候触发。

// addEvent(window, 'error', function () {
// alert('发生错误啦！')
// });
// new 10; //写在后面

// <img src="123.jpg" onerror="alert('图像加载错误！')" />
// */





// /*  ******五 通信错误
// 在使用 url 进行参数传递时，经常会传递一些中文名的参数或 URL 地址，在后台处理
// 时会发生转换乱码或错误，因为不同的浏览器对传递的参数解释是不同的，所以有必要使用
// 编码进行统一传递。
// 比如：?user=李炎恢&age=100
// var url = '?user=' + encodeURIComponent('李炎恢') + '&age=100'; //编码
// PS：在 AJAX 章节中我们会继续探讨通信错误和编码问题。*/


















// /*
// PS：可以使用 alert('')来调试程序错误,但比较麻烦，重要裁剪和粘贴 alert('')，如果遗忘掉没有删掉
// 用于调试的 alert('')将特别头疼。所以，我们现在需要更好的调试方法。
// 让浏览器直接使用 console 对象写入消息,输出到控制台中。
// 	一  console 对象的方法
// 方法名 				说明
// error(message)	将错误消息记录到控制台
// info(message)	 将信息性消息记录到控制台
// log(message) 	将一般消息记录到控制台
// warn(message) 	将警告消息记录到控制台
// */
// console.error('错误！'); 	//红色带叉
// console.info('信息！');	 //白色带信息号
// console.log('日志！'); 	//白色
// console.warn('警告！'); 	//黄色带感叹号
// console.log('你好啊,我成功了!!!')


// //if (typeof num2 != 'number') throw new Error('变量必须是数值！');//抛出错误
// alert('')//后面的执行不到了




// /*1.设置断点  (设置断点后要刷新网页,才进入调试)
//     火狐的调试要强大些
// 我们可以选择 Script(脚本)，点击要设置断点的 JS 脚本处，即可设置断点。当我们需要
// 调试的时候，从断点初开始模拟运行，发现代码执行的流程和变化。
// 2.单步调试
// 设置完断点后，可以点击单步调试，一步步看代码执行的步骤和流程。上面有五个按钮：
// 重新运行：重新单步调试
// 断继：正常执行代码
// 单步进入：一步一步执行流程
// 单步跳过：跳到下一个函数块
// 单步退出：跳出执行到内部的函数

// 不需要调试时,一定要去掉断点,不然每次刷新就会进入调试模式.
// 3.监控
// 单击“监控”选项卡上，可以查看在单步进入是，所有变量值的变化。你也可以新建监
// 控表达式来重点查看自己所关心的变量。
// 4.控制台
// 显示各种信息。之前已了解过。
// PS：其他浏览器除 IE8 以上均可实现以上的调试功能，大家可以自己常识下。而我们
// 主要采用 Firebug 进行调试然后兼容到其他浏览器的做法以提高开发效率。*/

// var a=10
// window.onload=function(){
// 	var b=11
// 	c=a+b
// 	console.log(c)
// }

















// var xmlDom = document.implementation.createDocument('','root',null);
// xmlDom.loadXML('1.xml');
// var user = xmlDom.selectSingleNode('root/user'); //得到第一个 user 节点
// alert(user.xml); //查看 xml 序列
// alert(user.tagName); //节点元素名
// alert(user.firstChild.nodeValue); //节点内的值



















// /*目前 Chrome 不可以在客户端操作，只能在服务器端操作.其他浏览器均可*/
// /*
// cookie 的组成
// cookie 由名/值对形式的文本组成：name=value。完整格式为：
// name=value; [expires=date]; [path=path]; [domain=somewhere.com]; [secure]
// 中括号是可选，name=value 是必选。
// document.cookie = 'user=' + encodeURIComponent('李炎恢'); //编码写入
// alert(decodeURIComponent(document.cookie)); //解码读取
// // */
// document.cookie=encodeURIComponent('user=张世伟')//这样只有值,没有名
// document.cookie='user='+encodeURIComponent('张世伟')//这样才是有名有值的键值对
// alert(decodeURIComponent(document.cookie))


// /*
// expires=date 失效时间，如果没有声明，则为浏览器关闭后即失效。声明了失效时间，
// 那么时间到期后方能失效。
// var date = new Date(); //创建一个
// date.setDate(date.getDate() + 7);
// document.cookie = "user= " + encodeURIComponent('李炎恢') +";expires=" + date;
// PS：可以通过 Firefox 浏览器查看和验证失效时间。如果要提前删除 cookie 也非常简单，
// 只要重新创建 cookie 把时间设置当前时间之前即可：date.getDate() - 1 或 new Date(0)。
// */
// var date1=new Date()
// date1.setDate(date1.getDate()+7)
// document.cookie='user='+encodeURIComponent('张世伟')+';expires='+date1//设置7天后删除cookie
// document.cookie='user='+encodeURIComponent('张世伟')+';expires='+new Date(0)//设置超时时间提前,来删除cookie



// /*
// path=path 访问路径，当设置了路径，那么只有设置的那个路径下的文件才可以访问 cookie。
// var path = '/E:/%E5%A4%87%E8%AF%BE%E7%AC%94%E8%AE%B0/JS1/29/demo';
// document.cookie = "user= " + encodeURIComponent('李炎恢') + ";path=" + path;
// */

// path='c:/'
// document.cookie='span='+encodeURIComponent('发8888888')+';path='+path
// alert(decodeURIComponent( document.cookie))





// /*
// domain=domain 访问域名，用于限制只有设置的域名才可以访问，那么没有设置，会
// 默认限制为创建 cookie 的域名。
// var domain = 'yc60.com';
// document.cookie = "user= " + encodeURIComponent('李炎恢') + ";domain=" + domain;

// PS：如果定义了 yc60.com，那么在这个域名下的任何网页都可访问，如果定义了
// v.yc60.com，那么只能在这个二级域名访问该 cookie，而主域名和其他子域名则不能访问。
// PS：设置域名，必须在当前域名绑定的服务器上设置，如果在 yc60.com 服务器上随意
// 设置其他域名，则会无法创建 cookie
// */




// /*secure 安全设置，指明必须通过安全的通信通道来传输(HTTPS)才能获取 cookie。
// document.cookie = "user= " + encodeURIComponent('李炎恢') + ";secure";
// PS：https 安全通信链接需要单独配置。*/



















// document.cookie='user=zhang'//cookie里面的本质是字符串
// document.cookie='url=zhang.com'
// document.cookie='email=zhang@zhang.com'
// alert(document.cookie)//拼接的字符串


// /*
// 三．其他存储
// IE 提供了一种存储可以持久化用户数据，叫做 userData，从 IE5.0 就开始支持。每个数
// 据最多 128K，每个域名下最多 1M。这个持久化数据存放在缓存中，如果缓存没有清理，
// 那么会一直存在。
// <div style="behavior:url(#default#userData)" id="box"></div>
// addEvent(window, 'load', function () {
// var box = document.getElementById('box');
// box.setAttribute('name', encodeURIComponent('李炎恢'));
// box.expires = setCookieDate(7);
// box.save('bookinfo');
// //box.removeAttribute('name'); //删除 userDate
// //box.save('bookinfo');
// box.load('bookinfo');
// alert(decodeURIComponent(box.getAttribute('name')));
// });
// PS：这个数据文件也是保存在 cookie 目录中，只要清除 cookie 即可。如果指定过期日
// 期，则到期后自动删除，如果没有指定就是永久保存。
// */



// /*
// Web 存储
// 在比较高版本的浏览器，JavaScript 提供了 sessionStorage 和 globalStorage。在 HTML5
// 中提供了 localStorage 来取代 globalStorage。而浏览器最低版本为：IE8+、Firefox3.5+、Chrome
// 4+和 Opera10.5+。
// PS：由于这三个对浏览器版本要求较高，我们就只简单的在 Firefox 了解一下，有兴趣
// 的可以通过关键字搜索查询。
// //通过方法存储和获取
// sessionStorage.setItem('name', '李炎恢');
// alert(sessionStorage.getItem('name'));
// //通过属性存储和获取
// sessionStorage.book = '李炎恢';
// alert(sessionStorage.book);
// //删除存储
// sessionStorage.removeItem('name');
// PS：由于 localStorage 代替了 globalStorage，所以在 Firefox、Opera 和 Chrome 目前的最
// 新版本已不支持。
// //通过方法存储和获取
// localStorage.setItem('name', '李炎恢');
// alert(localStorage.getItem('name'));
// //通过属性存储和获取
// localStorage.book = '李炎恢';
// alert(localStorage.book);
// //删除存储
// localStorage.removeItem('name');
// PS：这三个对象都是永久保存的，保存在缓存里，只有手工删除或者清理浏览器缓存
// 方可失效。在容量上也有一些限制，主要看浏览器的差异，Firefox3+、IE8+、Opera 为 5M，，
// Chrome 和 Safari 为 2.5M。

// */

// sessionStorage.setItem('name','幸晓敏')
// alert(sessionStorage.getItem('name'))
// sessionStorage.opert='FKed'
// alert(sessionStorage.opert)
// sessionStorage.removeItem('name')
// alert(sessionStorage.getItem('name'))

// localStorage.name='何云飞'
// alert(localStorage.name)
// sessionStorage.name='孙小梅'
// alert(sessionStorage.name)



















// /*
// Ajax必须要用UTF-8编码，必须要事先在文档中声明好

// “事件”定义了两个方法，用于添加事件和删除事件处理程序的操作(相同的事件)：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法，并且它
// 们都接受 3 个参数；事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。

//  */
// var xhr=new XMLHttpRequest()//1 创建XMLHttpRequest对象
// //alert(xhr)

// /*2  在使用 XHR 对象时，先必须调用 open()方法，它接受三个参数：要发送的请求类型(get、
// post)、请求的 URL 和表示是否异步。*/
// xhr.open('get','do.php',false)//对于 do.php 的 get 请求，false同步

// /*
// 3 open()方法并不会真正发送请求，而只是启动一个请求以备发送。通过 send()方法进行
// 发送请求，send()方法接受一个参数，作为请求主体发送的数据。如果不需要则，必须填 null。
// 执行 send()方法之后，请求就会发送到服务器上。 */
// xhr.send(null)

// /*
// 4 当请求发送到服务器端，收到响应后，响应的数据会自动填充 XHR 对象的属性。那么
// 一共有四个属性：
// 属性名 				说明
// responseText 	作为响应主体被返回的文本
// responseXML 	如果响应主体内容类型是"text/xml"或"application/xml"，则返回包含响应数据的 XML DOM 文档
// status 			响应的 HTTP 状态
// statusText 		HTTP 状态的说明

// 接受响应之后，第一步检查 status 属性，以确定响应已经成功返回。一般而已 HTTP 状
// 态代码为 200 作为成功的标志。除了成功的状态代码，还有一些别的：
// HTTP 状态码 状态字符串 说明
// 200 OK 服务器成功返回了页面
// 400 Bad Request 语法错误导致服务器不识别
// 401 Unauthorized 请求需要用户认证
// 404 Not found 指定的 URL 在服务器上找不到
// 500 Internal Server Error 服务器遇到意外错误，无法完成请求
// 503 ServiceUnavailable 由于服务器过载或维护导致无法完成请求
// 我们判断 HTTP 状态值即可，不建议使用 HTTP 状态说明，因为在跨浏览器的时候，可
// 能会不太一致
//  */
// if (xhr.status==200){ //判断响应的状态是否完全成功
// 	alert(xhr.responseText)//读出返回的文本
// }




//  ////事件模式
// document.addEventListener('click',function(){
// 	xhr.open('get','do.php?rand='+Math.random(),false)//同步方式，几乎不用（添加随机数，做成新的访问链接，刷新）
// 	xhr.send(null)
// 	if(xhr.status==200){
// 		alert(xhr.responseText)
// 	}else{
// 		alert('返回数据失败，状态码：'+xhr.status+'.状态信息：'+xhr.statusText)
// 	}
// },false)





// /*
// 5 使用异步调用才是我们真正常用的手段。使用异步调用的时候，
// 需要触发 (on)readystatechange 事件，然后检测 readyState 属性即可。这个属性有五个值：

// 值 		状态 				说明
// 0 		未初始化	 	尚未调用 open()方法
// 1 		启动 			已经调用 open()方法，但尚未调用 send()方法
// 2 		发送 			已经调用 send()方法，但尚未接受响应
// 3 		接受 			已经接受到部分响应数据
// 4 		完成			 已经接受到全部响应数据，而且可以使用

// 使用 abort()方法可以取消异步请求，放在 send()方法之前会报错。放在 responseText
// 之前会得到一个空值。
//  */
// document.addEventListener('click',function(){
// xhr.onreadystatechange=function(){//必须先写异步处理的事件函数
// 	if(xhr.readyState==4){
// 		if(xhr.status==200){
// 			alert(xhr.responseText) //返回的文本
// 			}else{alert('数据返回错误，状态码：'+xhr.status+'状态信息：'+xhr.statusText)}
// 	}
// }

// xhr.open('get','do.php?rand='+Math.random(),true)//再进行异步请求（添加随机数，做成新的访问链接，刷新）
// xhr.send(null)//发送数据
// //xhr.abort()//取消异步请求（合理的放在这里）
// },false)





// /*6 在提供服务器请求的过程中，有两种方式，分别是：GET 和 POST。在 Ajax 使用的过
// 程中，GET 的使用频率要比 POST 高。
//     在了解这两种请求方式前，我们先了解一下 HTTP 头部信息，包含服务器返回的响应头
// 信息和客户端发送出去的请求头信息。我们可以获取响应头信息或者设置请求头信息。
// //使用 getResponseHeader()获取单个响应头信息
// //使用 getAllResponseHeaders()获取整个响应头信息

// //使用 setRequestHeader()添加单个请求头信息.放在 open 方法之后，send 方法之前
//    我们只可以获取服务器返回回来响应头信息，无法获取向服务器提交的请求头信
// 息。
// */
// document.addEventListener('click',function(){
// xhr.addEventListener('readystatechange',function(){
// 	if (xhr.readyState==4){alert(xhr.getAllResponseHeaders())//获取整个响应头信息
// alert(xhr.getResponseHeader('content-type'))//获取单个响应头信息
// }
// },false)
// xhr.open('get','do.php',true)
// xhr.setRequestHeader('myheader','Zhang')//添加单个请求头信息,发送GET请求时，会发送给服务器端
// xhr.setRequestHeader('der','ang')//添加单个请求头信息,发送GET请求时，会发送给服务器端

// xhr.send(null)
// },false)


















// var xhr=new XMLHttpRequest()//1 创建XMLHttpRequest对象
// /*AJAX返回数据时用的是UTF-8编码，所以网页和文件必须全部设置为UTF-8编码格式
// 否则会出现中文乱码*/
// /*
// 2 GET 请求
// GET 请求是最常见的请求类型，最常用于向服务器查询某些信息。必要时，可以将查
// 询字符串参数追加到 URL 的末尾，以便提交给服务器。
// xhr.open('get', 'demo.php?rand=' + Math.random() + '&name=Koo', true);
// 通过 URL 后的问号给服务器传递键值对数据，服务器接收到返回响应数据。特殊字符
// 传参产生的问题可以使用 encodeURIComponent()进行编码处理，中文字符的返回及传参，
// 可以讲页面保存和设置为 utf-8 格式即可。
//  */
// xhr.onreadystatechange=function(){
// 	if (xhr.readyState==4){
// 		if(xhr.status==200){
// 			alert(xhr.responseText)}else{
// 				alert('数据返回错误，状态码：'+xhr.status+'状态信息：'+xhr.statusText)}
// 		}
// }
// //url='do2.php?rand='+Math.random()+'&name=张&id=188'
// //xhr.open('get',url,true)//get

// xhr.open('get','do2.php?rand='+Math.random()+'&name=张&id=188',true)//GET提交的信息要在这里组装好
// xhr.send(null)




// /*
// 3 POST请求
// xhr.open('post', 'demo.php', true);
// 而发送 POST 请求的数据，不会跟在 URL 的尾巴上，而是通过 send()方法向服务器提
// 交数据。
// xhr.send('name=Lee&age=100');
// 一般来说，向服务器发送 POST 请求由于解析机制的原因，需要进行特别的处理。因为
// POST 请求不用 Web 表单提交，需要使用 XHR 来模仿表单提交。
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// PS：从性能上来讲 POST 请求比 GET 请求消耗更多一些，用相同数据比较，GET 最多
// 比 POST 快两倍。
// */
// var xhr2=new XMLHttpRequest()
// xhr2.onreadystatechange=function(){
// 	if (xhr2.readyState==4){
// 		if(xhr2.status==200){
// 			alert(xhr2.responseText)}else{
// 				alert('数据返回错误，状态码：'+xhr2.status+'状态信息：'+xhr2.statusText)}
// 		}
// }
// xhr2.open('post','do2.php',true)//POST的数据不放在这里
// xhr2.setRequestHeader('content-type','application/x-www-form-urlencoded')//POST发送前要伪装头部信息，否则不认POST发送
// xhr2.send('name=张MR&id=8888')//把数据放在这里面





// /*
// 4 上一节课的 JSON 也可以使用 Ajax 来回调访问。
// var url = 'demo.json?rand=' + Math.random();
// var box = JSON.parse(xhr.responseText)
// */
// var xhr3=new XMLHttpRequest()
// alert('双击加载JSON')
// document.addEventListener('dblclick',function(){
// xhr3.addEventListener('readystatechange',function(){
// if(xhr3.readyState==4){
// 	if(xhr3.status==200){
// 		var json=xhr3.responseText
// 		alert(json)
// 	}else{var json=null
// 		alert('数据返回错误，状态码：'+xhr3.status+'状态信息：'+xhr3.statusText)}
// }
// },false)
// xhr3.open('get','do.json?rand='+Math.random(),true)
// xhr3.send(null)
// },false)


//var element = document.evaluate(xpath,document).iterateNext(); Xpath获取元素


















//168平台自动登记程序,成功!!!  --合并登记一周内的天数
//本程序按日期天数生成周，循环不同的周的日期,按星期几发送数据，功能强大，编写时真是让我受难了。
//本程序要在168平台登录,在新增页面中运行(因为每次要从这里取更新后的密码),运行前必须选出使用的功能室!!!
//本程序适合一周有两个年级,两个授课内容的168平台登记,授课年级增加,授课内容会增加
//如果课表中一周的授课年级增加了,要改 nj 数组 skrn 数组 和 selectnr 函数 
//如果课表中一周的授课年级只有一个,可以合并设置 nj 数组 sknr 数组 的值即可
//授课内容从第一周开始设置,到最后一周,周数多了不要紧,程序会自动取对应周数的内容
//如果课表换了,每天发送的数据程序要调整
//自动录入后可在168平台中可把不要的按日期搜索出来删除了
//程序开始

function c(mes){ //控制台输出简化函数
	console.log('===============================================================================')
	console.log('输出：'+mes)
}

function selectrq(d){  //根据传过来的日期对象来返回日期字符串 2021-2-8
	if(d){
		var s=d.toLocaleDateString().split ('/')
		return s.join('-')
	}else{c('返回使用日期时出错，无对象传入：'+d)}
}

//获取指定日期范围内的所有日期对象（或日期字符串），传入字符串，返回一维数组日期对象列表
function getdates(sdate,edate){
	var sdate_obj=new Date(sdate)//把字符创建成开始日期对象
	var edate_obj=new Date(edate)//把字符创建成结束日期对象
	var dlist=new Array()//建立空数组列表
	var i=0//定义数组列表的开始下标
	while(sdate_obj<=edate_obj){//如果日期小于或等于结束日期，就循环
		dlist[i]=sdate_obj//**数组存入日期对象（运算后的日期）
		//dlist[i]=sdate_obj.toLocaleDateString()//**数组存入日期字符串 如2021/1/8（运算后的日期）
		//console.log(dlist)
		var sdate_ts=sdate_obj.getTime()//开始日期对象的毫秒数
		var ndate_ts=sdate_ts+(1000*60*60*24)//开始日期加1天后的毫秒数
		var ndate_obj=new Date(ndate_ts)//传入毫秒，新建了下一天的日期对象
		sdate_obj=ndate_obj//开始日期换为下一天的日期对象
		i++
	}
	return dlist 
}

//传入一维日期对象数组列表，生成去掉了周六周日，并且按时间先后生成周次，依次排列的
//包含每一周的日期对象的二维数组，还在每一周子数组的首位添加了第几周数字。
function filter_dates(arr,n){ //传入日期数组，过滤掉周日，再按查找周六来生成新的二维数组，n为周数从几起
	dblist=[] //新二维数组
	if(n){var week_start=n}else{var week_start=1
	 //***设置数组中周数从第几周起添加，目的仅仅只是以后取第几周的授课内容,没有数据就从第1周起
	}
	var add=[]//临时子数组
	for(i=0;i<arr.length;i++){//先删除所有的周日
		if(arr[i].getDay()==0){//如果是周日
			var del=arr.splice(i,1)//删除周日，影响传入的原数组
			//console.log('原数组中删除了周日'+del)
		}
	}
	for(i=0;i<arr.length;i++){//再次依次遍历所有日期，按周六添加周次，生成新的二维数组
		if(arr[i].getDay()==6){//依次遍历数组，如果是星期六时
			if(i==0){//如果第1个日期就是周六，就跳过
				continue;//否则会产生只包含周次的空子数组
			}
			add.unshift(week_start)//给临时数组首位加上周次
			dblist.push(add)//把临时数组加入二维数组末尾
			add=[]//清空临时数组
			week_start++//周次+1备用
		}else{//依次遍历数组，如果不是星期六时
			add.push(arr[i])//把元素加入临时数组末尾
		}		
	}
	if(add.length!==0){//退出循环后，如果最后一次的临时数组中有数据
		//解决了不是以周六结尾时，最后一周的数据丢失的问题
		add.unshift(week_start)//再给临时数组首位加上周次
		dblist.push(add)//再把临时数组加入二维数组末尾
	}
	add=null//删除临时数组
	return dblist
}

function selectnr(nj,sknr2){   //根据传过来的年级字符串，和授课内容对象，自动返回相对应年级的授课内容
	if(nj.indexOf("六")==-1){   //如果年级字符中没有找到六年级
			return sknr2.si    //四年级的授课内容
	}else{return sknr2.liu }    //作默认的返回 六年级授课的内容		
}

function random(min, max) {  //生成指定范围的随机数，给班级人数
 	 return Math.floor(Math.random() * (max - min)) + min; //类似固定公式
}

var sxw=['上午','下午']//上下午 基础数据名，要与168平台中的内容对应
var djj=['第一节课','第二节课','第三节课','第四节课']//第几节课  要与168平台中的内容对应
var bj=['01班','2班','3班','4班','5班','6班','7班','8班','9班','10班']//几班  要与168平台中的内容对应

var sdate='2020-11-17'//设置开始登记时间
var edate='2020-11-23'//设置结束时间   如果不加0，有时候谷歌浏览器中结束日期会掉
var start_week=1 //设置日期时间段的开始周数,如果不设置默认为1

var username='毛毛' //设置使用教师
var gnsmz="计算机室一"  //功能室名  
var xiaoq="主校区" //校区
var xkname="信息技术"  //学科
var xq="2020-2021学年上学期" //学期
var syqk="有电脑损坏,报修中........."  //使用情况
var qicai="多媒体/电脑"  //使用器材

c('您设置的日期段为：'+sdate+'--'+edate)
c('您设置的起始周数为：'+start_week)
c('您设置的使用教师为：'+username)

var nj=['小学四年级','小学六年级'] //几年级  换人换课表要改

//授课内容必须与周数一致，否则程序会出错
//授课内容从第一周开始设置,到最后一周,周数多了不要紧,程序会自动取对应周数的内容
var sknr=[//每周有两个年级的不同授课内容 每周改
{ //第一周授课内容 每周改
'si':'第一周摆脱机器人追踪', //四年级的授课内容
'liu':'第一周走出迷宫' //六年级的授课内容
},
{ //第二周授课内容 每周改
'si':'第二周摆脱机器人追踪', //四年级的授课内容
'liu':'第二周走出迷宫' //六年级的授课内容
},
{ //第三周授课内容 每周改
'si':'第三周摆脱机器人追踪', //四年级的授课内容
'liu':'第三周走出迷宫' //六年级的授课内容
},
{ //第四周授课内容 每周改
'si':'第四周摆脱机器人追踪', //四年级的授课内容
'liu':'第四周走出迷宫' //六年级的授课内容
},
{ //第五周授课内容 每周改
'si':'第五周摆脱机器人追踪', //四年级的授课内容
'liu':'第五周走出迷宫' //六年级的授课内容
},
{ //第六周授课内容 每周改
'si':'第六周摆脱机器人追踪', //四年级的授课内容
'liu':'第六周走出迷宫' //六年级的授课内容
},
{ //第七周授课内容 每周改
'si':'第七周摆脱机器人追踪', //四年级的授课内容
'liu':'第七周走出迷宫' //六年级的授课内容
},
{ //第八周授课内容 每周改
'si':'第八周摆脱机器人追踪', //四年级的授课内容
'liu':'第八周走出迷宫' //六年级的授课内容
},
{ //第九周授课内容 每周改
'si':'第九周摆脱机器人追踪', //四年级的授课内容
'liu':'第九周走出迷宫' //六年级的授课内容
},
{ //第十周授课内容 每周改
'si':'第十周摆脱机器人追踪', //四年级的授课内容
'liu':'第十周走出迷宫' //六年级的授课内容
},
{ //第十一周授课内容 每周改
'si':'第十一周摆脱机器人追踪', //四年级的授课内容
'liu':'第十一周走出迷宫' //六年级的授课内容
},
{ //第十二周授课内容 每周改
'si':'第十二周摆脱机器人追踪', //四年级的授课内容
'liu':'第十二周走出迷宫' //六年级的授课内容
},
{ //第十三周授课内容 每周改
'si':'第十三周摆脱机器人追踪', //四年级的授课内容
'liu':'第十三周走出迷宫' //六年级的授课内容
},
{ //第十四周授课内容 每周改
'si':'第十四周摆脱机器人追踪', //四年级的授课内容
'liu':'第十四周走出迷宫' //六年级的授课内容
},
{ //第十五周授课内容 每周改
'si':'第十五周摆脱机器人追踪', //四年级的授课内容
'liu':'第十五周走出迷宫' //六年级的授课内容
},
{ //第十六周授课内容 每周改
'si':'第十六周摆脱机器人追踪', //四年级的授课内容
'liu':'第十六周走出迷宫' //六年级的授课内容
},
{ //第十七周授课内容 每周改
'si':'第十七周摆脱机器人追踪', //四年级的授课内容
'liu':'第十七周走出迷宫' //六年级的授课内容
},
{ //第十八周授课内容 每周改
'si':'第十八周摆脱机器人追踪', //四年级的授课内容
'liu':'第十八周走出迷宫' //六年级的授课内容
},
{ //第十九周授课内容 每周改
'si':'第十九周摆脱机器人追踪', //四年级的授课内容
'liu':'第十九周走出迷宫' //六年级的授课内容
},
{ //第二十周授课内容 每周改
'si':'第二十周摆脱机器人追踪', //四年级的授课内容
'liu':'第二十周走出迷宫' //六年级的授课内容
}
]


////***********************************程序开始处理******************************************

var datelist1=getdates(sdate,edate)//返回两个日期中的所有日期
//console.log(datelist1)
var week_arry=filter_dates(datelist1,start_week)//返回所有日期格式化为[周次+本周日期]的二维数组 ,周次从1起 可设置。作用是对应着取第几周的授课内容。
console.log(week_arry)

var weeks=week_arry.length//两个日期间共有周次，每一周对应一套授课内容
console.log('您设置的两个日期间共有周次：'+weeks)


// for(var i=0;i<weeks;i++){//遍历了二维数组，所有元素
// 	for(var j=0;j<week_arry[i].length;j++){
// 		console.log(week_arry[i][j])
// 	}
// }

//console.log(sknr[0])

//  week_arry=[[1,a,a,a],[2,b,b,b,b,b],[3,c]]
//i=               0          1          2         
//以下程序有点思维混乱了，主要就是JS执行事件循环机制的问题，用了setTimeout()就不能用for？？？
//JS是单线程，用setTimeout()，好像应按固定的取一周5天16节课的思路来做？？？

//for(var i=0;i<weeks;i++){ //循环所有周数 3  先不管了
var i=0 //循环周数，可以手动循环，或计算以下程序执行完的时间后，再用setTimeout()加数，来循环？？？一个满周16节，32秒多
function do_weeks(){
if (i<weeks){
	var week_one=week_arry[i]//(循环)取某一周的日期数组出来了
	var m=week_one.length-1//取这一周有几天 
	setTimeout(do_weeks,8300*m) //等m天的程序执行完后，再次执行本函数

	var sknr2=sknr[week_one[0]-1]//取这一周的授课内容对象，子数组第1个数据代表多少周，从1开始，与授课内容数组索引对应-1。也可以直接借助于i来取！！！
	//因为这一周的授课内容对象是相同的，所以可以在setTimeout()的函数循环体外面取,但必须放在循环周数内
	//c(sknr2.liu)//console.log()显示

	c('开始执行第'+week_one[0]+'周，有'+m+'天')//从子数组的第1个索引位取出的周数，不一定也可以用i+1表示 
	var n=1 //循环变量 天

	function do_week_one(i){ //循环遍历一周内的天数   i可以去了 
		if(n<=m){ 
			setTimeout(do_week_one,8100,i) //发完一天数据花几秒  最多一天4节课8秒多  todo可以先把一天的节数算出来，*2010，即可准确匹配时间
			var datestr=selectrq(week_one[n]) //循环，取1天，返回日期字符串给登记日期2021-2-8 
			date1=week_one[n].getDay()//循环，取1天，返回取的这天星期几
						//do_tian(date1,datestr,)
			console.log('开始执行星期'+date1+', (第'+n+'天)...')
			if(date1==1){ //星期一的课表
			var j=3//三节课要循环发送3次数据
		
			}else if(date1==2){//星期二的课表
			var j=4

			}else if(date1==3){//星期三的课表  暂时发送成功^O^
			var j=2//两节课，要循环发送2次数据

			}else if(date1==4){//星期四的课表
			var j=3//三节课，要循环发送3次数据

			}else if(date1==5){//星期五的课表
			var j=4//四节课，要循环发送4次数据
			}


			var k=1//计次变量，发送当天第几节课的数据
			function do_day(){ 
				if(k<=j){//根据不同的星期几(的课的节数),就循环几次
				//if(date1==1&&k==1){   }  //**星期一第1次课,todo用这种条件，可合并重复代码
					setTimeout(do_day,2000)
					var postData = $(".form").getFormValue();//取得表单中的数据  为对象 要恢复
					//var postData={}//要去掉
					postData.Shiyongdate=datestr //使用日期
					//c(postData.Shiyongdate)
					//以下if的过程实质是在编课表,并把对应的数据赋给待发送的变量
					//星期一的课表
					if(date1==1&&k==1){ //如果星期一第1次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[2]  //第三节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[1]  //2班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容 根据年级自动选
					}
					if(date1==1&&k==2){ //如果星期一第2次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[3]  //第四节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[3]   //4班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容 根据年级自动选
					}
					if(date1==1&&k==3){ //如果星期一第3次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[0]  //第一节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[6]   //7班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容 根据年级自动选
					}

					//星期二的课表
					if(date1==2&&k==1){ //如果星期二第1次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[2]  //第三节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[5]   //6班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容 根据年级自动选
					}
					if(date1==2&&k==2){ //如果星期二第2次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[3]  //第四节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[9]   //10班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==2&&k==3){ //如果星期二第3次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[0]  //第一节课
			        postData.Gradename = nj[1]  //六年级
			        postData.Classname = bj[5]   //6班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==2&&k==4){ //如果星期二第4次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[1]  //第二节课
			        postData.Gradename = nj[1]  //六年级
			        postData.Classname = bj[9]   //10班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					//星期三的课表
					if(date1==3&&k==1){//如果星期三第1次发送时
						postData.Sytime2 = sxw[0] //上午
				        postData.Sytime3 = djj[2]  //第三节课
				        postData.Gradename = nj[1]  //六年级
				        postData.Classname = bj[4]   //5班 级
						postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容根据年级选
						//console.log(postData.Shoukenr)
					}
					if(date1==3&&k==2){//如果星期三第2次发送时
						postData.Sytime2 = sxw[1] //下午
				        postData.Sytime3 = djj[0]  //第一节课
				        postData.Gradename = nj[1]  //六年级
				        postData.Classname = bj[7]   //8班 级
						postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容根据年级选
					}
					//星期四的课表
					if(date1==4&&k==1){ //如果星期四第1 次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[2]  //第三节课
			        postData.Gradename = nj[1]  //六年级
			        postData.Classname = bj[6]   //7班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==4&&k==2){ //如果星期四第2次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[0]  //第一节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[2]   //3班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==4&&k==3){ //如果星期四第3次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[1]  //第二节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[7]   //8班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					//星期五的课表
					if(date1==5&&k==1){ //如果星期五第1次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[2]  //第三节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[4]   //5班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==5&&k==2){ //如果星期五第2次执行
			        postData.Sytime2 = sxw[0] //上午
			        postData.Sytime3 = djj[3]  //第四节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[8]   //9班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==5&&k==3){ //如果星期五第3次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[0]  //第一节课
			        postData.Gradename = nj[0]  //四年级
			        postData.Classname = bj[0]   //1班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}
					if(date1==5&&k==4){ //如果星期五第4次执行
			        postData.Sytime2 = sxw[1] //下午
			        postData.Sytime3 = djj[1]  //第二节课
			        postData.Gradename = nj[1]  //六年级
			        postData.Classname = bj[8]   //9班 级
					postData.Shoukenr=selectnr(postData.Gradename,sknr2) //授课内容
					}

				// 以下的数据每次发送的都一样
				postData.Renshi=random(53,63)  //使用人数
				postData.Syqc= qicai //使用器材
				postData.Shiyongqk= syqk //使用情况
				postData.Syteacher=username //使用教师
		        postData.ID = key; //从登记页中取?
		        postData.stype = type; //从登记页中取?
		        postData.Xueqiname = xq //学期
		        postData.Xueke = xkname  //学科
		        postData.XiaoquName = xiaoq //校区
		        postData.GnsName = gnsmz //功能室名字
		        postData.ClassRoomName = $("#Classroomid").find("option:selected").text();
		        if ($("#Useobj").val() == "1" && $("#chkbj").is(":checked")) {
		            var sel = $("#Classid").find("option:selected");
		            var gid = "";
		            var gname = "";
		            $.each(sel, function (i, item) {
		                gid += $(item).attr("njid")+ ",";
		                gname += $(item).attr("nj")+ ",";
		            });
		            gid = gid.substring(0, gid.length - 1);
		            gname = gname.substring(0, gname.length - 1);
		            postData.Gradeid = gid; //从登记页中取?
		            postData.Gradename = gname;  //从登记页中取?
		            postData.dj = 1;
		        }
		        if ($("#Useobj").val() == "2")
		            postData.Classname = $("#Classid1").val();
		        var iscygns = $("#setgns").prop("checked");
		        if (iscygns) {//常用功能室
		            var gnsid = $("#Syjk_gnsid").find("option:selected").attr("gnsid");
		            if (gnsid!=null && gnsid!="") {//设置了教室
		                postData.Syjk_gnsid = gnsid;
		                postData.Classroomid = $("#Syjk_gnsid").val();
		                var gnsname = $("#Syjk_gnsid").find("option:selected").text(); //计算机室一
		                var nsp = gnsname.split('_')[0];
		                if (nsp.length>1) {
		                    postData.GnsName = nsp[0];
		                    postData.ClassRoomName =nsp[1];
		                } else {
		                     postData.GnsName = gnsname;
		                }
		            }
		        }
		        postData.DeptName = orgname; //"重庆市万州区鸡公岭小学" //从登记页中取?
		        postData.Deptid = orgid; //学校的代码  //从登记页中取?
		        if (type == "add") {
		            $.submitForm({
		                url: "/GnJsManager/Sydj/SaveData",
		                param: postData,
		                close: false,
		                refresh: false,
		                success: function () {
		                    //$("#Classid").val("");
		                    $("#Classid").selectpicker("refresh");
		                    $("#Classid1").val("")
		                    top.$(".layui-layer-btn0").text("继续添加");
		                }
		            });
		        } else {
		             $.submitForm({
		                url: "/GnJsManager/Sydj/SaveData",
		                param: postData
		            });
		        }
		        console.log('发送了星期'+date1+'的第'+k+'次数据！  '+postData.Shiyongdate+postData.Sytime2+postData.Sytime3
			   +'-'+postData.Gradename+ postData.Classname+'-'+postData.Shoukenr)				

				k++ //加一节课
				}else{

				k=1 //关键点:还原计次变量,节数
				console.log('已退出，星期'+date1+'的课表数据，已发送完毕。')
				}
			}
			do_day()

			n++  //关键点: 加1天
		}else{
			console.log('执行第'+week_one[0]+'周内的天数完毕,已退出。已执行天数一共:'+(n-1))
		}
	}
	do_week_one(i) //i没有用到

	i++ //关键点: 加1周
	}else{c('全部周数发送完成！！！')}
}
do_weeks()
//程序结束

