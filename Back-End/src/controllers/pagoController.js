// src/controllers/pagoController.js

import Pago from '../models/Pago.js';

// Obtener todos los pagos
export const getPagos = async (req, res) => {
  try {
    const pagos = await Pago.findAll();
    return res.status(200).json(pagos);
  } catch (error) {
    console.error('Error al obtener pagos:', error);
    return res.status(500).json({ message: 'Error al obtener pagos' });
  }
};

// Obtener un pago por ID
export const getPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const pago = await Pago.findByPk(id);

    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }

    return res.status(200).json(pago);
  } catch (error) {
    console.error('Error al obtener pago por ID:', error);
    return res.status(500).json({ message: 'Error al obtener pago' });
  }
};

// Crear un nuevo pago
export const createPago = async (req, res) => {
  try {
    const { monto, estado, fecha, medio_pago, idPedido } = req.body;

    const nuevoPago = await Pago.create({
      monto,
      estado: estado ?? true,
      fecha: fecha ?? new Date(),
      medio_pago,
      idPedido
    });

    return res.status(201).json(nuevoPago);
  } catch (error) {
    console.error('Error al crear pago:', error);
    return res.status(500).json({ message: 'Error al crear pago' });
  }
};

// Actualizar un pago
export const updatePago = async (req, res) => {
  try {
    const { id } = req.params;
    const pago = await Pago.findByPk(id);

    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }

    const { monto, estado, fecha, medio_pago, idPedido } = req.body;

    await pago.update({
      monto,
      estado,
      fecha,
      medio_pago,
      idPedido
    });

    return res.status(200).json(pago);
  } catch (error) {
    console.error('Error al actualizar pago:', error);
    return res.status(500).json({ message: 'Error al actualizar pago' });
  }
};

// Eliminar un pago
export const deletePago = async (req, res) => {
  try {
    const { id } = req.params;
    const pago = await Pago.findByPk(id);

    if (!pago) {
      return res.status(404).json({ message: 'Pago no encontrado' });
    }

    await pago.destroy();
    return res.status(200).json({ message: 'Pago eliminado' });
  } catch (error) {
    console.error('Error al eliminar pago:', error);
    return res.status(500).json({ message: 'Error al eliminar pago' });
  }
};
