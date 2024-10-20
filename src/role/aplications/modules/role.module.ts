import { Module } from '@nestjs/common';
import { RoleController } from '../../infrastructure/controllers/role.controller';
import { RoleService } from '../services/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/role/domain/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
