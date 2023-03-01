import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    id: String,
    name: String,
    password: String
})

export default mongoose.model('User', userSchema);