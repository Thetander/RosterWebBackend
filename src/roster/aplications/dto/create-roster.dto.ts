import { IsInt } from "class-validator";


export class CreateRosterDto {
    @IsInt()
    id_employeed:number;
}
// @Column({type:'int' , nullable:false})
// id_employeed:number;
// @Column({type:'int' , nullable:false})
// gross_salary:number;
// @Column({type:'int' , nullable:false})
// net_salary:number;
// @Column({type:'int' , nullable:false})
// net_late:number;
// @Column({type:'date'})

// @Column({type: 'varchar', length:50, nullable:false})
// name_roster:string;