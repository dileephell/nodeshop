
var mongoose=require('mongoose');

var adminRole=require('../admin/adminRole');

var adminAssert=require('../admin/adminAssert');

var Schema=mongoose.Schema;

var ObjectId=Schema.ObjectId;

var adminRule=module.exports= function adminRule(){};

adminRule.prototype={

_collections:{
        
         adminRule:{

ruleId:{type:Number, required:true,trim:true, default:0},

roleId:{type:Schema.ObjectId, ref:adminRole},

resourceId:{type:String, required:true, default:null },

privileges:{type:String,required:true, trim:true,default:null},

assertId:{type:Schema.ObjectId, ref:adminAssert},

roleType:{type:String, required:true,trim:true, default:null},

permission:{type:String,required:true, trim:true,default:null}
 }
}, 

_db: null
	, _schema: {}
	, _model: {}
	
	, connect: function(url){
		mongoose.connect(url);
		
		this._schema.adminRule = new Schema(this._collections.adminRule);
		this._model.adminRule = mongoose.model('adminRule', this._schema.adminRule);
		
	}
	
	, model: function(mod){	
		switch (mod){
			case 'adminRule':
				return this._model.adminRule;
		}
	}


};
