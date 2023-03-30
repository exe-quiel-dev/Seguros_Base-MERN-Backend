import express from 'express';
import {
  obtenerSeguro,
  obtenerSeguros,
  nuevoSeguro,
  editarSeguro,
  eliminarSeguro
} from '../controllers/seguroController.js';
import checkAuth from '../midleware/checkAuth.js';

const router = express.Router();

router.route('/')
  .get(checkAuth, obtenerSeguros)
  .post(checkAuth, nuevoSeguro);
  
router.route('/:id')
  .get(checkAuth, obtenerSeguro)
  .put(checkAuth, editarSeguro)
  .delete(checkAuth, eliminarSeguro)

export default router

