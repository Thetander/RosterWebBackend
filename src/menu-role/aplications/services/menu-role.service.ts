import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuRoleEntity } from 'src/menu-role/domain/entities/menu-role.entity';
import { CreateMenuDto } from 'src/menu/aplications/dto/create-menu.dto';
import { Repository } from 'typeorm';
import { CreateMenuRoleDto } from '../dto/create-menu-role.dto';
import { EditMenuRoleDto } from '../dto/edit-menu-role.dto';

@Injectable()
export class MenuRoleService {
    constructor(
        @InjectRepository(MenuRoleEntity)
        private readonly MenuRoleEntityRepository: Repository<MenuRoleEntity>
    ){}
   async getMany(){
    return await this.MenuRoleEntityRepository.find();
   }
   async getOne(id_menu_role: number){
        const menuRole = await this.MenuRoleEntityRepository.findOne({where:{id_menu_role}})
        if(!menuRole) throw new NotFoundException('menuRole not found')
        return menuRole;
    }
   async createOne(dto: CreateMenuRoleDto){
    const createMenuRole = await this.MenuRoleEntityRepository.create(dto)
    return await this.MenuRoleEntityRepository.save(createMenuRole)
   }
   async editOne(id_menu_role:number, dto: EditMenuRoleDto){
    const SaveMenuRole =  await this.getOne(id_menu_role);
    const EditMenuRole = await Object.assign(SaveMenuRole, dto)
    const menuRole = await this.MenuRoleEntityRepository.save(EditMenuRole)
    return menuRole
   }    
   async deleteOne(id_menu_Role:number){
    const menuRole = await this.getOne(id_menu_Role)
    return await this.MenuRoleEntityRepository.remove(menuRole)
   }
}
