export interface ChangePassword{
  login: string;
  oldPassword: string;
  newPassword: string;
  keepAsHash: boolean;
}
