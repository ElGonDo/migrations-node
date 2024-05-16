import database from '../db.js';
import { Sequelize } from 'sequelize';
// Definición del modelo de datos de User
const User = database.define('User', {
    Nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    },
    {
        tableName: 'Personas',
    },
);

export default User