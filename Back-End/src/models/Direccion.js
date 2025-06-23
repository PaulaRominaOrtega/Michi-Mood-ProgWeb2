// src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const Direccion = sequelize.define('Direccion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    calle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeracion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    provincia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codigo_postal: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    tableName: 'direcciones',
    timestamps: false
});

export default Direccion;