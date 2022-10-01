export interface ISignInFormData {
  username: string;
  password: string;
}

export interface ISignUpFormData {
  username: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string | null;
  username: string | null;
  email: string | null;
  profilePicture: string | null;
}
