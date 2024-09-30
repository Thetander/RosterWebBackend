import { 
    PrimaryGeneratedColumn,
    Column,
    Entity,
    Collection} from "typeorm";
    @Entity('roster')
export class RosterEntity {
    @PrimaryGeneratedColumn()
    id_roster:number;
    @Column({type:'int' , nullable:false})
    id_employeed:number;
    @Column({type:'int' , nullable:false})
    gross_salary:number;
    @Column({type:'int' , nullable:false})
    net_salary:number;
    @Column({type:'int' , nullable:false})
    net_late:number;
    @Column({type:'date'})
    
    @Column({type: 'varchar', length:50, nullable:false})
    name_roster:string;

}
