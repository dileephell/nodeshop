var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var ObjectId=Schema.ObjectId;

var adminAssert=new Schema({

 assertId:{type:Number,required:true,trim:true, default:0},
 
 assertType:{type:String, required:true, trim:true,default:null},
 
 assertData:{type:String, required:true, trim:true,default:null}



},{collection:'AdminAssert'});

module.exports=mongoose.model('adminAssert', adminAssert);
