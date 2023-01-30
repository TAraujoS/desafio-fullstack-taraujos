export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}
