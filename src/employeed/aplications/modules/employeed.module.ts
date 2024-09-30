import { Module } from '@nestjs/common';
import { EmployeedService } from '../services/employeed.service';
import { EmployeedController } from '../../infrastructure/controllers/employeed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeedEntity } from '../../domain/entities/employeed.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([EmployeedEntity])
    ],
    controllers: [EmployeedController],
    providers: [EmployeedService],
    exports: [EmployeedService],
})
export class EmployeedModule {}
