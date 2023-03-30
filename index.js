import express from 'express';
import dotenv from "dotenv"
import cors from 'cors'
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import seguroRoutes from './routes/seguroRoutes.js';


const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar Cors
const whiteList = [process.env.FRONTEND_URL || 'http://127.0.0.1:5173'];

const corsOptions = {
  origin: function(origin, callback) {
    if(whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Error de Cors'));
    }
  }
}

app.use(cors(corsOptions))

const whitelist = [process.env.FRONTEND_URL || 'http://localhost:5173' || 'http://127.0.0.1:5173'];
const corsOption = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};


// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/seguros', seguroRoutes)

const PORT = process.env.PORT || 4000;

const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el port ${PORT}`);
})
