import { Data } from "@angular/router";

export class contact {
    firstname?: string;
    data?: Data;
    lastname?: string;
    phonenumber?: number;
    city?: string;
    photo?: File;
    id!: number;

}