import {initializePlayers } from './utils';
import { chooseAnswer, findPlayerByRole } from '../tools/tool';
import { NightTurn } from '../use_case/NightTurn';
import { ERoles } from '../enums/ERoles';
import { Seer } from '../models/roles/Seer';
import { Witch } from '../models/roles/Witch';
import { ECamps } from '../enums/ECamps';
import { Guard } from '../models/roles/Guard';
import { InfectWereWolf } from '../models/roles/InfectWereWolf';


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
        (chooseAnswer as jest.Mock).mockReturnValue(0).mockReturnValueOnce(2);

        const nightTurn = new NightTurn();
        nightTurn.startNight(players);
        let witchView = findPlayerByRole(ERoles.WITCH, players)[0]
        let viewWitch=true
        if(witchView.role instanceof Witch){
            viewWitch=witchView.role.gotHealthPotion
        }
        expect(viewWitch).toBe(false);
    });

    it('should all ', () => {
      
        const players = initializePlayers();
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(3).mockReturnValueOnce(3).mockReturnValueOnce(0).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0);

        const nightTurn = new NightTurn();
        let allplayerAfterNight =  nightTurn.startNight(players);
        let couple = allplayerAfterNight[0].isInLove&&allplayerAfterNight[1].isInLove
        let seerView = findPlayerByRole(ERoles.SEER, players)[0]
        let view=""
        if(seerView.role instanceof Seer){
            if(seerView.role.lastSee){
                view=seerView.role.lastSee
            }
        }
        let guardWiew = findPlayerByRole(ERoles.GUARD, players)[0]
        let viewguard=""
        if(guardWiew.role instanceof Guard){
            if(guardWiew.role.lastProtected){
                viewguard=guardWiew.role.lastProtected.name
            }
        }
        let infectView = findPlayerByRole(ERoles.INFECT_WEREWOLF, players)[0]
        let viewInfect=false
        if(infectView.role instanceof InfectWereWolf){
            viewInfect=infectView.role.haveInfected
        }
        let witchView = findPlayerByRole(ERoles.WITCH, players)[0]
        let viewWitch=false
        if(witchView.role instanceof Witch){
            viewWitch=witchView.role.gotDeathPotion
        }
        let death=allplayerAfterNight.filter(player => player.isAlive==false)
        
        
        
        expect(couple).toBe(true);
        expect(view).toBe(ERoles.SEER);
        expect(viewguard).toBe("David");
        expect(viewInfect).toBe(true);
        expect(viewWitch).toBe(false);
        expect(death.length).toBe(0);
        
    });
    it('should have a infect ', () => {
        
        const players = initializePlayers();
        let expectSeer : string | null = null;
        (chooseAnswer as jest.Mock).mockReturnValue(1).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(3).mockReturnValueOnce(3).mockReturnValueOnce(0).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0)

        const nightTurn = new NightTurn();
        let allplayerAfterNight =  nightTurn.startNight(players);
        let wolfafter = allplayerAfterNight.filter((player) => player.camp === ECamps.WEREWOLF)
        
        expect(wolfafter.length).toBe(2);
    });

});