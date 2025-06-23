// src/controllers/direccionController.js

import Direccion from '../models/Direccion.js';

// Obtener todas las direcciones
export const getDirecciones = async (req, res) => {
  try {
    const direcciones = await Direccion.findAll();
    return res.status(200).json(direcciones);
  } catch (error) {
    console.error('Error al obtener direcciones:', error);
    return res.status(500).json({ message: 'Error al obtener direcciones' });
  }
};

// Obtener una dirección por ID
export const getDireccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);

    if (!direccion) {
      return res.status(404).json({ message: 'Dirección no encontrada' });
    }

    return res.status(200).json(direccion);
  } catch (error) {
    console.error('Error al obtener dirección por ID:', error);
    return res.status(500).json({ message: 'Error al obtener dirección' });
  }
};

// Crear una nueva dirección
export const createDireccion = async (req, res) => {
  try {
    const {
      calle,
      numeracion,
      ciudad,
      provincia,
      codigo_postal,
      idCliente
    } = req.body;

    const nuevaDireccion = await Direccion.create({
      calle,
      numeracion,
      ciudad,
      provincia,
      codigo_postal,
      idCliente
    });

    return res.status(201).json(nuevaDireccion);
  } catch (error) {
    console.error('Error al crear dirección:', error);
    return res.status(500).json({ message: 'Error al crear dirección' });
  }
};

// Actualizar una dirección
export const updateDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);

    if (!direccion) {
      return res.status(404).json({ message: 'Dirección no encontrada' });
    }

    const {
      calle,
      numeracion,
      ciudad,
      provincia,
      codigo_postal,
      idCliente
    } = req.body;

    await direccion.update({
      calle,
      numeracion,
      ciudad,
      provincia,
      codigo_postal,
      idCliente
    });

    return res.status(200).json(direccion);
  } catch (error) {
    console.error('Error al actualizar dirección:', error);
    return res.status(500).json({ message: 'Error al actualizar dirección' });
  }
};

// Eliminar una dirección
export const deleteDireccion = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findByPk(id);

    if (!direccion) {
      return res.status(404).json({ message: 'Dirección no encontrada' });
    }

    await direccion.destroy(); // Eliminación física
    return res.status(200).json({ message: 'Dirección eliminada' });
  } catch (error) {
    console.error('Error al eliminar dirección:', error);
    return res.status(500).json({ message: 'Error al eliminar dirección' });
  }
};
