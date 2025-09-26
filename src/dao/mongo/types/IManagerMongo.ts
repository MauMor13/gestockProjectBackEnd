import { Document } from 'mongoose';
import type { IUser } from '../../generic_models/IUser.js';
import type { Roles } from '../../../enums/roles.js';

export interface IManagerMongo extends IUser, Document {

    role: Roles.MANAGER;

}