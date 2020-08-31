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

var username = '上帝'
var age=20

var obj = { username: 'alice' }

function setUsername(username='alice1',age=10,address) {
    this.username=username
    this.age = age
    
  //  console.log(this.username,this.age)
}

setUsername('张三丰', 888)
console.log(username)
console.log(age)
console.log('obj:',obj)
 

