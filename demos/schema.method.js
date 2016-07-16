var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToySchema = new Schema;
ToySchema.method('meow',function(){
  console.log('meeeeoooooow');
});
ToySchema.method({
  purr:function(){
    console.log('purr');
  },
  scratch:function(){
    console.log('scratch')
  }
});

ToySchema.add({
  name:String,
  color:String,
  price:Number
});
var Toy = mongoose.model('Toy',ToySchema);
var toy1 = new Toy({
  name:'li lei',
  color:'red',
  price:'22'
});
toy1.meow();
toy1.purr();
toy1.scratch();
