import express from 'express';
import {
    addTask,
    deleteTask,
    getAllTask,
    getTask,
    updateTask,
} from '../controller/taskController.js';

const router = express.Router();

router.post('/', addTask);
router.get('/', getAllTask);
router.get('/:id', getTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;
