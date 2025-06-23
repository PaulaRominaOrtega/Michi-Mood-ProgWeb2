
import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js'; 

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagenUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    tableName: 'categorias',
    timestamps: false
});

export default Categoria;