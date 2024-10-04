import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity} from '../../domain/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from '../dto/create-role.dto';
import { EditRoleDto } from '../dto/edit-role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly RoleEntityRepository: Repository<RoleEntity >,
    ){}
    async getMany(){
     return await this.RoleEntityRepository.find();
    }
    async getOne(id_role: number){
     const role = await this.RoleEntityRepository.findOne({where:{id_role}})
     if(!role) throw new NotFoundException('Role not found');
     return role;
    }
    async createOne(dto: CreateRoleDto){
     const newRole = await this.RoleEntityRepository.create(dto)
    return await this.RoleEntityRepository.save(newRole)
    }
     async editOne(id_role: number , dto: EditRoleDto){
      const RoleSave = await this.getOne(id_role)
      const editRole = Object.assign(RoleSave , dto)
      const role = await this.RoleEntityRepository.save(editRole)
      return role;
    }
     async deleteOne(id_role: number){
        const role = await this.getOne(id_role)
        const deleterole = await this.RoleEntityRepository.delete(role)
        return deleterole;
     }
}
