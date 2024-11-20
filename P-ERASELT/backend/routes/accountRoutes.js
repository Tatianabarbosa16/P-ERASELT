const express = require('express');
const Account = require('../models/accountModel');

const router = express.Router();

// Obtener todas las cuentas
router.get('/', async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las cuentas' });
    }
});

// Obtener una cuenta por ID
router.get('/:id', async (req, res) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) return res.status(404).json({ message: 'Cuenta no encontrada' });

        res.json(account);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la cuenta' });
    }
});

// Crear cuenta
router.post('/', async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        const savedAccount = await newAccount.save();
        res.status(201).json(savedAccount);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la cuenta' });
    }
});

// Actualizar cuenta
router.put('/:id', async (req, res) => {
    try {
        const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!updatedAccount) return res.status(404).json({ message: 'Cuenta no encontrada' });

        res.json(updatedAccount);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la cuenta' });
    }
});

// Eliminar cuenta
router.delete('/:id', async (req, res) => {
    try {
        const deletedAccount = await Account.findByIdAndDelete(req.params.id);
        if (!deletedAccount) return res.status(404).json({ message: 'Cuenta no encontrada' });

        res.json({ message: 'Cuenta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la cuenta' });
    }
});

module.exports = router;
