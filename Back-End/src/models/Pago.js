 // src/models/Cliente.js
 import { DataTypes } from 'sequelize';
 import sequelize from '../db/connection.js'; // Nota la extensión .js
 
 const Pago = sequelize.define('Pago', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         unique: true,
         autoIncrement: true
     },
     monto: {
         type: DataTypes.INTEGER,
         allowNull: true
     },
     estado: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
         defaultValue:true
     },

     fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW

    },

    medio_pago: {
        type: DataTypes.STRING,
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
     
 }, {
     tableName: 'pagos',
     timestamps: false
 });
 
 export default Pago;