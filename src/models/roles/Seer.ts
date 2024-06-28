// Voyante

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Seer extends Roles {
    lastSee: string | null = null;
    constructor() {
        super( ERoles.SEER, "seer");
    }

    selectPlayer(playerList: Player[]) : number {
        let player : number;
        do{
            player = chooseAnswer(playerList)
        }while(player>=0 && player<playerList.length)
        return player
    }

    getRole(role: string):void{
        this.lastSee = role;
        return
    }
}