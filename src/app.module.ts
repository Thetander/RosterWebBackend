import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/aplications/modules/user.module';
import { UserService } from './user/aplications/services/user.service';
import { UserController } from './user/infrastructure/controllers/user.controller';
import { RosterModule } from './roster/aplications/modules/roster.module';
import { RosterController } from './roster/infrastructure/controllers/roster.controller';
import { RosterService } from './roster/aplications/services/roster.service';
import { RoleModule } from './role/aplications/modules/role.module';

@Module({
  imports: [UserModule, RosterModule, RoleModule],
  controllers: [AppController, UserController, RosterController, ],
  providers: [AppService, UserService, RosterService, ],
})
export class AppModule {}
