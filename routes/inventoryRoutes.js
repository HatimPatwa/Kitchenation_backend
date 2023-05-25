const express = require('express');
const router = express.Router();

const inventoryService = require('../services/inventoryService');

router.get('/', async (req, res) => {
    try {
        const result = await inventoryService.getInventory();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await inventoryService.getInventoryById(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/add', async (req, res) => {
    try {
        const result = await inventoryService.addInventory(req);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/', async (req, res) => {
    try {
        const result = await inventoryService.updateInventory(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;