import database from './db.js';
import User from './models/modelUser.js';
import Supplier from './models/modelSupplier.js';

// Validación de la conexión a la base de datos
async function testDatabaseConnectionAndMigration() {
  try {
    await database.authenticate();
    console.log('La conexion se ha establecido satisfactoriamente');
    // Llamar a la función para ejecutar las migraciones después de establecer la conexión
    runMigrations();
  } catch (error) {
    console.error('No se pudo conectar la base de datos:', error);
  }
}

// Realizar la migración
async function runMigrations() {
  try {
    //await User.sync({ alter: true });
    await Supplier.sync({ alter: true });
    console.log('Migración exitosa');
  } catch (error) {
    console.error('Error en la migración:', error);
  } finally {
    // Cierra la conexión a la base de datos al finalizar
    await database.close();
  }
}

// Llamada a la función para probar la conexión a la base de datos
testDatabaseConnectionAndMigration();