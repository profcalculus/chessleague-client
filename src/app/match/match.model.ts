export class Match {
  constructor(
    public id: number,
    public team_1: {
      id: number,
      name: string,
    },
    public team_2: {
      id: number,
      name: string,
    },
    public date: Date,
    public location: string,
    public result: string,
    public games: {
      id: number,
      white: {
        id: number,
        last_name: string,
      },
      black: {
        id: number,
        last_name: string,
      },
      result: string,
    }[],
  ) { };
}
