import { Module } from '@nestjs/common';
import { EmployeedRoleController } from 'src/employeed-role/infrastructure/controllers/employeed-role.controller';
import { EmployeedRoleService } from '../services/employeed-role.service';

@Module({
  controllers: [EmployeedRoleController],
  providers: [EmployeedRoleService]
})
export class EmployeedRoleModule {}
