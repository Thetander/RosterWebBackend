import { Module } from '@nestjs/common';
import { PermissionsMenuController } from '../../infrastructure/controllers/permissions-menu.controller';
import { PermissionsMenuService } from '../services/permissions-menu.service';


@Module({
  controllers: [PermissionsMenuController],
  providers: [PermissionsMenuService]
})
export class PermissionsMenuModule {}
