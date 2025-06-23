// src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const Carrito = sequelize.define('Carrito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
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
    tableName: 'carritos',
    timestamps: false
});

export default Carrito;