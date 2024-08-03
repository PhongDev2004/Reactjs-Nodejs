export interface IUser {
  _id?: string;
  username?: string;
  email: string;
  password: string;
  role?: string;
  gender?: string;
  image?: string;
  phone?: number;
  address?: string;
  active?: boolean;
}
