 // src/models/Cliente.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    oferta: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 100,
            isInt: true
          },
    },
    idAdministrador: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'administradores', // Nombre de la TABLA
            key: 'id'
        }
    },
    
    idCategoria: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'categorias', // Nombre de la TABLA
            key: 'id'
        }
    },
    
}, {
    tableName: 'productos',
    timestamps: false
});

export default Producto;