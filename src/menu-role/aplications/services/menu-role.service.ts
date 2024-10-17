import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuRoleEntity } from 'src/menu-role/domain/entities/menu-role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRoleService {
    constructor(
        @InjectRepository(MenuRoleEntity)
        private readonly MenuRoleEntityRepository: Repository<MenuRoleEntity>
    ){}
   async getMany(){}
   async getOne(){}
   async createOne(){}
   async editOne(){}
   async deleteOne(){}
   
}
