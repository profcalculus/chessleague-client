export class User {
  constructor
  (
    public id: number,
    public user_name: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public phone1: string,
    public phone2: string,
    public password_hash: string,
    public team_id: number,
    public team_name: string,
  ) {}
}
