import bcrypt from 'bcryptjs';
import User from '../models/User';
import catchAsync from '../Utils/catchAsync';
import { updateUserValidation } from '../validations/user';
import { getOne, updateOne, uploadImage } from './handlerFactory';

export const getUser = getOne(User);

export const updateUser = catchAsync(async (req, res, next) => {
  const { error } = updateUserValidation.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: 'fail',
      message: error.details[0].message,
    });
  }

  let user = await User.findById(req.params.id).select('+password');

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  }

  if (req.body.email) {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser && existUser._id.toString() !== req.params.id) {
      return res.status(400).json({
        status: 'fail',
        message: 'Email already exists',
      });
    }

    req.body.email = req.body.email.toLowerCase();
  }

  if (req.body.current_password && req.body.new_password) {
    const isMatch = await bcrypt.compare(req.body.current_password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: 'fail',
        message: 'Current password is incorrect',
      });
    }

    req.body.password = await bcrypt.hash(req.body.new_password, 12);
  }

  if (req.file) {
    req.body.image = await uploadImage(req.file as Express.Multer.File);
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
