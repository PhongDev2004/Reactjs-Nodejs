import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    image: {
      type: String,
      default: 'https://avatar.iran.liara.run/public',
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
