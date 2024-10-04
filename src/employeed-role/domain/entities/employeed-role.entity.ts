import { 
    PrimaryGeneratedColumn,
    Column,
    Entity} from "typeorm";

    @Entity('employeed_role')
export class EmployeedRoleEntity {

    @PrimaryGeneratedColumn()
    id_employeed_role: number;
    @Column({type:'int',nullable:false})
    id_role:number;
    @Column({type:'int', nullable:false})
    id_employeed:number;
    
}
