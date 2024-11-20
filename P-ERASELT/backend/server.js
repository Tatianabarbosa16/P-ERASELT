const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose
    .connect('mongodb://127.0.0.1:27017/accountsDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(error => console.error('Error al conectar a MongoDB:', error));

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/accounts', accountRoutes);

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


