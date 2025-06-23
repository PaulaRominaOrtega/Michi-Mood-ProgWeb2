sequelize.sync({ force: true })
  .then(() => {
    console.log('✅ Base de datos sincronizada');
    seedDatabase(); // Insertás los datos de ejemplo
  })
  .catch((err) => {
    console.error('❌ Error al sincronizar la base de datos:', err);
  });



// Importa todos los modelos
import Categoria from './src/models/Categoria.js';
import Administrador from './Administrador.js';
import Carrito from './Carrito.js';
import CarritoProducto from './CarritoProducto.js';
import Cliente from './Cliente.js';
import Direccion from './Direccion.js';
import Envio from './Envio.js';
import Pago from './Pago.js';
import Pedido from './Pedido.js';
import PedidoProducto from './PedidoProducto.js';
import Producto from './Producto.js';
import CuponDescuento from './CuponDescuento.js';

// --- Definir Asociaciones ---

// Cliente 1:N Direcciones
Cliente.hasMany(Direccion, {
  foreignKey: 'idCliente',
});
Direccion.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});

CuponDescuento.hasMany(Carrito, {
  foreignKey: 'idCuponDescuento',
});
Carrito.belongsTo(CuponDescuento, {
  foreignKey: 'idCuponDescuento',
});

// Cliente 1:N Pedidos
Cliente.hasMany(Pedido, {
  foreignKey: 'idCliente',
});
Pedido.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});

// Cliente 1:1 Carrito
Cliente.hasOne(Carrito, {
  foreignKey: 'idCliente',
  onDelete: 'CASCADE',
});
Carrito.belongsTo(Cliente, {
  foreignKey: 'idCliente',
});

// Administrador 1:N Productos
Administrador.hasMany(Producto, {
  foreignKey: 'idAdministrador',
});
Producto.belongsTo(Administrador, {
  foreignKey: 'idAdministrador',
});

// Categoria 1:N Productos
Categoria.hasMany(Producto, {
  foreignKey: 'idCategoria',
});
Producto.belongsTo(Categoria, {
  foreignKey: 'idCategoria',
});

// Pedido 1:1 Pago
Pedido.hasOne(Pago, {
  foreignKey: 'idPedido',
  onDelete: 'CASCADE',
});
Pago.belongsTo(Pedido, {
  foreignKey: 'idPedido',
});

// Pedido 1:1 Envio
Pedido.hasOne(Envio, {
  foreignKey: 'idPedido',
  onDelete: 'CASCADE',
});
Envio.belongsTo(Pedido, {
  foreignKey: 'idPedido',
});

// Relación Muchos a Muchos: Pedido - Producto (a través de PedidoProducto)
Pedido.belongsToMany(Producto, {
  through: PedidoProducto,
  foreignKey: 'idPedido',
  otherKey: 'idProducto',
});
Producto.belongsToMany(Pedido, {
  through: PedidoProducto,
  foreignKey: 'idProducto',
  otherKey: 'idPedido',
});

// Relación Muchos a Muchos: Carrito - Producto
Carrito.belongsToMany(Producto, {
  through: CarritoProducto,
  foreignKey: 'idCarrito',
  otherKey: 'idProducto',
});
Producto.belongsToMany(Carrito, {
  through: CarritoProducto,
  foreignKey: 'idProducto',
  otherKey: 'idCarrito',
});

// Exporta la instancia de sequelize y los modelos
export {
  sequelize,
  Categoria,
  Administrador,
  Carrito,
  CarritoProducto,
  Cliente,
  Direccion,
  Envio,
  Pago,
  Pedido,
  PedidoProducto,
  Producto,
  CuponDescuento
};
