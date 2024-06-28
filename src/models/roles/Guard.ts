// Garde

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Guard extends Roles {
    lastProtected: Player | null = null;

    constructor() {
        super(ERoles.GUARD, "Guard");
    }

    protectPlayer(playerList : Player[]): number{
        let protect : boolean = false;
        let _protected : Player | null = null;
        let res : number = 0;
        do{
            res = chooseAnswer(playerList)
            _protected = playerList[res]
            protect = this.CheckIfAlreadyPlayer(_protected)
        } while (!protect);
        this.lastProtected = _protected;
        return res;
    }

    CheckIfAlreadyPlayer(player: Player) : boolean {
        if(!this.lastProtected || player.name !== this.lastProtected!.name) {
            this.lastProtected = player;
            return true;
        }  
        return false;
    }    
}