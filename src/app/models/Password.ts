import {User} from "./User";

export interface Password {
  id: number;
  login?: string;
  password: string;
  url?: string;
  description?: string;
  userDTO?: User;
  isDecrypted: boolean;
  type?: string;
  parentPasswordId?: number;
}
