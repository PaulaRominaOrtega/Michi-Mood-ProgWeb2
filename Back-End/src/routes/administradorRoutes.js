
import express from 'express';
import {
  getAdministradores,
  getAdministradorById,
  createAdministrador,
  updateAdministrador,
  deleteAdministrador
} from '../controllers/administradorController.js';

const router = express.Router();

// Obtener todos los administradores activos
router.get('/', getAdministradores);

// Obtener un administrador por ID
router.get('/:id', getAdministradorById);

// Crear un nuevo administrador
router.post('/', createAdministrador);

// Actualizar un administrador por ID
router.put('/:id', updateAdministrador);

// Eliminar un administrador por ID 
router.delete('/:id', deleteAdministrador);

export default router;
