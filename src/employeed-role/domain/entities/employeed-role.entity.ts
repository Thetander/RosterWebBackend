import { 
    PrimaryGeneratedColumn,
    Column,CreateDateColumn,
    Entity} from "typeorm";

    @Entity('employeed_role')
export class EmployeedRoleEntity {

    @PrimaryGeneratedColumn()
    id_user_role: number;
    @Column({type:'int',nullable:false})
    id_role:number;
    @Column({type:'int', nullable:false})
    id_employeed:number;
    
}
