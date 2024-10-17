import { Module } from '@nestjs/common';
import { PermissionsMenuController } from '../../infrastructure/controllers/permissions-menu.controller';
import { PermissionsMenuService } from '../services/permissions-menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsMenuEntity } from 'src/permission-menu/domain/entities/permissions-menu.entity';


@Module({
  imports:[TypeOrmModule.forFeature([PermissionsMenuEntity])],
  controllers: [PermissionsMenuController],
  providers: [PermissionsMenuService]
})
export class PermissionsMenuModule {}
