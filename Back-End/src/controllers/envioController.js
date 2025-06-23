
import Envio from '../models/Envio.js';

// Obtener todos los envíos
export const getEnvios = async (req, res) => {
  try {
    const envios = await Envio.findAll();
    return res.status(200).json(envios);
  } catch (error) {
    console.error('Error al obtener envíos:', error);
    return res.status(500).json({ message: 'Error al obtener envíos' });
  }
};

// Obtener un envío por ID
export const getEnvioById = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envio.findByPk(id);

    if (!envio) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    return res.status(200).json(envio);
  } catch (error) {
    console.error('Error al obtener envío por ID:', error);
    return res.status(500).json({ message: 'Error al obtener envío' });
  }
};

// Crear un nuevo envío
export const createEnvio = async (req, res) => {
  try {
    const { costo, estado, idPedido } = req.body;

    const nuevoEnvio = await Envio.create({
      costo,
      estado: estado ?? true,
      idPedido
    });

    return res.status(201).json(nuevoEnvio);
  } catch (error) {
    console.error('Error al crear envío:', error);
    return res.status(500).json({ message: 'Error al crear envío' });
  }
};

// Actualizar un envío
export const updateEnvio = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envio.findByPk(id);

    if (!envio) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    const { costo, estado, idPedido } = req.body;

    await envio.update({
      costo,
      estado,
      idPedido
    });

    return res.status(200).json(envio);
  } catch (error) {
    console.error('Error al actualizar envío:', error);
    return res.status(500).json({ message: 'Error al actualizar envío' });
  }
};

// Eliminar un envío
export const deleteEnvio = async (req, res) => {
  try {
    const { id } = req.params;
    const envio = await Envio.findByPk(id);

    if (!envio) {
      return res.status(404).json({ message: 'Envío no encontrado' });
    }

    await envio.destroy();
    return res.status(200).json({ message: 'Envío eliminado' });
  } catch (error) {
    console.error('Error al eliminar envío:', error);
    return res.status(500).json({ message: 'Error al eliminar envío' });
  }
};
