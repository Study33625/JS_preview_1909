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

```
//模拟new的实现
function ObjectFatory() {
    //arguments[0]
   
   //创建一个要返回的对象
   var obj=new Object()

   //获取构造函数
   //var Constructor=arguments[0]
   var Constructor=[].shift.apply(arguments)

   //将obj对象____proto___自动指向构造函数的prototype
   obj.__proto__=Constructor.prototype;

   //此时此刻arguments里面只能[张三,20]
   Constructor.apply(obj,arguments)

   return obj;
   
}
```





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

> 面试时说话让面试官感觉你有经验，面试时要带点匪气！

- 闭包是由什么构成

```
闭包=函数+词法作用域

词法作用域：即以变量声明定义的位置为参照，如果当前位置没有定义，就会访问父级定义的位置

广义上闭包：
var a=1000;
function fn1() {

   alert(a)

}

fn1()

平时工作中用到的闭包狭义上闭包：
1.函数内嵌套函数
2.子函数引用了父函数的相关变量

特点：长期驻留内存
```

 

- 闭包应用场景和实现

```
//求和
function makeAdd(x) {


    return function(y) {

     return x+y

   }

}
//设置字号
function setFontSize(size) {


   return function() {

     document.body.style.fontSize=size+"px"

   }

}


//循环表单


function makeHelp(help) {
    
    return function() {
       console.log(help)
        document.querySelector('.help').innerHTML=help

    }
 }


function init() {
    var userInfo=[
        {id:'username',helpText:'请输入用户名'},
        {id:'email',helpText:'请输入邮箱'},
        {id:'address',helpText:'请输入地址'},
    ]

    //动态绑定onfocus事件
    for(var i=0;i<userInfo.length;i++) {
        var item=userInfo[i];
        document.getElementById(item.id).onfocus=makeHelp(item.helpText)

    }

}
init()

//封装组件或插件
var Counter=(function() {

   //私有变量
   var index=0;

   //私有方法
   var add=function() {
       return index++;
   }

   var jian=function() {

   }


   return {
       //暴露出去供用户的方法
       increment:function() {
           add()
       },
       getValue:function() {
           return index;
       }
   }


})()

```

- 闭包优点和缺点

```
1.长期驻留内存，可以缓存数据
2.可以隔离作用域，避免全局污染
```



> 如何回答的一个技术记汇，或你对xxxx的理解
>
> 例如：你说一下对闭包的理解
>
> 答：1.xxx是什么
>
> ​       2.应用场景
>
> ​       3.优缺点
>
> ​      4.具体实现
>
> ​     5.还有没有更好的解决方案！





# 十、原型链

- 原型链是JS特有的一种继承机制
- 原型链会涉及到___proto___,prototype
- 原型链的顶端就是null
- 应用场景：继承
- 优点：把相同或类似的方法写在原型上，方便实例化对象复用
- 缺点：不好理解，通常只前端人才理解
- ES6推出class extends来实现继承



# 十一、JavaScript继承

- 继承是面向对象开发思想的特性之一

- 面试对象的三大特点：封装，继承，多态

- 继承主要分ES5和ES6的继承方式

    - ES5的继承--主要通过函数实现类

        - 原型链继承

        ```
        //创建一个父类
        function Parent() {
            this.name='jack'
        
        }
        
        Parent.prototype.getName=function() {
            return this.name;
        }
        
        
        
        
        //创建一个子类
        function Child() {
        
            
        }
        
        //子类的原型等于父类的实例化对象
        Child.prototype=new Parent();
        
        var c1=new Child()
        ```

        > 缺点：
        >
        >   1.不能传参
        >
        > 2. 没有解决对象引用问题

        - 借用构造函数继承

        ```
        //创建一个父类
        function Parent(name) {
            this.name=name ||'jack'
            this.colors=['red','green','blue']
        
        }
        
        Parent.prototype.getName=function() {
            return this.name;
        }
        
        //创建一个子类
        function Child(name) {
            //借用父类来承继实例属性，但不能继承父类方法
            Person.call(this,name)
            
        }
        ```

        > 缺点：不能继承父类方法

        

        - 组合继承=原型链继承+借用构造函数继承

        ```
        //创建一个父类
        function Parent(name) {
            this.name=name ||'jack'
            this.colors=['red','green','blue']
        
        }
        
        Parent.prototype.getName=function() {
            return this.name;
        }
        
        var p1=new Parent();
        p1.getName();
        
        
        //创建一个子类
        function Child(name) {
        
            Parent.call(this,name)
            
        }
        
        Child.prototype=new Parent();
        
        var c1=new Child()
        c1.getName()
        
        ```

        

        > 优点：即能继承父类的原型方法，也能传递参数属性

        

    - ES6继承

        - 通过class,extends,super实现 //继承必须要写super

    ```
    //创建一个父类
    class Parent {
       constructor(name) {
            this.name=name ||'jack'
            this.colors=['red','green','blue']
       }
    
      getName() {
        return this.name;
    }
    
    }
    
    
    //创建一个子类
     class Child extends Parent {
    
          constructor(name) {
              super(name)  //super就是父类Parent
          }
    
          getValue() {
    
    
          }
        
    }
    ```
# ECMAScript6/7/8/..复习

1. javaScript组成：

```
包括：ECMAScript,DOM,BOM

1.ECMAScript:javascript核心语法，不依赖平台

 例如：定义变量，if,switch,for,数组Api,字符串API,正则Api.....

2.DOM:(Document Object Model)针对浏览器标签操作 例如：获取id，获取类名，获取标签名
   
   注：操作真实DOM，引起重绘和回流-->才引出虚拟DOM
   
      重绘：主要指页面颜色的改变，不影响DOM的空间变化 color,background
      回流：指页面元素的尺寸(width,padding,height,margin)，位置的变化:left,top,bottom,right等
      
        tranform:translateX(300px)
      
      重绘未必引起回流，但回流一定引起重绘
   
3.BOM:(Browser Object Model)主要针对浏览器相关API的操作

   history: history.go(),history.back() pusState,popState,replaceState
   
   navigator:跟浏览器系统信息相关  
   
       navigator.userAgent
       
     参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator
   location:主要获取浏览器地址栏相关的信息
   
   location.search
   location.href
   location.hash
   
    参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Location
   
     
```

2. ECMA6/7/8...新增特性

  ES6 ES2015  .....  ES11 ES2020

了解ES6/7/8/9/最新进展：https://github.com/tc39/proposals/blob/master/finished-proposals.md

- let和const: 重点

    ```
    let 定义变量
    const 定义常量
    ```

>  面试官：
> 1.你说一下let和var的区别

 ```
相同点：都是定义变量
 区别：
     1.是否有变量提升   var有变量提升，let没有
     2.是否能重复定义   var允许重复定义变量，let不允许重复定义
     3.是否有块级作用域  { }
         全局作用域：在函数外部定义的范围
         局部作用域：在函数内部定义的范围
         块级作用域：在{ }大括号中定义范围
 ```



>  2.你说一下let和const的区别

```
let 定义变量
const 定义常量,是不能修改的，如果要修改，将常量定义成对象的形式，这样，就可以给对象中的属性进行修改
```



- symbol：是ES6新增的基本数据类型

```
number,string,boolean,null,undefined,symbol(ES6新增)

symbol:定义的值是唯一性

两个symbol类型的值永远不等

例如：
var s1=Symbol()
var s2=Symbol()
s1=== s2
 false
```

- 扩展运算符(  ... )

```
扩展运算符（也称展开操作符）两层作用：

1.将数组转换成数据列表 [a,b,c,d]--->a,b,c,d
例如：
var arr1=[666,777,888]
var arr2=['hello','vuejs']
var result=[...arr1,...arr2]

2.将数据列表转换成数组 a,b,c,d--->[a,b,c,d]

3.展开对象
var result={...obj1,...obj2}
或
result=Object.assign({},obj1,obj2)

例如：
function sum1(str,...args) {
  var result=0;
  for(var i=0;i<args.length;i++) {
    

    result+=args[i]

  }

   return result;
}

sum1('请输入',20,30,40)
```



- class类

```
定义一个类：
class Person {

   constructor(a,b) {
     //构造器
     this.属性=a

   }

  方法1() {}
  方法2() {}
  方法3() {}

}

继承一个类：

class Child extends Person {

   constructor(a,b) {
     super()  //代表父类
     //构造器
     this.属性=a

   }

  方法1() {}
  方法2() {}
  方法3() {}

}
```



- set和map:

```
set:理解成是一个不重复的数组 

将set类型的数据转换成数组：
var s=new Set()
Array.from(s)
或[...s]

var s=new Set()
s.add()
s.has()
s.delete()
s.size

例如：数组去重：
var arr=[3,34,23,2,2,23,23,3,34,34,34,45]

[...new Set(arr)]

map:理解成是一个对象,增强了对象key的数据类型，以前只能是字符串，现在对象的属性可以是做任意的数据类型！
{
  "name":'jack',
  '10':'abc',
  'undefined':999
}

var m1=new Map()
m1.set(属性名,值) //设置
m1.get(属性名)  //获取
m1.delete(属性名)  //删除


//遍历Map类型获取所有值
for(var [key,value] of m1) {

  console.log(key)
  console.log(value)
}
```

-  Promise：重点

```
1.用于处理回调地狱的异步解决方案
具体实现：
function waiting() {

    return new Promise((resolve,reject)=>{
    
             setTimeout(function() {
      
                //console.log(2)
                reject('哈哈')
    
            },2000)      

    })

 }


waiting().then(res=>{
   console.log(1)
   console.log('res:',res)
    console.log(3)

}).catch(error=>{

   console.log('error:',error)

})

.then
.catch
.race
.finally
Promise.all([waiting(),waiting2(),waiting3()])
   .then(res=>{


   }).catch(res=>{

})
```



- async/await(ES2017) 重点

    ```
    串行执行：必须先执行第一个异步，将第一个异步的结果返回传递给第二个异步函数，再执行第二个异步的操作过程
    
    //第一个函数
    function waiting() {
        return new Promise((resolve,reject)=>{
              //我这里只是用setTimeout来模拟axios,
                 setTimeout(function() {
                    resolve('第二个接口返回')
    
                },2000)
    
            
        })
    
     }
    
    
    //第二个函数
    function waiting2() {
        return new Promise((resolve,reject)=>{
              //我这里只是用setTimeout来模拟axios,
                 setTimeout(function() {
                    reject('第二接口返回')
    
                },2000)
    
            
        })
    
     }
    
    
    async function handleFn() {
       console.log(1)
       
       //串行执行，先等待第一个函数返回
        let res=await waiting()
        console.log('res:',res)
        
        //再等待第二个函数返回
        let res2=await waiting2(res)
        console.log(res2)
     }
    
    并行：两个接口同时执行
    
    function waiting() {
        return new Promise((resolve,reject)=>{
              //我这里只是用setTimeout来模拟axios,
                 setTimeout(function() {
                    resolve('第二个接口返回')
    
                },2000)
         
        })
    
     }
    
    
    function waiting2() {
        return new Promise((resolve,reject)=>{
              //我这里只是用setTimeout来模拟axios,
                 setTimeout(function() {
                    reject('第二接口返回')
    
                },2000)
         
        })
    
     }
    
    async function handleFn() {
       console.log(1)
        //并发执行，waiting(),waiting2()两个接口都成功返回才返回结果
        let res=await Promise.all([waiting(),waiting2()])
         console.log('res:',res)
         console.log('end')
     }
    
     handleFn().catch(res=>{
    
         console.log('error:',res)
     })
    ```

    

- 解构赋值

- 箭头函数 重点

- module(export,import)

- generator

- 模板字符串

- for of

- ......

    

>  ES2015+如果正常跑在浏览器上，都要通过babel去编译转换成ES5才能正常在浏览器运行













    

