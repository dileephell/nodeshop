var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ObjectId=mongoose.ObjectId;

var searchQuery=module.exports=function searchQuery(){};

searchQuery.prototype={

_collections:{
        
        searchQuery:{
        
queryId:{type:Number, required:true, default:0},

queryText:{type:String, required:true, default:null},

numResults:{type:Number, required:true, default:0},

popularity:{type:Number, required:true, default:0},

redirect:{type:String, required:true, default:null},

synonimFor:{type:String, required:true, default:null},

storeId:{type:Number, required:true, default:0},

displayInTerms:{type:Boolean},

updatedAt:{type:Date}

}

},


_db: null
	, _schema: {}
	, _model: {}
	
	, connect: function(url){
		mongoose.connect(url);
		
		this._schema.searchQuery= new Schema(this._collections.searchQuery);
		
		this._model.searchQuery= mongoose.model('searchQuery', this._schema.searchQuery);
		
	}
	
	, model: function(mod){	
		switch (mod){
			case 'searchQuery':
				return this._model.searchQuery;
		}
	}

  };
