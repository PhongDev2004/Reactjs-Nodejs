import { JwtPayload, jwtDecode } from 'jwt-decode';
import { IUser } from 'src/interfaces/User';
import instance from './api';

export const loginUser = async (user: IUser) => {
  try {
    const { data } = await instance.post('/auth/login', user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (user: IUser) => {
  try {
    const { data } = await instance.post('/auth/register', user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await instance.post('/auth/logout');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: string) => {
  try {
    const { data } = await instance.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

interface CustomJwtPayload extends JwtPayload {
  role: string;
}

export const getJwt = (): string | undefined => {
  return document.cookie.split('=')[1];
};

export const decodeJwt = (token: string): CustomJwtPayload | null => {
  try {
    return jwtDecode<CustomJwtPayload>(token);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const token = getJwt();
  if (!token) return false;

  const decoded = decodeJwt(token);
  if (!decoded) return false;

  return true;
};

export const isAdmin = async (requiredRole: string | undefined): Promise<boolean> => {
  const token = getJwt();
  if (!token) return false;

  const decodedToken = decodeJwt(token);
  if (!decodedToken) return false;

  const decoded = jwtDecode<CustomJwtPayload>(token) as CustomJwtPayload & { id: string };
  return decoded.role === requiredRole;
};

