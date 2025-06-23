import { Router } from 'express';
import {
  getCupones,
  getCuponById,
  createCupon,
  updateCupon,
  deleteCupon,
  validarCupon,
  validarCuponDesdeBody
} from '../controllers/cuponDescuentoController.js';

const router = Router();
router.get('/', getCupones);
router.get('/:id', getCuponById);
router.post('/', createCupon);
router.put('/:id', updateCupon);
router.delete('/:id', deleteCupon);
router.get('/validar/:codigoCupon', validarCupon);
router.post('/validar', validarCuponDesdeBody);

export default router;
