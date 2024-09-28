import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RosterModule } from './roster/aplications/modules/roster.module';
import { RosterController } from './roster/infrastructure/controllers/roster.controller';
import { RosterService } from './roster/aplications/services/roster.service';
import { RoleModule } from './role/aplications/modules/role.module';
import { EmployeedModule } from './employeed/aplications/modules/employeed.module';
import { EmployeedController } from './employeed/infrastructure/controllers/employeed.controller';
import { EmployeedService } from './employeed/aplications/services/employeed.service';
import { PermissionsModule } from './permissions/aplications/modules/permissions.module';
import { MenuRoleModule } from './menu-role/aplications/modules/menu-role.module';
import { PermissionsMenuModule } from './permission-menu/aplications/modules/permissions-menu.module';
import { EmployeedRoleModule } from './employeed-role/aplications/modules/employeed-role.module';


@Module({
  imports: [EmployeedModule, RosterModule, RoleModule, EmployeedModule, PermissionsModule, MenuRoleModule, PermissionsMenuModule, EmployeedRoleModule],
  controllers: [AppController, EmployeedController, RosterController, EmployeedController, ],
  providers: [AppService, EmployeedService, RosterService, EmployeedService, ],
})
export class AppModule {}
