   var mongoose=require('mongoose');
  
   var Schema=mongoose.Schema;
    var ObjectId=Schema.ObjectId;
    
  var   adminUser=module.exports= function adminUser(){};
  
     adminUser.prototype={
     
        _collections:{
        
        adminUsers :{
    
    userId:{type:Number, required:true, min:5, trim:true,unique:true, default:0},
    
    firstName:{type:String, trim:true,required:true, default:null},
    
    lastName:{type:String, trim:true,required:true,  default:null},
    
    email:{type:Schema.Types.Mixed, required:true,trim:true, unique:true, lowercase:true,default:null}, 
    
    mobileNo:{type:Number, required:true, min:10,trim:true, unique:true, default:0},
    
    username:{type:Schema.Types.Mixed, required:true, trim:true,unique:true},
    
    password:{type:Schema.Types.Mixed, required:true, trim:true,unique:true},
    
    created:{type:Date,required:true, default:Date.now()},
    
    modified:{type:Date, required:true, default:Date.now()},
    
    logdate:{type:Date, required:true, default:null},
    
    lognum:{type:String, required:true,unique:true},
    
    reloadAclFlag:{type:String,required:true, unique:true},
    
    isActive:{type:Boolean, required:true, default:false},
    
    extra:{type:String, required:true, default:null}
    }
    },

    _db: null
	, _schema: {}
	, _model: {}
	
	, connect: function(url){
		mongoose.connect(url);
		
		this._schema.adminUser = new Schema(this._collections.adminUser);
		this._model.adminUser = mongoose.model('adminUser', this._schema.adminUser);
		
	}
	
	, model: function(mod){	
		switch (mod){
			case 'adminUser':
				return this._model.adminUser;
		}
	}

  };
