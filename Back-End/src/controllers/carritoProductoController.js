// src/controllers/carritoProductoController.js

import CarritoProducto from '../models/CarritoProducto.js';

// Obtener todos los registros de carritos-productos
export const getCarritosProductos = async (req, res) => {
  try {
    const registros = await CarritoProducto.findAll();
    return res.status(200).json(registros);
  } catch (error) {
    console.error('Error al obtener carritos-productos:', error);
    return res.status(500).json({ message: 'Error al obtener carritos-productos' });
  }
};

// Obtener un registro por ID
export const getCarritoProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await CarritoProducto.findByPk(id);

    if (!registro) {
      return res.status(404).json({ message: 'Carrito-producto no encontrado' });
    }

    return res.status(200).json(registro);
  } catch (error) {
    console.error('Error al obtener carrito-producto por ID:', error);
    return res.status(500).json({ message: 'Error al obtener carrito-producto' });
  }
};

// Crear nuevo registro
export const createCarritoProducto = async (req, res) => {
  try {
    const { cantidad, idProducto, idCarrito } = req.body;

    const nuevoRegistro = await CarritoProducto.create({
      cantidad,
      idProducto,
      idCarrito
    });

    return res.status(201).json(nuevoRegistro);
  } catch (error) {
    console.error('Error al crear carrito-producto:', error);
    return res.status(500).json({ message: 'Error al crear carrito-producto' });
  }
};

// Actualizar registro
export const updateCarritoProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await CarritoProducto.findByPk(id);

    if (!registro) {
      return res.status(404).json({ message: 'Carrito-producto no encontrado' });
    }

    const { cantidad, idProducto, idCarrito } = req.body;

    await registro.update({
      cantidad,
      idProducto,
      idCarrito
    });

    return res.status(200).json(registro);
  } catch (error) {
    console.error('Error al actualizar carrito-producto:', error);
    return res.status(500).json({ message: 'Error al actualizar carrito-producto' });
  }
};

// Eliminar registro
export const deleteCarritoProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await CarritoProducto.findByPk(id);

    if (!registro) {
      return res.status(404).json({ message: 'Carrito-producto no encontrado' });
    }

    await registro.destroy(); // Eliminación física
    return res.status(200).json({ message: 'Registro eliminado' });
  } catch (error) {
    console.error('Error al eliminar carrito-producto:', error);
    return res.status(500).json({ message: 'Error al eliminar carrito-producto' });
  }
};
