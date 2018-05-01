	//由于XMLHttpReqeust对象 异步请求服务器的代码，
    		//复用性非常高，封装一个异步请求服务器的插件
    		// 封装插件： 首先提取重复使用公共代码，变换的部分以参数的形式暴露出来
    		// 参数：（变换的部分）
    		// 1、请求方式 type: get  post
    		// 2、请对地址 url: ...
    		// 3、发送数据 data:  
    		// 4、数据的渲染方式callback:
    		// 
    		// 


    		//命名空间 避免全局污染
    		// var itcast={
    		// 	ajax:function(type,url,data,callback){ 
    		// 	//这种传参方式  要求 形参和实参的顺序必须一一对应
    		// 	//解决方法：以对象的形式传递参数
    		// 		callback();
    		// 	}
    		// }


    		// itcast.ajax('get','01.php', function(){alert(11);} , {name:'zs',age:18});

    		var $={
    			ajax:function(obj){ 
    				//的、判断调用者传递的参数是否合理
    				var type=obj.type||'get'; // 默认取值为get
    				var url=obj.url||location.href; //默认请求当前页面
    				var callback=obj.callback;
    				var data=this.setParam(obj.data);  //将调用传递的对象 转成  name=zs&age=18 字符串


    				//实例化XMLHttpRequesr对象
    				var xhr=new XMLHttpRequest();

    				if(type=='get'){
    					url=url+'?'+data;
    					data=null;
    				}
    				//请求行
    				xhr.open(type,url);
    				//请求头
    				if(type=='post'){
    					xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    				}
    				//请求主体
    				xhr.send(data);

    				//监听服务器的响应
    				xhr.onreadystatechange=function(){
    					if(xhr.readyState==4&&xhr.status==200){
    						var r=xhr.responseText; //假设服务器返回数据是json格式
    						r=JSON.parse(r); //转成了js对象
    						callback&&callback(r); //把数据传递给callback进行渲染
    					}
    				}

    			},
    			// 把调用者传的过来的对象{name:'zs',age:18} , 转成 name=zs&age=18 字符串
    			setParam:function(data){
    				if(typeof data=='object'){
    					var str='';
    					for(var key in data){
    						str+=key+'='+data[key]+'&';
    					}

    					str=str.slice(0,str.length-1);
    					console.log(str);
    					return str;
    				}
    			}

    		}