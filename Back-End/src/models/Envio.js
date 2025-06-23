 // src/models/Cliente.js
 import { DataTypes } from 'sequelize';
 import sequelize from '../db/connection.js'; // Nota la extensión .js
 
 const Envio = sequelize.define('Envio', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         unique: true,
         autoIncrement: true
     },
     costo: {
         type: DataTypes.INTEGER,
         allowNull: true
     },
     estado: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
         defaultValue:true
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
     tableName: 'envios',
     timestamps: false
 });
 
 export default Envio;