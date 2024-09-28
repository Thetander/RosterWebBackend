//import {hash} from "bcryptjs"
import { 
    PrimaryGeneratedColumn,
    Column,
    Entity} from "typeorm";
    
@Entity('menu_role')
export class MenuRoleEntity {
    
@PrimaryGeneratedColumn()
id_menu_role:number ;

@Column({type: 'int',nullable:false})
id_role: number;

@Column({type: 'int',nullable:false})
id_menu: number;

}
