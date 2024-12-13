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
    default: "https://cdn3.pixelcut.app/7/18/647c1064ebf1c6171bfd3a87_profile_picture_feature_1_5d5a540273.webp",
   },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
