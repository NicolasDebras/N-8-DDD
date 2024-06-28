import { Player } from "../models/Player";
import { Cupid } from "../models/roles/Cupid";
import { Guard } from "../models/roles/Guard";
import { ERoles } from "../enums/ERoles";
import { ECamps } from "../enums/ECamps";
import { Hunter } from "../models/roles/Hunter";
import { Seer } from "../models/roles/Seer";
import { LittleGirl } from "../models/roles/LittleGirl";
import { SimpleVillager } from "../models/roles/SimpleVillager";
import { Witch } from "../models/roles/Witch";
import { InfectWereWolf } from "../models/roles/InfectWereWolf";
import { WhiteWereWolf } from "../models/roles/WhiteWereWolf";

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
