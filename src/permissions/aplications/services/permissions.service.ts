import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionsEntity } from 'src/permissions/domain/entities/permissions.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from '../dto/create-permissions.dto';
import { permission } from 'process';
import { EditEmployeedDto } from 'src/employeed/aplications/dto/edit-employeed.dto';
import { EditPermissionDto } from '../dto/edit-permissions.dto';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(PermissionsEntity)
        private readonly PermissionEntityRepository: Repository<PermissionsEntity>
    ){}
    async getMany(){
        return await this.PermissionEntityRepository.find()
    }
    async getOne(id_permission:number){
        const permission = await this.PermissionEntityRepository.findOne({where:{id_permission}})
        if(!permission) throw new NotFoundException('permission not found')
        return permission
    }
    async createOne(dto: CreatePermissionDto){
        const permission =  this.PermissionEntityRepository.create(dto)
        return await this.PermissionEntityRepository.save(permission)
   
    }
    async editOne(id_permission: number , dto:EditPermissionDto){
        const permissionSave = this.getOne(id_permission)
        const editpermission = await Object.assign(permissionSave,dto)
        const permission = await this.PermissionEntityRepository.save(editpermission)
        return permission
    }
    async deleteOne(id_permission: number){
        const permission = await this.getOne(id_permission)
        return await this.PermissionEntityRepository.remove(permission)
    } 
}
