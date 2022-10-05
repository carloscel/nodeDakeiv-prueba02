const express = require('express');
const cors = require('cors')

class Server {
    constructor(){
      this.app = express();
      this.port = process.env.PORT; 
      this.middlewares();
      this.routes(); //para que se ejecute de forma automática.
    }

    middlewares(){
      //directorio público
      this.app.use(express.static('public'))

      //cors
      this.app.use(cors());

      //lectura y parseo del body
      this.app.use(express.json());
    }

    listen(){
      this.app.listen(this.port, () => {
        //recibe el puerto
        console.log(`Server running with port ${this.port}`)
      });
    }

    routes(){
      this.app.use('/usuario', require('../routes/user.routes'))

    }

}

module.exports = Server;