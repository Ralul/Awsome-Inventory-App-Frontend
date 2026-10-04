export class AuthenticateResponse {
  constructor(
    public id: string,
    public email: string,
    public token: string,
  ) {}
}
