import express from 'express';
import {
  getPedidosProductos,
  getPedidoProductoById,
  createPedidoProducto,
  updatePedidoProducto,
  deletePedidoProducto
} from '../controllers/pedidoProductoController.js';

const router = express.Router();

router.get('/', getPedidosProductos);
router.get('/:id', getPedidoProductoById);
router.post('/', createPedidoProducto);
router.put('/:id', updatePedidoProducto);
router.delete('/:id', deletePedidoProducto);

export default router;
