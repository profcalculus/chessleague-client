export class Player {
 static fromJson(jsonObj): Player {
    return new Player(
      jsonObj.id,
      jsonObj.first_name,
      jsonObj.last_name,
      jsonObj.dob,
      jsonObj.email,
      jsonObj.phone,
      jsonObj.team
    );
  }

  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public dob: Date,
    public email: string,
    public phone: string,
    public team: {
      name: string,
      id: number,
    }) { };



  get name(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  get link(): Object {
  return {
    name: this.last_name,
    id: this.id
  };
  };
}
