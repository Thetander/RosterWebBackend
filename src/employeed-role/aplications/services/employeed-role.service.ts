import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeedRoleEntity } from 'src/employeed-role/domain/entities';
import { Repository } from 'typeorm';
import { CreateEmployeedRoleDto, EditEmployeedRoleDto } from '../dto';

@Injectable()
export class EmployeedRoleService {
    constructor(
        @InjectRepository(EmployeedRoleEntity)
        private readonly  EmployeedRoleEntityRepository: Repository<EmployeedRoleEntity>
    ){}
     
    async getMany(){
         return await this.EmployeedRoleEntityRepository.find();
    }
    async getOne(id_employeed_role:number){
         const role = await this.EmployeedRoleEntityRepository.findOne({where:{id_employeed_role}})
          if (!role) throw new NotFoundException('Role not found');
          return role;
    }
    async createOne(dto: CreateEmployeedRoleDto){
          const newRole = await this.EmployeedRoleEntityRepository.create(dto)
          return await this.EmployeedRoleEntityRepository.save(newRole)
    }
    async editOne(id_employeed_roley: number, dto: EditEmployeedRoleDto){
          const employeedRoleSave = await this.getOne(id_employeed_roley)
          const editedEmployeedRole = Object.assign(employeedRoleSave, dto)
          const employeedRole = await this.EmployeedRoleEntityRepository.save(editedEmployeedRole)
          return employeedRole;
    } 
    async deleteOne(id_employeed_role:number){
      const employeedRole = await this.getOne(id_employeed_role)
      const employeed = await this.EmployeedRoleEntityRepository.remove(employeedRole)
      return employeed;
    }
}
