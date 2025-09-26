import {Schema} from 'mongoose';
import type {IManagerMongo} from '../types/IManagerMongo.js';
import {USER_ROLES_ARRAY} from '../../../enums/roles.js';

export const ManagerSchema = new Schema<IManagerMongo>({
    id: {type: String, required: true, unique: true},
    company_id: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password : {type: String, required: true},
    role : {type:String, 
            required: true,
            enum: USER_ROLES_ARRAY            
        },
    active: {type: Boolean, required: true, default: false}
})