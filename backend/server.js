const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;

const username = encodeURIComponent("sebastianshaid22");
const password = encodeURIComponent("lRKqTcWnQ5EIxSrI");
const cluster = "saluddigital.76agyjl.mongodb.net";
const dbName = "Registros_PruebaV2"; // Nombre de tu base de datos en MongoDB Atlas

// Construye la URI de conexión
const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=SaludDigital`;

// Configura el cliente MongoClient con la versión estable del API de servidor
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware para parsear bodies JSON
app.use(bodyParser.json());

// Mantiene la conexión abierta y reutilizable
client.connect()
  .then(() => {
    console.log('Conectado a la base de datos MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB Atlas:', err);
  });

// Ruta de prueba para verificar la conexión al servidor
app.get('/', (req, res) => {
  res.send('¡Hola! Esta es la respuesta desde el servidor.');
});

// Ruta para guardar datos de registro de usuarios
app.post('/api/registrarUsuario', async (req, res) => {
  try {
    const database = client.db(dbName);
    const collection = database.collection('usuarios');

    // Recibe datos del body de la petición
    const { nombre, apellidos, correo, contraseña } = req.body;

    // Inserta los datos en la colección 'usuarios'
    const result = await collection.insertOne({
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      contraseña: contraseña
    });

    console.log("Usuario registrado:", result.insertedId);
    res.status(200).json({ message: 'Registro exitoso', data: { id: result.insertedId, nombre, correo } });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});app.post('/api/iniciarSesion', async (req, res) => {
  try {
    const database = client.db(dbName);
    const collection = database.collection('usuarios');

    // Recibe datos del body de la petición
    const { correo, contraseña } = req.body;

    // Verificar si el usuario existe
    const usuario = await collection.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ message: 'El correo electrónico no está registrado' });
    }

    // Comparar la contraseña ingresada con la almacenada
    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ message: 'La contraseña es incorrecta' });
    }

    // Si todo está correcto, enviar una respuesta de éxito
    res.status(200).json({ message: 'Inicio de sesión exitoso', usuario: { id: usuario._id, nombre: usuario.nombre, correo: usuario.correo } });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  }
});
app.post('/api/crearCita', async (req, res) => {
  try {
    const database = client.db(dbName);
    const collection = database.collection('citas');

    // Recibe datos del body de la petición
    const { usuarioId, fecha, hora, motivo } = req.body;

    // Inserta los datos en la colección 'citas'
    const result = await collection.insertOne({
      usuarioId: usuarioId,
      fecha: fecha,
      hora: hora,
      motivo: motivo
    });

    console.log("Cita creada:", result.insertedId);
    res.status(200).json({ message: 'Cita creada exitosamente', cita: { id: result.insertedId, usuarioId, fecha, hora, motivo } });
  } catch (error) {
    console.error('Error al crear cita:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
