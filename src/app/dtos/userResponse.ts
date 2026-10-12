import IUserResponse from '../Interfaces/IUserResponse';

export class UserResponse implements IUserResponse {
  public id: string;
  public username: string;
  public email: string;
  public token: string;

  constructor(id: string, username: string,email: string, token: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
  }
}
