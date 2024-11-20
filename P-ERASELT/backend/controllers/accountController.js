const db = require('../models/accountModel'); 

// Crear una nueva cuenta
exports.createAccount = (req, res) => {
    const { platformName, profileUrl, infoType } = req.body;

    if (!platformName || !profileUrl || !infoType) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const query = `
        INSERT INTO account (platformName, profileUrl, infoType)
        VALUES (?, ?, ?)
    `;

    db.run(query, [platformName, profileUrl, infoType], function (err) {
        if (err) {
            console.error('Error al insertar la cuenta:', err.message);
            return res.status(500).json({ message: 'Error al crear la cuenta.' });
        }
        res.status(201).json({ id: this.lastID, platformName, profileUrl, infoType });
    });
};

// Obtener todas las cuentas
exports.getAccounts = (req, res) => {
    const query = `SELECT * FROM account`;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error al obtener las cuentas:', err.message);
            return res.status(500).json({ message: 'Error al obtener las cuentas.' });
        }
        res.json(rows);
    });
};

// Actualizar  cuenta por ID
exports.updateAccount = (req, res) => {
    const { id } = req.params;
    const { platformName, profileUrl, infoType } = req.body;

    if (!platformName || !profileUrl || !infoType) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const query = `
        UPDATE account
        SET platformName = ?, profileUrl = ?, infoType = ?
        WHERE id = ?
    `;

    db.run(query, [platformName, profileUrl, infoType, id], function (err) {
        if (err) {
            console.error('Error al actualizar la cuenta:', err.message);
            return res.status(500).json({ message: 'Error al actualizar la cuenta.' });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: 'Cuenta no encontrada.' });
        }
        res.json({ id, platformName, profileUrl, infoType });
    });
};

// Eliminar cuenta por ID
exports.deleteAccount = (req, res) => {
    const { id } = req.params;

    const query = `
        DELETE FROM account
        WHERE id = ?
    `;

    db.run(query, [id], function (err) {
        if (err) {
            console.error('Error al eliminar la cuenta:', err.message);
            return res.status(500).json({ message: 'Error al eliminar la cuenta.' });
        }
        if (this.changes === 0) {
            return res.status(404).json({ message: 'Cuenta no encontrada.' });
        }
        res.json({ message: 'Cuenta eliminada exitosamente.' });
    });
};
