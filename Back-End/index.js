import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import sequelize from './src/db/connection.js';
import seedDatabase from './src/db/seed.js'; 
import administradorRoutes from './src/routes/administradorRoutes.js';
import categoriaRoutes from './src/routes/categoriaRoutes.js';
import productoRoutes from './src/routes/productoRoutes.js';
import clienteRoutes from './src/routes/clienteRoutes.js';
import direccionRoutes from './src/routes/direccionRoutes.js';
import carritoRoutes from './src/routes/carritoRoutes.js';
import carritoProductoRoutes from './src/routes/carritoProductoRoutes.js';
import pedidoRoutes from './src/routes/pedidoRoutes.js';
import pedidoProductoRoutes from './src/routes/pedidoProductoRoutes.js';
import pagoRoutes from './src/routes/pagoRoutes.js';
import envioRoutes from './src/routes/envioRoutes.js';
import cuponesdescuentos from './src/routes/cuponDescuentoRoutes.js';


const app = express();
const PORT = process.env.PORT || 3001;

const RESET_DATABASE = true;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas - agrega todas las que tengas
app.use('/api/categorias', categoriaRoutes);
app.use('/api/administradores', administradorRoutes);
app.use('/api/carritos', carritoRoutes);
app.use('/api/carritosproductos', carritoProductoRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/direcciones', direccionRoutes);
app.use('/api/envios', envioRoutes);
app.use('/api/pagos', pagoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/pedidosproductos', pedidoProductoRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/cuponesdescuentos', cuponesdescuentos);

// Sincronizar base de datos
const syncOptions = RESET_DATABASE ? { force: true } : {};

sequelize.sync(syncOptions)
  .then(() => {
    console.log('Base de datos conectada y sincronizada');
    if (RESET_DATABASE) {
      return seedDatabase();  // <--- Ejecutar seed
    }
    return Promise.resolve();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al iniciar el servidor:', err);
  });