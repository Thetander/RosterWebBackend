import { Module } from '@nestjs/common';
import { RoleController } from '../../infrastructure/controllers/role.controller';
import { RoleService } from '../services/role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
