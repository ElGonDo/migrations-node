import { Sequelize } from 'sequelize';

// Configuración de Sequelize y conexión a la base de datos
const database = new Sequelize('railway', 'root', 'JFuVYkdIVEZmmUFUtywjyURIsSvYfzWz', {
    host: 'roundhouse.proxy.rlwy.net',
    port: 14359,
    dialect: 'mysql'
  });

export default database