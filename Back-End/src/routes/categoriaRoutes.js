import express from 'express';
import {
  getCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getCategoriasActivas
} from '../controllers/categoriaController.js';

const router = express.Router();

router.get('/activas', getCategoriasActivas);
router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

export default router;
