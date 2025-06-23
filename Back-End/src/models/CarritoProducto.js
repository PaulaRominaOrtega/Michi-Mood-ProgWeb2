
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; // Nota la extensión .js

const CarritoProducto = sequelize.define('CarritoProducto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idProducto: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'productos', // Nombre de la TABLA
            key: 'id'
        }
    },
    idCarrito: {
        type: DataTypes.INTEGER, // Coincidir con Producto.codigo
        allowNull: false,
        references: {
            model: 'carritos', // Nombre de la TABLA
            key: 'id'
        }
    },
}, {
    tableName: 'carritosproductos',
    timestamps: false
});

export default CarritoProducto;