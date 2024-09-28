//import {hash} from "bcryptjs"
import { 
    PrimaryGeneratedColumn,
    Column,
    Entity} from "typeorm";
    
@Entity('permissions')
export class PermissionsEntity {
@PrimaryGeneratedColumn()
id_permission:number ;
@Column({type: 'varchar',length: 50 ,nullable:false})
name_permission: string;
}
