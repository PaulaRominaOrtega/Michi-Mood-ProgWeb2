import Producto from '../models/Producto.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    return res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return res.status(500).json({ message: 'Error al obtener productos' });
  }
};

// Obtener un producto por ID
export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.status(200).json(producto);
  } catch (error) {
    console.error('Error al obtener producto por ID:', error);
    return res.status(500).json({ message: 'Error al obtener producto' });
  }
};

// Crear un nuevo producto
export const createProducto = async (req, res) => {
  try {
    const {
      nombre,
      precio,
      descripcion,
      stock,
      imagen,
      oferta,
      descuento,
      idAdministrador,
      idCategoria
    } = req.body;

    // Validaciones
    if (typeof oferta !== 'boolean') {
      return res.status(400).json({ message: 'El campo "oferta" debe ser booleano (true o false).' });
    }

    if (!Number.isInteger(descuento) || descuento < 0 || descuento > 100) {
      return res.status(400).json({ message: 'El campo "descuento" debe ser un número entero entre 0 y 100.' });
    }

    const nuevoProducto = await Producto.create({
      nombre,
      precio,
      descripcion,
      stock,
      imagen,
      oferta,
      descuento,
      idAdministrador,
      idCategoria
    });

    return res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    return res.status(500).json({ message: 'Error al crear producto' });
  }
};

// Actualizar un producto
export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    const {
      nombre,
      precio,
      descripcion,
      stock,
      imagen,
      oferta,
      descuento,
      idAdministrador,
      idCategoria
    } = req.body;

    // Validaciones
    if (typeof oferta !== 'boolean') {
      return res.status(400).json({ message: 'El campo "oferta" debe ser booleano (true o false).' });
    }

    if (!Number.isInteger(descuento) || descuento < 0 || descuento > 100) {
      return res.status(400).json({ message: 'El campo "descuento" debe ser un número entero entre 0 y 100.' });
    }

    await producto.update({
      nombre,
      precio,
      descripcion,
      stock,
      imagen,
      oferta,
      descuento,
      idAdministrador,
      idCategoria
    });

    return res.status(200).json(producto);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return res.status(500).json({ message: 'Error al actualizar producto' });
  }
};

// Eliminar un producto
export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await producto.destroy();
    return res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return res.status(500).json({ message: 'Error al eliminar producto' });
  }
};
