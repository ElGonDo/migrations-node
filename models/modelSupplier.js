import database from '../db.js';
import { Sequelize } from 'sequelize';
// Definición del modelo de datos de User
const Supplier = database.define('Supplier', {
    Nombre_proveedor: {
      type: Sequelize.STRING
    },
    apellido_proveedor: {
      type: Sequelize.STRING
    },
    correo_proveedor: {
        type: Sequelize.STRING
    },
    },
    {
        tableName: 'Proveedores',
    },
);
export default Supplier