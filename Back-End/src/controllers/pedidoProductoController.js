
import PedidoProducto from '../models/PedidoProducto.js';

// Obtener todos los pedidos-productos
export const getPedidosProductos = async (req, res) => {
  try {
    const pedidosProductos = await PedidoProducto.findAll();
    return res.status(200).json(pedidosProductos);
  } catch (error) {
    console.error('Error al obtener pedidos-productos:', error);
    return res.status(500).json({ message: 'Error al obtener pedidos-productos' });
  }
};

// Obtener un pedido-producto por ID
export const getPedidoProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoProducto = await PedidoProducto.findByPk(id);

    if (!pedidoProducto) {
      return res.status(404).json({ message: 'Pedido-Producto no encontrado' });
    }

    return res.status(200).json(pedidoProducto);
  } catch (error) {
    console.error('Error al obtener pedido-producto por ID:', error);
    return res.status(500).json({ message: 'Error al obtener pedido-producto' });
  }
};

// Crear un nuevo pedido-producto
export const createPedidoProducto = async (req, res) => {
  try {
    const { cantidad, precio_unitario, idPedido, idProducto } = req.body;

    const nuevoPedidoProducto = await PedidoProducto.create({
      cantidad,
      precio_unitario,
      idPedido,
      idProducto
    });

    return res.status(201).json(nuevoPedidoProducto);
  } catch (error) {
    console.error('Error al crear pedido-producto:', error);
    return res.status(500).json({ message: 'Error al crear pedido-producto' });
  }
};

// Actualizar un pedido-producto
export const updatePedidoProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoProducto = await PedidoProducto.findByPk(id);

    if (!pedidoProducto) {
      return res.status(404).json({ message: 'Pedido-Producto no encontrado' });
    }

    const { cantidad, precio_unitario, idPedido, idProducto } = req.body;

    await pedidoProducto.update({
      cantidad,
      precio_unitario,
      idPedido,
      idProducto
    });

    return res.status(200).json(pedidoProducto);
  } catch (error) {
    console.error('Error al actualizar pedido-producto:', error);
    return res.status(500).json({ message: 'Error al actualizar pedido-producto' });
  }
};

// Eliminar un pedido-producto
export const deletePedidoProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoProducto = await PedidoProducto.findByPk(id);

    if (!pedidoProducto) {
      return res.status(404).json({ message: 'Pedido-Producto no encontrado' });
    }

    await pedidoProducto.destroy();
    return res.status(200).json({ message: 'Pedido-Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar pedido-producto:', error);
    return res.status(500).json({ message: 'Error al eliminar pedido-producto' });
  }
};
