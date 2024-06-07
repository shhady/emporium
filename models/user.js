import mongoose, {models} from "mongoose";
const Schema = mongoose.Schema;

// Define the main product schema and reference the variant schema
const userSchema = new Schema({
    clerkId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
  }, { timestamps: true });

const User = models.User || mongoose.model('User', userSchema);

export default User;