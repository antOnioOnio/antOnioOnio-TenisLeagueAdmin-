let config = require('../../env.json');
const mongoose = require("mongoose");
var conn;
const url = process.env.MONGO_URL || config.service.url;
const options = {useNewUrlParser: true, useUnifiedTopology: true}
class Connection {

  constructor(){
    
  }

     connectToMongo() {
        if ( this.db ) return Promise.resolve(this.db)
        return mongoose.connect(url, options)
            .then(db => console.log("db connected"))
            .then(db => this.db = db)
            .then(conn = mongoose.connection);

    }
       
    async getLeagues() {
      console.log("getleagues called" );

      return new Promise(function(resolve, reject) {

      conn.db.collection("leagues", function(err, collection){
            
                collection.find({}).toArray(function(err, data){
                  
                  if ( err){
                    reject(err);
                  }else {
                     
                  resolve(data);
                  }
                 
                })
            });
      })
    }

    async getLeagues() {
      console.log("getleagues called" );

      return new Promise(function(resolve, reject) {

      conn.db.collection("leagues", function(err, collection){
            
                collection.find({}).toArray(function(err, data){
                  
                  if ( err){
                    reject(err);
                  }else {
                     
                    resolve(data);
                  }
                 
                })
            });
      })
    }

}


Connection.conn;
Connection.db = null
Connection.leagues ={};

module.exports = { Connection }