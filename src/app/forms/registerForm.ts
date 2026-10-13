export default class RegisterForm {
  public username: string;
  public email: string;
  public password: string;
  public passwordConfirmation: string;

  constructor(username: string, email: string, password: string, passwordConfirmation: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }
}

