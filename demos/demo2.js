var mongoose = require('mongoose');
var db = mongoose.createConnection();
db.open('mongodb://localhost/learn_mongoose',function(err){
  if(err){
    console.log(err);
  }else{
    console.log('success');
    var Schema = mongoose.Schema;
    var CatSchema = new Schema({
      name: {type: String, unique: true},
      age: {type: Number}
    });
    //cats为数据库里的collection名,不指定默认为复数
    var Cat = db.model('Cat',CatSchema,'cats');
    var kitty = new Cat({
      name:'demo2 '+Date.now(),
      age:Math.ceil(Math.random()*10)
    });
    kitty.save(console.log);
  }
});
db.on('connected',function(){
  console.log('connected');
});
