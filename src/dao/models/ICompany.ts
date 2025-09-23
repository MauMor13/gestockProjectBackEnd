import { Document } from 'mongoose';

export interface ICompany extends Document {
    id: string;

    name: string;

    emailCompany: string;

    dataRegister: Date;

    active: boolean;
}