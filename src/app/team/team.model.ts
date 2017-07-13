
import { User } from '../user/user.model';
import { Player } from '../player/player.model';

export class Team {
  constructor (
  public id: number,
  public name: string,
  public contacts: {name: string, id: number}[],
  public players: {name: string, id: number} [],
) {}
}
