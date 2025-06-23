// src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:true
    },
    
    idCliente: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'clientes', // Nombre de la TABLA
            key: 'id'
        }
    },
}, {
    tableName: 'pedidos',
    timestamps: false
});

export default Pedido;