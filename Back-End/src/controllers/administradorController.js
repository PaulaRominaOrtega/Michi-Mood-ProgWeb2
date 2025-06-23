
import Administrador from '../models/Administrador.js';

// Obtener todos los administradores activos
export const getAdministradores = async (req, res) => {
  try {
    const administradores = await Administrador.findAll({
      where: { activa: true }
    });
    return res.status(200).json(administradores);
  } catch (error) {
    console.error('Error al obtener administradores:', error);
    return res.status(500).json({ message: 'Error al obtener administradores' });
  }
};

// Obtener administrador por ID
export const getAdministradorById = async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await Administrador.findByPk(id);

    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    return res.status(200).json(administrador);
  } catch (error) {
    console.error('Error al obtener administrador por ID:', error);
    return res.status(500).json({ message: 'Error al obtener administrador' });
  }
};

// Crear nuevo administrador
export const createAdministrador = async (req, res) => {
  try {
    const { usuario, contrasena, email, activa } = req.body;
    const nuevoAdministrador = await Administrador.create({
      usuario,
      contrasena,
      email,
      activa: activa ?? true
    });

    return res.status(201).json(nuevoAdministrador);
  } catch (error) {
    console.error('Error al crear administrador:', error);
    return res.status(500).json({ message: 'Error al crear administrador' });
  }
};

// Actualizar administrador
export const updateAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await Administrador.findByPk(id);

    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    const { usuario, contrasena, email, activa } = req.body;

    await administrador.update({
      usuario,
      contrasena,
      email,
      activa
    });

    return res.status(200).json(administrador);
  } catch (error) {
    console.error('Error al actualizar administrador:', error);
    return res.status(500).json({ message: 'Error al actualizar administrador' });
  }
};

// Eliminar administrador 
export const deleteAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const administrador = await Administrador.findByPk(id);

    if (!administrador) {
      return res.status(404).json({ message: 'Administrador no encontrado' });
    }

    // Borrado lógico: marcar como inactivo
    await administrador.update({ activa: false });

    return res.status(200).json({ message: 'Administrador desactivado' });
  } catch (error) {
    console.error('Error al eliminar administrador:', error);
    return res.status(500).json({ message: 'Error al eliminar administrador' });
  }
};
