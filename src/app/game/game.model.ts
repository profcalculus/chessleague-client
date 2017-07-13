export class Game {
  constructor(
  public id: number,
  public white: {
    name: string,
    id: number
  },
  public black: {
    name: string,
    id: number
  },
  public match_id: number,
  public result: string, // '?' 'W' 'B' '='
  public defaulted: boolean,
  public date: string,
) {};

}
