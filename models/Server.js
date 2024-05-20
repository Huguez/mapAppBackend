const express = require("express")
const http = require("http")
const path = require("path")
const socketIO = require("socket.io")
const Socket = require("../models/Sockets")
const cors = require("cors")

class Server {

   constructor(){
      this.app = express()
      this.server = http.createServer( this.app )
      this.io = socketIO( this.server, {} )
      this.MySocket = new Socket( this.io )

      this.port = process.env.PORT
   }

   #middleware(){
      this.app.use( express.static( path.resolve( __dirname, "../public/" )  ) );
      this.app.use( cors() )

      this.app.get( "/latest", ( req, res ) => {

         return res.json( {
            ok: true,
            latests: this.MySocket.list.last_13
         } )
      } )

   }


   start(){
      this.#middleware()

      this.server.listen( this.port, () => {
         console.log( "Running" );
      } );
   }
}

module.exports = Server