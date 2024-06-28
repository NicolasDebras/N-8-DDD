// Sorcière

import { ECamps } from "../../enums/ECamps";
import { ERoles } from "../../enums/ERoles";
import { chooseAnswer } from "../../tools/tool";
import { Player } from "../Player";
import { Roles } from "../Roles";

export class Witch extends Roles {
    constructor() {
        super(ERoles.WITCH,"whitch");
    }

    gotHealthPotion: boolean = true;
    gotDeathPotion: boolean = true;

    useHealthPotion() {
        this.gotHealthPotion = false;
    }

    useDeathPotion() {
        this.gotDeathPotion = false;
    }

    havePotions() : boolean {
        return this.gotHealthPotion || this.gotDeathPotion
    }

    makeAction(playerList:Player[],isDead:boolean):number{
        let choice=[]
        if(isDead && this.gotHealthPotion) choice.push("vie")
        if(this.gotDeathPotion) choice.push("mort")
        if (choice.length > 0) {
            choice.push("annuler")
            let potionToUse = chooseAnswer(choice)

            // 0 -> Potion de vie
            // 1 -> Potion de mort
            if(potionToUse === 0) {
                this.useHealthPotion()
                return -1
            } else if(potionToUse === 1) {
                let list=playerList.filter((player: Player) => player.role.name !== ERoles.WITCH)
                let choice = chooseAnswer(list)
                this.useDeathPotion()
                return choice
            }
        }
        return -2
    }

}