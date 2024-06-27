import { Player, Roles, ECamps } from "../models/Player";
import { WolfVote } from "../models/WolfVote";

describe('WolfVote', () => {
  it('should select a player based on votes', () => {
    
    
    const player1 = new Player('Alice', Roles.CUPID , ECamps.VILLAGER);
    const player2 = new Player('Bob', Roles.WEREWOLF, ECamps.WEREWOLF);
    const player3 = new Player('Charlie', Roles.WEREWOLF, ECamps.WEREWOLF);

    // Mock la methode vote de Player
    jest.spyOn(player2, 'vote').mockImplementation((players: Player[]) => players[0]);
    jest.spyOn(player3, 'vote').mockImplementation((players: Player[]) => players[0]);

    
    const wolfVote = new WolfVote([player1, player2, player3]);

    const selectedPlayer = wolfVote.startVote();

    expect(selectedPlayer).toBe(player1);
  });
});
