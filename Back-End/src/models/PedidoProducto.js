// src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const PedidoProducto = sequelize.define('PedidoProducto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idPedido: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'pedidos', // Nombre de la TABLA
            key: 'id'
        }
    },
    idProducto: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'productos', // Nombre de la TABLA
            key: 'id'
        }
    },
}, {
    tableName: 'pedidosproductos',
    timestamps: false
});

export default PedidoProducto;