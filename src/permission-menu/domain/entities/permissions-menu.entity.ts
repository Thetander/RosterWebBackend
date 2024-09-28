//import {hash} from "bcryptjs"
import {
    PrimaryGeneratedColumn,
    Column,
    Entity
} from "typeorm";

@Entity('permissions_menu')
export class PermissionsMenuEntity {
    @PrimaryGeneratedColumn()
    id_permission: number;
    @Column({ type: 'varchar', length: 50, nullable: false })
    name_permission: string;
}
