import User from '../models/User';
import { getOne } from './handlerFactory';

export const getUser = getOne(User);
