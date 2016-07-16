var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToySchema = new Schema;// 先new一个空的Schema
ToySchema.add({name:String,color:String,price:Number});
var words = ToySchema.virtual('words');
console.log(words instanceof mongoose.VirtualType);
words.get(function(){
  return 'The toy\'s name is ' + this.name + ', it\'s color is ' + this.color + ', and it costs $' + this.price;
});

var Toy = mongoose.model('Toy',ToySchema);
var toy1 = new Toy({
  name:'t1',
  color:'red',
  price:'22'
});
console.log('words:',toy1.words);
