import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionsMenuEntity } from 'src/permission-menu/domain/entities/permissions-menu.entity';
import { Repository } from 'typeorm';
import { CreatePermissionMenuDto } from '../dto/create-permisions-menu.dto';
import { EditPermissionMenuDto } from '../dto/edit-permissions-menu.dto';


@Injectable()
export class PermissionsMenuService {
    constructor(
        @InjectRepository(PermissionsMenuEntity)
        private readonly PermissionsMenuEntityRepository:Repository<PermissionsMenuEntity>
    ){}
    async getMany(){
        return await this.PermissionsMenuEntityRepository.find()
    }
    async getOne(id_permission_menu: number){
      const permissionMenu = await this.PermissionsMenuEntityRepository.findOne({where:{id_permission_menu}})
      if(!permissionMenu) throw new NotFoundException('permissionsMenu not found')
      return await permissionMenu
    }
    async createOne(dto: CreatePermissionMenuDto){
        const createPermissionMenu = await this.PermissionsMenuEntityRepository.create(dto)
        return await this.PermissionsMenuEntityRepository.save(createPermissionMenu)
    }
    async editOne(id_permission_menu: number, dto: EditPermissionMenuDto){
        const savePermissionMenu= await this.getOne(id_permission_menu)
        const editPermissionMenu = await Object.assign(savePermissionMenu,dto)
        const permissionMenu = await this.PermissionsMenuEntityRepository.save(editPermissionMenu)
        return permissionMenu
    }
    async deleteOne(id_permission_menu:number){
        const permissionMenu = await this.getOne(id_permission_menu)
        return await this.PermissionsMenuEntityRepository.remove(permissionMenu)
    }
}
