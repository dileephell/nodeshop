var adminUser=require('../admin/adminUser');

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var ObjectId=Schema.ObjectId;
var adminRole=module.exports=function adminRole(){};

 adminRole.prototype={
 
 _collections:{
        
        adminRole :{

roleId:{type:Number, required:true, trim: true,default:0},

parentId:{type:Number, Required:true, trim:true,default:0},

treeLevel:{type:Number,Required:true, trim:true,default:0},

sortOrder:{type:Number,Required:true, trim:true,default:0},

roleType:{type:String,Required:true, trim:true,default:null},

userId:{type:Schema.ObjectId, ref:adminUser},

roleName:{type:String,Required:true, trim:true,default:null}
}

},


 _db: null
	, _schema: {}
	, _model: {}
	
	, connect: function(url){
		mongoose.connect(url);
		
		this._schema.adminRole = new Schema(this._collections.adminRole);
		this._model.adminRole = mongoose.model('adminRole', this._schema.adminRole);
		
	}
	
	, model: function(mod){	
		switch (mod){
			case 'adminRole':
				return this._model.adminRole;
		}
	}

  };
