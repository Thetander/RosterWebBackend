//import {hash} from "bcryptjs"
import {
    PrimaryGeneratedColumn,
    Column,
    Entity
} from "typeorm";

@Entity('permissions_menu')
export class PermissionsMenuEntity {
    @PrimaryGeneratedColumn()
    id_permission_menu: number;
    @Column({type: 'int',nullable:false})
    id_permission: number;
    @Column({type: 'int',nullable:false})
    id_menu: number;
}
