import mongoose from 'mongoose';

export async function mongoConnect() {
    const uri = `mongodb+srv://Heber:12345@cluster0.zsntb.mongodb.net/task?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);

    return mongooseConnect;
}
