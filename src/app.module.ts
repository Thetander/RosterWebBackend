import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { RosterModule } from './roster/aplications/modules/roster.module';
import { RoleModule } from './role/aplications/modules/role.module';
import { EmployeedModule } from './employeed/aplications/modules/employeed.module';
import { PermissionsModule } from './permissions/aplications/modules/permissions.module';
import { MenuRoleModule } from './menu-role/aplications/modules/menu-role.module';
import { PermissionsMenuModule } from './permission-menu/aplications/modules/permissions-menu.module';
import { EmployeedRoleModule } from './employeed-role/aplications/modules/employeed-role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constants';

import { MenuModule } from './menu/aplications/modules/menu.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        // configurar 
        type: 'postgres',
        host: config.get<string>(DATABASE_HOST),
        port: parseInt(config.get<string>(DATABASE_PORT), 10),
        username: config.get<string>(DATABASE_USERNAME),
        password: config.get<string>(DATABASE_PASSWORD),
        database: config.get<string>(DATABASE_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: process.env.POSTGRES_SSL === "true",
        extra: {
          ssl:
            process.env.POSTGRES_SSL === "true"
              ? {
                rejectUnauthorized: false,
              }
              : null,
        },
      })
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    EmployeedModule, 
    RosterModule, 
    RoleModule, 
    PermissionsModule, 
    MenuRoleModule, 
    PermissionsMenuModule, 
    EmployeedRoleModule,
  MenuModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
