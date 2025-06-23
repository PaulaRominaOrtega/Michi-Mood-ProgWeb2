import CuponDescuento from '../models/CuponDescuento.js';

// Obtener todos los cupones
export const getCupones = async (req, res) => {
  try {
    const cupones = await CuponDescuento.findAll();
    res.status(200).json(cupones);
  } catch (error) {
    console.error('Error al obtener cupones:', error);
    res.status(500).json({ message: 'Error al obtener cupones' });
  }
};

// Obtener cupón por ID
export const getCuponById = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    res.status(200).json(cupon);
  } catch (error) {
    console.error('Error al obtener cupón:', error);
    res.status(500).json({ message: 'Error al obtener cupón' });
  }
};

// Crear un nuevo cupón
export const createCupon = async (req, res) => {
  try {
    const { nombreCupon, codigoCupon, porcentajeDescuento, activo } = req.body;

    // Validación
    if (!Number.isInteger(porcentajeDescuento) || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
      return res.status(400).json({ message: 'El descuento debe ser un número entero entre 0 y 100.' });
    }

    const nuevoCupon = await CuponDescuento.create({
      nombreCupon,
      codigoCupon,
      porcentajeDescuento,
      activo
    });

    res.status(201).json(nuevoCupon);
  } catch (error) {
    console.error('Error al crear cupón:', error);
    res.status(500).json({ message: 'Error al crear cupón' });
  }
};

// Actualizar cupón
export const updateCupon = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    const { nombreCupon, codigoCupon, porcentajeDescuento, activo } = req.body;

    if (!Number.isInteger(porcentajeDescuento) || porcentajeDescuento < 0 || porcentajeDescuento > 100) {
      return res.status(400).json({ message: 'El descuento debe ser un número entero entre 0 y 100.' });
    }

    await cupon.update({
      nombreCupon,
      codigoCupon,
      porcentajeDescuento,
      activo
    });

    res.status(200).json(cupon);
  } catch (error) {
    console.error('Error al actualizar cupón:', error);
    res.status(500).json({ message: 'Error al actualizar cupón' });
  }
};

// Eliminar cupón
export const deleteCupon = async (req, res) => {
  try {
    const { id } = req.params;
    const cupon = await CuponDescuento.findByPk(id);

    if (!cupon) {
      return res.status(404).json({ message: 'Cupón no encontrado' });
    }

    await cupon.destroy();
    res.status(200).json({ message: 'Cupón eliminado' });
  } catch (error) {
    console.error('Error al eliminar cupón:', error);
    res.status(500).json({ message: 'Error al eliminar cupón' });
  }
};

// Validar cupón por código
export const validarCupon = async (req, res) => {
  try {
    const { codigoCupon } = req.params;

    const cupon = await CuponDescuento.findOne({
      where: {
        codigoCupon,
        activo: true
      }
    });

    if (!cupon) {
      return res.status(404).json({ valido: false, message: 'Cupón inválido o inactivo' });
    }

    res.status(200).json({ valido: true, cupon });
  } catch (error) {
    console.error('Error al validar cupón:', error);
    res.status(500).json({ message: 'Error al validar cupón' });
  }
};

// Validar cupón por código desde el body
export const validarCuponDesdeBody = async (req, res) => {
    try {
      const { codigoCupon } = req.body;
  
      if (!codigoCupon) {
        return res.status(400).json({ valido: false, message: 'Falta el código del cupón.' });
      }
  
      const cupon = await CuponDescuento.findOne({
        where: {
          codigoCupon,
          activo: true
        }
      });
  
      if (!cupon) {
        return res.status(404).json({ valido: false, message: 'Cupón inválido o inactivo' });
      }
  
      res.status(200).json({ valido: true, cupon });
    } catch (error) {
      console.error('Error al validar cupón desde el body:', error);
      res.status(500).json({ message: 'Error al validar cupón' });
    }
  };
  