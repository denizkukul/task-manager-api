import mongoose from "mongoose";

export const connectDB = (connectionString: string) => {
    return mongoose.connect(connectionString);
}
