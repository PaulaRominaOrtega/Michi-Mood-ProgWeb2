 // src/models/Cliente.js
 import { DataTypes } from 'sequelize';
 import sequelize from '../db/connection.js'; // Nota la extensión .js
 
 const CuponDescuento = sequelize.define('CuponDescuento', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         unique: true,
         autoIncrement: true
     },
     nombreCupon: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Un nombre descriptivo para el cupón: "Descuento Bienvenida"'
      },
      codigoCupon: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: 'El código que el usuario ingresará "BIENVENIDO10"'
      },
     porcentajeDescuento: {
         type: DataTypes.INTEGER,
         allowNull: false,
         comment: 'El porcentaje a aplicar (10 para 10%)',
         validate: {
            min: 0,
            max: 100,
            isInt: true
          },

     },
     activo: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true,
         comment: 'Indica si el cupon puede ser utilizado'
     },
 }, {
     tableName: 'cuponesdescuentos',
     timestamps: false
 });
 
 export default CuponDescuento;