# 一、JavaScript数据类型

1. 基本数据类型

```
number  (特殊NaN) NaN:not a number  Infinity
boolean:true,false或者可以隐式转换在true或false的类型

  能转换成false只有以下几种情况：0,空串，null,undinfed,NaN,false
 
string:用''或"",或``定义的字符

    var str='abcd'
    var str2="xyz"
    var str3=`hello,${str}`
    
null:typeof null Object  
undefined:定义未赋值和没有定义的变量类型都是undefined

null和undefined的区别：
  http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html
  
Symbol:ES6新增的数据类型，用Symbole()函数来定义,代表定义的变量值的唯一性
```



2. 引用数据类型（复杂数据类型）

```
Object,Array,Function,RegExp,String

对象类型可以添加属性
检测对象是否是对象自身的属性：hasOwnProperty

for(var key in obj) {

  if(obj.hasOwnProperty(key)) {
   
      console.log(obj[key])
}

}
```



# 二、数组：Array

1. 数组方法

```
栈方法：
	push()：尾部添加
	pop：尾部删除
	unshift：头部添加
	shift：头部删除
	splice:在数组任意的位置添加，删除和替换
	
	  删除：splice(要删除的起始下标,删除数量)
	  添加：arr.splice(要插入的起始位置,0,要添加的值)
	  
	      arr.splice(2,0,'全栈1909A')
	      
	  替换：arr.splice(要替换的志起始位置,替换的数量,替换的值)
	  
	      arr.splice(4,2,'我要去阿里')
	      
数组内置的遍历方法：
  
   forEach() ：就是for的升级版，forEach返回值undeifned
   filter():过滤,遍历满足条件的数组元素，返回新数组
   map():对原数组加工处理，得到一个新数组
   reduce():归并，将多个值归并成一个值
   findIndex() 找下标
   find() 找数组中匹配的元素
   every() 全部满足才返回true，否则为false
   some()  只要有一个满足就返回true,否则为false
   includes() 判断数组中是否含有某个值，含有返回true,不含有返回false
   flat() 扁平化 将多维数组转换成一维数组
   
      扁平化方法：
      
        1.toString实现
        
        例如:
        var arr=[5,5,5,5,[2,4,[2,[23,5],6],7],3,2,2,5]
        arr.toString().split(',').map(item=>item*1)
        
        2.用递归来实现数组的扁平化
        
        function flatFn(arr) {
          var result=[];
   				if(!(arr instanceof Array))  return;
           for(var key in arr) {
             result=result.concat(Array.isArray(arr[key]) ? flatFn(arr[key]) : arr[key] 					)
             }
 				  return result;
				}
				
			  3.flat()  //ES2019发布方法
  
   
   
  Array参考文档：
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   
```



2.类数组：

```
-- 何为类数组？

   也称伪数组 LikeArray，只能通过length获取数量，和通过下标指定具体的某个元素，但不能使用数组的API方法
   
   类数组的使用场景：获取的dom集合，arguments,...
    
-- 如何将类数组转换为数组

   1.Array.from(类数组)或 [...类数组]
   2.Array.prototype.slice.call(类数组)
   
   
   ES1.0  1997
   ES2.0  1998
   ES3.0  1999
   ES4.0  夭折
   ES5.0  2009
   ES5.1  2011
   ES6    2015,由此开始，每年都会发布一个新版本
   ES7    2016
   ES8    2017
   ......
   
   官方ECMA Script仓库更新地址：https://github.com/tc39/proposals/blob/master/finished-proposals.md
```



# 三、字符串：String

```
trim() 去除字符串左右空格

不和trim，自己封装一个trim
function trim(str) {
  var reg=/^\s+|\s+$/g
  return str.replace(reg,'')
}


String.prototype.quchukongge=function() {
  var reg=/^\s+|\s+$/g
  return this.replace(reg,'')
}

toUpperCase() 字母转大写
toLowerCase() 字母转小写
substr()  取子串   str.substr(起始位置,取几个)
substring(起始下标，结束下标)  取子串
split()  字符串转数组      join:数组转字符串
slice(起始下标，结束下标)  取子串
replace(要查找的字符串或匹配的正则，要替换的内容) 替换
indexOf() 查找，有返回下标，没有返回-1
includes()  同数组用法  有返回true,没有返回false
```



# 四、数学对象（Math）

```
Math.abs() : 取绝对值

Math.random() 随机值  范围：0~~~~1

返回做任意数值范围 start-end范围

数量=y-x+1

   x=10 ,y=20
  11 num=y-x+1
  数量=11
  起始值：10
公式：Math.floor(Math.random()*数量)+起始值

封装了一个随机函数：
// start:起始下标
// end：开始下标
function randomIndex(start,end) {

    var num=end-start+1

   return Math.floor(Math.random()*num)+start
}

Math.foor()  向下取整

Math.ceil()  向上取整

Math.round()  四舍五入取整

Math.max()   取大值

var arr=[23,3,34,23,24,-32,34,54,234,234,235,534,235,2]

Math.max.apply(Math,arr)
Math.min.apply(Math,arr)
Math.min.call(Math,...arr)
Math.max.call(Math,...arr)

Math.min()  取小值
```



# 五、this指向


```
检测是否是手机端，是的话，跳转到移动页面
try {
  if (location.search.indexOf('?pc') !== 0 && /Android|Windows Phone|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = 'https://xw.qq.com?f=qqcom';
  }
} catch (e) {}
```

- this的使用场景

```
*/
//1.直接调用函数 this即window
//console.log(this===window)

/*
function Fn() {

   console.log('Fn:',this)

   //this.name='1909A'
}
//Fn()

//2. new 函数，this即为当前构造函数实例化对象
//var f1=new Fn()

//3.函数属于对象

/*
var obj={
    name:'1909A',
    Fn:function() {

        var hehe=function() {

            console.log('this===window:',this===window)
             console.log('this===obj:',this===obj)
             //console.log('this===Fn:',this===Fn)
        }

       hehe()


    }

}



obj.Fn();

*/

//4.定时器上的this
/*
var obj={
    name:'1909A',
    Fn:function() {

       setTimeout(function() {

           console.log('this===window:',this===window)
           console.log('this===obj:',this===obj)

       },0)

    }

}

obj.Fn();

*/

//5.DOM中的this

var btn=document.querySelector('#btn')
btn.onclick=function() {
  // let _this=this;
   setTimeout(()=> {

        console.log(this===btn)
   },0)

}

```

> 总结：this通常是谁调用，this指向谁，难道真的是这样吗？？
>
> 

```
var name='ok'

var obj={
   name:'alice',
   getName:function() {

     console.log(this.name)

  }
 
}

(false || obj.getName)()
```



---

# 六、call,apply,bind

- call,apply,bind都是用于改变this指向的

- 区别：

    - 传参不同

        - call用逗号分隔的形式传参

        ```
        函数名.call(目标对象,参数1,参数2,...参数n)
        
        例如：getName.call(obj,'王五',25,'北京')
        ```

        - apply参数用数组的形式传递

        ```
        函数名.apply(目标对象,[参数1,参数2,...参数n])
        例如：getName.apply(obj,['王五11',25,'上海'])
        ```

        - bind用逗号形式传参

        ```
        getName.bind(obj,'王五11',25,'上海')()
        或
        getName.bind(obj)('王五11',25,'上海')
        ```

    - 函数是否被执行

    ```
    cal和apply是直接调用函数
    bind是返回函数本身，如果要执行，必须再后面再加()调用
    
      getName.bind(obj)()
    ```

- call,apply实现原理

    - call的实现原理（不用call,自己手动模拟实现一个call的功能）
        - call是基于函数实现的
        - 给作用的目标对象添加一个临时函数，处理赋值操作
        - 接收参数处理
        - 最后再删除这个临时函数

    

    > 实例化对象=new 构造函数()  //其中构造函数也称为类，一个类可以生成多个实例化对象

     ```
    var f1=new Function() // 其中的构造函数中this===f1 永远相等
    var p1=new Person() //其中的构造函数中this===p1 永远相等
     ```

    ```
    //call模拟实现原理代码：
    Function.prototype.call2 = function (context) {
        //目标对象
        context = context || window;
    
        //this===实例化的函数,函数本质上也是对象
    
        //给context添加一个临时函数
        context.fn = this;
    
        //接收参数处理  arguments
        console.log('arguments:',arguments)
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
    
           // ["arguments[0]", "arguments[1]", "arguments[2]"]
            args.push('arguments['+i+']')
           // args.push(arguments[i])
        }
    
         //传参执行context.fn()函数
         eval('context.fn(' + args + ')')
        
        
        //删除临时函数
        delete context.fn
    
        
    }
    
    ```

    

    - apply实现原理

    ```
    Function.prototype.apply2 = function (context,arr) {
        //目标对象
        context = context || window;
    
        //this===实例化的函数,函数本质上也是对象
    
        //给context添加一个临时函数
        context.fn = this;
    
        if (!arr) {
            context.fn()
        } else {
            //接收参数处理  arguments
            var args = [];
            for (var i = 0; i < arr.length; i++) {
    
            // ["arguments[0]", "arguments[1]", "arguments[2]"]
                args.push('arr['+i+']')
            // args.push(arguments[i])
            }
    
            //传参执行context.fn()函数
            eval('context.fn(' + args + ')')
        
        
         }
    
        //删除临时函数
        delete context.fn
    }
    
    ```

    

    - bind实现原理

# 七、new的实现原理

- new的特点
    - new 一个构造函数，会自动reutrn一个实例化对象
    - new完的实例化对象____proto___自动指向构造函数的prototype
    - new构造函数传参自动赋值给当前实例化对象
- 具体如何实现new呢



# 八、防抖和节流

- 防抖

    - 在固定的时间内没有触发事件，会在固定时间结束后触发，如果固定时间内触发事件了，会在延长固定时间再触发
    - 防抖主要利用定时器实现

    ```
    //用定时器实现防抖
    function debounce(func,wait) {
        var timer=null;
        return function() {
        //保存当前调用的dom对象
         var _this=this;
         //保存事件对象
         var args=arguments;
         clearTimeout(timer)
         timer=setTimeout(function() {
             func.apply(_this,args)
         },wait)
        }
    
    }
    
    ```

    

- 节流：

    - 无论在固定时间内是否有事件触发，都会按照固定时间规律触发

    - 具体实现有两种方法

        - 第一种：时间戳

        ```
        //时间戳版本实现节流
        function throttle(func,wait) {
            //定义初始时间
            var oldTime=0;
        
            return function() {
                var _this=this;
                var args=arguments;
        
                //当前时间戳
                var newTime=+new Date();
        
                //判断用当前时间减去旧的时间，如果大于wait指定的时间就会触发
                if(newTime-oldTime>wait) {
                    //执行触发的函数
                    func.apply(_this,args)
                    //将旧时间更新
                    oldTime=newTime;
                }
        
            }
        
        ```

        

        - 第二种：定时器

        ```
        //时间戳版本实现节流
        function throttle(func,wait) {
            var timer=null;
        
            return function() {
                var _this=this;
                var args=arguments;
               if(!timer) {
                    timer=setTimeout(function() {
                        timer=null;
                        func.apply(_this,args)
                    },wait)
               }
            }
        }
        ```



> 目前市面主流工具函数库：lodash已经提供了全面的工具方法
>
> npm install lodash 

>  import _ from 'lodash'









# 九、闭包

# 十、原型链

# 十一、JavaScript继承

