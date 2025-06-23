
import Categoria from '../models/Categoria.js';


//obtener categorias activas 
export const getCategoriasActivas = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      where: { activa: true }
    });
    return res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return res.status(500).json({ message: 'Error al obtener categorías' });
  }
};

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    return res.status(200).json(categorias);
  } catch (error) {
    console.error('Error al obtener categorías:', error);  
    return res.status(500).json({ message: 'Error al obtener categorías', error: error.message });
  }
};


// Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    return res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al obtener categoría por ID:', error);
    return res.status(500).json({ message: 'Error al obtener categoría' });
  }
};

// Crear una nueva categoría
export const createCategoria = async (req, res) => {
  try {
    const { nombre_categoria } = req.body;

    const nuevaCategoria = await Categoria.create({ nombre_categoria });

    return res.status(201).json(nuevaCategoria);
  } catch (error) {
    console.error('Error al crear categoría:', error);
    return res.status(500).json({ message: 'Error al crear categoría' });
  }
};

// Actualizar una categoría
export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    const { nombre_categoria } = req.body;

    await categoria.update({ nombre_categoria });

    return res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    return res.status(500).json({ message: 'Error al actualizar categoría' });
  }
};

// Eliminar una categoría
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    await categoria.destroy();

    return res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    return res.status(500).json({ message: 'Error al eliminar categoría' });
  }
};
