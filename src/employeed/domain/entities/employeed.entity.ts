import { hash } from "bcryptjs";
import {
    PrimaryGeneratedColumn,
    Column, CreateDateColumn,
    Entity
} from "typeorm";

@Entity('employeed')
export class EmployeedEntity{

    @PrimaryGeneratedColumn()
    id_employeed: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: false })

    last_name: string;
    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string;
    
    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ type: 'int', nullable: false })
    Basic_salary: number;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAT: Date;
}
