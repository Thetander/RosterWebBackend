import { Module } from '@nestjs/common';
import { MenuRoleController } from '../../infrastructure/controllers/menu-role.controller';
import { MenuRoleService } from '../services/menu-role.service';


@Module({
  controllers: [MenuRoleController],
  providers: [MenuRoleService]
})
export class MenuRoleModule {}
