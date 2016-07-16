var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/learn_mongoose');
var Schema = mongoose.Schema;
var MySchema = new Schema({
  name:{type:String, default:'Val'}
},{collection:'testtest'});
var MyModel = mongoose.model('Test',MySchema);
var object = new MyModel();
object.save(function(err,test,count){
  if(err){
    console.log(err);
  }else{
    console.log(test);
    console.log(count);
  }
});
