import {initializePlayers } from './utils';
import { chooseAnswer } from '../src/tools/tool';
import { NightTurn } from '../src/use_case/NightTurn';


jest.mock('../tool', () => {
    const originalModule = jest.requireActual('../tool');
    return {
      ...originalModule,
      chooseAnswer: jest.fn()
    };
});


describe('SeerAction', () => {
    it('should see a role', () => {
      
        const players = initializePlayers();
    
        (chooseAnswer as jest.Mock).mockReturnValue(1);

        const nightTurn = new NightTurn();
        let expectSeer = nightTurn.seerAction(players);
        expect(expectSeer).toBe('WEREWOLF');
      
    });
});
