import { Module } from '@nestjs/common';
import { MenuController } from 'src/menu/infrastructure/controllers/menu.controller';
import { MenuService } from '../services/menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeedEntity } from 'src/employeed/domain/entities/employeed.entity';
import { MenuEntity } from 'src/menu/domain/entities/menu.entity';


@Module({
  imports:[TypeOrmModule.forFeature([MenuEntity])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
