import { Module } from '@nestjs/common';
import { EmployeedRoleController } from 'src/employeed-role/infrastructure/controllers/employeed-role.controller';
import { EmployeedRoleService } from '../services/employeed-role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeedEntity } from 'src/employeed/domain/entities/employeed.entity';
import { EmployeedRoleEntity } from 'src/employeed-role/domain/entities';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeedRoleEntity])],
  controllers: [EmployeedRoleController],
  providers: [EmployeedRoleService]
})
export class EmployeedRoleModule {}
