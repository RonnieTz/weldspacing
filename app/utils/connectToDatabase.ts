import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  await mongoose.connect(
    'mongodb+srv://rns:cisse18211821@cluster0.pwpagi7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );
};
