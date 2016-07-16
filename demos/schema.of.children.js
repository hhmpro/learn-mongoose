var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChildSchema = new Schema({name:String});

var ToySchema = new Schema({name:String,age:Number,children:[ChildSchema]});
var Toy = mongoose.model('Toy',ToySchema);
var toy = new Toy({
  name:'Alibaba',
  age:16,
  children:[{
    name:'a li lang'
  },{
    name:'sha po lang'
  }]
});
console.log('toy:',toy);
