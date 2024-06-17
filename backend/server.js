const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;

const username = encodeURIComponent("sebastianshaid22");
const password = encodeURIComponent("lRKqTcWnQ5EIxSrI");
const cluster = "saluddigital.76agyjl.mongodb.net";
const dbName = "tu_base_de_datos"; // Reemplaza con el nombre de tu base de datos

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
    const { nombre, email, contraseña } = req.body;

    // Inserta los datos en la colección 'usuarios'
    const result = await collection.insertOne({
      nombre: nombre,
      email: email,
      contraseña: contraseña
    });

    console.log("Usuario registrado:", result.insertedId);
    res.status(200).json({ message: 'Registro exitoso', data: { id: result.insertedId, nombre, email } });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
