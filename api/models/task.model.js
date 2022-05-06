import mongoose from 'mongoose';

const modelName = 'task';
const taskSchemma = new mongoose.Schema({
    title: { type: String, required: true },
    tags: { type: Array, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    isDone: { type: Boolean, required: true },
});

taskSchemma.set('toJSON', {
    transform: (document, returnedObject) => {
        (returnedObject.id = returnedObject._id), delete returnedObject.__v;
        delete returnedObject._id;
    },
});
let task;
if (mongoose.default.models[modelName]) {
    task = mongoose.model(modelName);
} else {
    task = mongoose.model(modelName, taskSchemma);
}

export default task;
