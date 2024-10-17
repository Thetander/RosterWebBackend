import { Module } from '@nestjs/common';
import { MenuRoleController } from '../../infrastructure/controllers/menu-role.controller';
import { MenuRoleService } from '../services/menu-role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuRoleEntity } from 'src/menu-role/domain/entities/menu-role.entity';


@Module({
  imports:[TypeOrmModule.forFeature([MenuRoleEntity])],
  controllers: [MenuRoleController],
  providers: [MenuRoleService]
})
export class MenuRoleModule {}
