import {initializePlayers } from './utils';
import { chooseAnswer, findPlayerByRole } from '../tools/tool';
import { NightTurn } from '../use_case/NightTurn';
import { ERoles } from '../enums/ERoles';
import { Seer } from '../models/roles/Seer';
import { Witch } from '../models/roles/Witch';
import { ECamps } from '../enums/ECamps';


jest.mock('../tools/tool', () => {
    const originalModule = jest.requireActual('../tools/tool');
    return {
      ...originalModule,
      chooseAnswer: jest.fn()
    };
});


describe('WolfNight', () => {
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
    it('should have a couple ', () => {
      
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(2);

        const nightTurn = new NightTurn();
        let allplayerAfterNight =  nightTurn.startNight(players);
        let couple = allplayerAfterNight.filter((player) => player.isInLove)
        
        expect(couple.length).toBe(2);
    });
    it('witch', () => {
        const players = initializePlayers();
        let expectWitch : Witch | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(0);

        const nightTurn = new NightTurn();
        nightTurn.startNight(players);
        let witch = findPlayerByRole(ERoles.WITCH, players)[0]
        if(witch.role instanceof Witch){
            expect((witch as undefined a))
        }
        expect(witch.)
    });
    it('should all ', () => {
      
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(3).mockReturnValueOnce(3).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0);

        const nightTurn = new NightTurn();
        let allplayerAfterNight =  nightTurn.startNight(players);
        let couple = allplayerAfterNight[0].isInLove&&allplayerAfterNight[1].isInLove
        let seerView = findPlayerByRole(ERoles.SEER, players)[0]
        let vieww=""
        if(seerView.role instanceof Seer){
            view=seerView.role.lastSee
        }
        
        expect(couple).toBe(true);
        
    });
    it('should have a infect ', () => {
        
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(2);

        const nightTurn = new NightTurn();
        let allplayerAfterNight =  nightTurn.startNight(players);
        let wolfafter = allplayerAfterNight.filter((player) => player.camp === ECamps.WOLF)
        
        expect(wolfafter.length).toBe(2);
    });

});