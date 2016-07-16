var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/learn_mongoose');
var Schema = mongoose.Schema;
var ChildSchema = new Schema({name:String,age:Number});

var ToySchema = new Schema({
  name:String,
  age:Number,
  children:[
    ChildSchema//此处不可替换为ToySchema，会报错
  ]
});
var Toy = mongoose.model('Toy',ToySchema);
var toy = new Toy({
  name:'Alibaba',
  age:16,
  children:[{
    name:'a li lang',
    age:4,
    children:[{//toy的children不会有children，因为ChildSchema没有定义children的Schema
      name:'sunzi'
    }]
  },{
    name:'sha po lang',
    age:3
  }]
});
console.log('toy:',toy);
toy.save(console.log);
// ChildSchema里没有children，toy对象里也没有，即使传了children
