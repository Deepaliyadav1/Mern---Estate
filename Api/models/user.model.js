import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar:{
    type: String,
    default: "https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg"
  },
}, { timestamps: true }); // Properly closing the schema object with a bracket

const User = mongoose.model('User', userSchema);

export default User;
