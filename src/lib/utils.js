import mongoose from "mongoose"
const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // console.log(process.env.MONGO)
    const db = await mongoose.connect('mongodb+srv://prakash-45:liOkL4MLE6wWc2UX@cluster0.mj8adyb.mongodb.net/nextCource?retryWrites=true&w=majority&appName=Cluster0');
    connection.isConnected = db.connections[0].readyState;
    console.log(db.connections[0].readyState)
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};