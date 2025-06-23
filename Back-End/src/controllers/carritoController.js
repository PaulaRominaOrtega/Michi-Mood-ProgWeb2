import Carrito from '../models/Carrito.js';

// Obtener todos los carritos
export const getCarritos = async (req, res) => {
  try {
    const carritos = await Carrito.findAll();
    return res.status(200).json(carritos);
  } catch (error) {
    console.error('Error al obtener carritos:', error);
    return res.status(500).json({ message: 'Error al obtener carritos' });
  }
};

// Obtener carrito por ID
export const getCarritoById = async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await Carrito.findByPk(id);

    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    return res.status(200).json(carrito);
  } catch (error) {
    console.error('Error al obtener carrito por ID:', error);
    return res.status(500).json({ message: 'Error al obtener carrito' });
  }
};

// Crear nuevo carrito
export const createCarrito = async (req, res) => {
  try {
    const { fecha, idCliente } = req.body;

    const nuevoCarrito = await Carrito.create({
      fecha: fecha ?? new Date(),
      idCliente
    });

    return res.status(201).json(nuevoCarrito);
  } catch (error) {
    console.error('Error al crear carrito:', error);
    return res.status(500).json({ message: 'Error al crear carrito' });
  }
};

// Actualizar carrito
export const updateCarrito = async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await Carrito.findByPk(id);

    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    const { fecha, idCliente } = req.body;

    await carrito.update({
      fecha,
      idCliente
    });

    return res.status(200).json(carrito);
  } catch (error) {
    console.error('Error al actualizar carrito:', error);
    return res.status(500).json({ message: 'Error al actualizar carrito' });
  }
};

// Eliminar carrito 
export const deleteCarrito = async (req, res) => {
  try {
    const { id } = req.params;
    const carrito = await Carrito.findByPk(id);

    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    await carrito.destroy(); // Eliminación física
    return res.status(200).json({ message: 'Carrito eliminado' });
  } catch (error) {
    console.error('Error al eliminar carrito:', error);
    return res.status(500).json({ message: 'Error al eliminar carrito' });
  }
};
