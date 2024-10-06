//import {hash} from "bcryptjs"
import { 
    PrimaryGeneratedColumn,
    Column,
    Entity} from "typeorm";
    
@Entity('menu')
export class MenuEntity {
@PrimaryGeneratedColumn()
id_menu:number ;
@Column({type: 'varchar',length: 50 ,nullable:false})
name_menu: string;
}
