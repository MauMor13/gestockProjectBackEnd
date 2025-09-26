import type { Roles } from "../../enums/roles.js";

export interface IUser {
    
    company_id: string;

    name: string;
    
    lastname: string;

    email: string;

    password : string;

    role: Roles;

    active: boolean;
}