import Categoria from '../models/Categoria.js';

const seedDatabase = async () => {
  try {
    await Categoria.bulkCreate([
      {
        nombre_categoria: 'Electrónica',
        imagenUrl: 'https://picsum.photos/id/1/200/200',
        activa: true
      },
      {
        nombre_categoria: 'Ropa',
        imagenUrl: 'https://picsum.photos/id/20/200/200',
        activa: true
      },
      {
        nombre_categoria: 'Hogar',
        imagenUrl: 'https://picsum.photos/id/42/200/200',
        activa: true
      },
      {
        nombre_categoria: 'Deportes',
        imagenUrl: 'https://picsum.photos/id/60/200/200',
        activa: false
      }
    ]);
    console.log(' Base de datos poblada con datos de ejemplo');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  }
};

export default seedDatabase;
