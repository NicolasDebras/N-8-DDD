import {initializePlayers } from './utils';
import { chooseAnswer, findPlayerByRole } from '../tools/tool';
import { NightTurn } from '../use_case/NightTurn';
import { ERoles } from '../enums/ERoles';
import { Seer } from '../models/roles/Seer';


jest.mock('../tools/tool', () => {
    const originalModule = jest.requireActual('../tools/tool');
    return {
      ...originalModule,
      chooseAnswer: jest.fn()
    };
});


describe('Seer', () => {
    it('should see a role', () => {
      
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(2);

        const nightTurn = new NightTurn();
        nightTurn.startNight(players);
        let seer = findPlayerByRole(ERoles.SEER, players)[0]
        if(seer.role instanceof Seer){
            expectSeer = seer.role.lastSee;
        }
        expect(expectSeer).toBe('HUNTER');
    });

});
describe('Seer', () => {
    it('should see a role', () => {
      
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(2);

        const nightTurn = new NightTurn();
        nightTurn.startNight(players);
        let seer = findPlayerByRole(ERoles.SEER, players)[0]
        if(seer.role instanceof Seer){
            expectSeer = seer.role.lastSee;
        }
        expect(expectSeer).toBe('HUNTER');
    });

});
