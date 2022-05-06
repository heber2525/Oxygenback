import task from '../models/task.model.js';

export const getAllTask = async (req, res, next) => {
    try {
        const resp = await task.find({});

        if (resp === null) {
            const error = new Error('No data');
            error.status = 204;
            next(error);
        }
        res.json(resp);
    } catch (err) {
        next((err, 'error get all 404'));
    }
};

export const getTask = async (req, res, next) => {
    try {
        const resp = await task.findById(req.params.id);

        if (resp === null) {
            const error = new Error('No data');
            error.status = 204;
            next(error);
        }
        res.json(resp);
    } catch (err) {
        console.log(err);
        next(err);
    }
};
export const deleteTask = async (req, res, next) => {
    try {
        const resp = await task.findByIdAndDelete(req.params.id);

        if (resp === null) {
            const error = new Error('No students to delete');
            error.status = 204;
            next(error);
        }
        res.json(resp);
    } catch (err) {
        next(err);
    }
};
export const updateTask = async (req, res, next) => {
    try {
        const resp = await task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (resp === null) {
            const error = new Error('No data');
            error.status = 204;
            next(error);
        }
        res.json(resp);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export const addTask = async (req, res, next) => {
    console.log(req.body);
    try {
        const newTask = { ...req.body };
        const resp = await task.create(newTask);

        res.json(resp);
    } catch (err) {
        next((err, 'error addTask 404'));
    }
};
