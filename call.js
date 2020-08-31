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

var username = '上帝'
var age=20

var obj = { username: 'alice' }

function setUsername(username='alice1',age=10,address) {
    this.username=username
    this.age = age
    
  //  console.log(this.username,this.age)
}

setUsername.call2(obj,'张三', 666)
console.log(username)
console.log(age)
console.log('obj:',obj)
 

