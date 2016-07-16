var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToySchema = new Schema;
ToySchema.add({
  name:String
});

var schemaOfName = ToySchema.path('name');// SchemaString
console.log('schema of name:',schemaOfName);
ToySchema.path('name',Number);// 设置name的Schema为Number
var schemaOfName = ToySchema.path('name');
console.log('schema of name:',schemaOfName);// SchemaNumber
