
import Cliente from '../models/Cliente.js';

// Obtener todos los clientes
export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    return res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    return res.status(500).json({ message: 'Error al obtener clientes' });
  }
};

// Obtener un cliente por ID
export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    return res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error);
    return res.status(500).json({ message: 'Error al obtener cliente' });
  }
};

// Crear un nuevo cliente
export const createCliente = async (req, res) => {
  try {
    const { nombre, telefono, email, contrasena } = req.body;

    const nuevoCliente = await Cliente.create({
      nombre,
      telefono,
      email,
      contrasena
    });

    return res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    return res.status(500).json({ message: 'Error al crear cliente' });
  }
};

// Actualizar un cliente
export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const { nombre, telefono, email, contrasena } = req.body;

    await cliente.update({
      nombre,
      telefono,
      email,
      contrasena
    });

    return res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    return res.status(500).json({ message: 'Error al actualizar cliente' });
  }
};

// Eliminar un cliente
export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await cliente.destroy(); // Eliminación física
    return res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    return res.status(500).json({ message: 'Error al eliminar cliente' });
  }
};
