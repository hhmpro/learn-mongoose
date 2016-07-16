var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/learn_mongoose');
var Schema = mongoose.Schema;
var CatSchema = new Schema({
  name: {type: String, unique: true},
  age: {type: Number}
});
var Cat = mongoose.model('Cat',CatSchema);
var kitty = new Cat({
  name:'Zildjian '+Date.now(),
  age:Math.ceil(Math.random()*10)
});
// kitty.save(function(err,cat,row){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('meow');
//     console.log(cat);
//     console.log(row);
//   }
// });
kitty.save(console.log);
