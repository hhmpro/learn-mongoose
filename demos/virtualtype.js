var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToySchema = new Schema;// 先new一个空的Schema
ToySchema.add({
  name:{
    first:String,
    last:String
  },
  color:String,
  price:Number
});
var fullname = ToySchema.virtual('fullname');
console.log(fullname instanceof mongoose.VirtualType);
fullname.get(function(){
  return this.name.first + ' ' + this.name.last;
});

var Toy = mongoose.model('Toy',ToySchema);
var toy1 = new Toy({
  name:{
    first:'li',
    last:'lei'
  },
  color:'red',
  price:'22'
});
console.log('fullname:',toy1.fullname);
