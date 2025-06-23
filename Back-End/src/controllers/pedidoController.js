
import Pedido from '../models/Pedido.js';

// Obtener todos los pedidos
export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    return res.status(200).json(pedidos);
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    return res.status(500).json({ message: 'Error al obtener pedidos' });
  }
};

// Obtener un pedido por ID
export const getPedidoById = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    return res.status(200).json(pedido);
  } catch (error) {
    console.error('Error al obtener pedido por ID:', error);
    return res.status(500).json({ message: 'Error al obtener pedido' });
  }
};

// Crear un nuevo pedido
export const createPedido = async (req, res) => {
  try {
    const { fecha, total, estado, idCliente } = req.body;

    const nuevoPedido = await Pedido.create({
      fecha: fecha ?? new Date(),
      total,
      estado: estado ?? true,
      idCliente
    });

    return res.status(201).json(nuevoPedido);
  } catch (error) {
    console.error('Error al crear pedido:', error);
    return res.status(500).json({ message: 'Error al crear pedido' });
  }
};

// Actualizar un pedido
export const updatePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    const { fecha, total, estado, idCliente } = req.body;

    await pedido.update({
      fecha,
      total,
      estado,
      idCliente
    });

    return res.status(200).json(pedido);
  } catch (error) {
    console.error('Error al actualizar pedido:', error);
    return res.status(500).json({ message: 'Error al actualizar pedido' });
  }
};

// Eliminar un pedido
export const deletePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);

    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }

    await pedido.destroy();
    return res.status(200).json({ message: 'Pedido eliminado' });
  } catch (error) {
    console.error('Error al eliminar pedido:', error);
    return res.status(500).json({ message: 'Error al eliminar pedido' });
  }
};
