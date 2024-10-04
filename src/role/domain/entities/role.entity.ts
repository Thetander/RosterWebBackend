//import {hash} from "bcryptjs"
import { 
    PrimaryGeneratedColumn,
    Column,
    Entity} from "typeorm";
    
@Entity('role')
export class RoleEntity {

@PrimaryGeneratedColumn()
id_role:number;

@Column({type: 'varchar',length: 50 ,nullable:false})
name_role: string;
}
