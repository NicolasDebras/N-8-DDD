import { Player } from "../src/models/Player";
import { Cupid } from "../src/models/roles/Cupid";
import { Guard } from "../src/models/roles/Guard";
import { ERoles } from "../src/enums/ERoles";
import { ECamps } from "../src/enums/ECamps";
import { Hunter } from "../src/models/roles/Hunter";
import { Seer } from "../src/models/roles/Seer";
import { LittleGirl } from "../src/models/roles/LittleGirl";
import { SimpleVillager } from "../src/models/roles/SimpleVillager";
import { Witch } from "../src/models/roles/Witch";
import { InfectWereWolf } from "../src/models/roles/InfectWereWolf";
import { WhiteWereWolf } from "../src/models/roles/WhiteWereWolf";

export function initializePlayers(): Player[] {
    return  [ new Player('Alice', new Cupid(), ECamps.VILLAGER)
            , new Player('Bob', new Hunter(), ECamps.VILLAGER)
            , new Player('Charlie', new Guard(), ECamps.VILLAGER)
            , new Player('David', new Seer(), ECamps.VILLAGER)
            , new Player('Eve', new InfectWereWolf(), ECamps.WEREWOLF)
            , new Player('Frank', new WhiteWereWolf(), ECamps.SOLO)
            , new Player('Grace', new Witch(), ECamps.VILLAGER)
            , new Player('Hugo', new SimpleVillager(), ECamps.VILLAGER)
            , new Player('Bastien', new LittleGirl(), ECamps.VILLAGER)
            , new Player('Ines', new SimpleVillager(), ECamps.VILLAGER)
        ]

}
