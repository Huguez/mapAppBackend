
class Socket {

   constructor( io ) {
      this.io = io

      this.socketEvents()
   }

   socketEvents() {
      this.io.on('connection', ( socket ) => { 
         
         // sent --------------------------------------------------         

         // received -----------------------------------------------

      } );
   }
}


module.exports = Socket