import { Module } from '@nestjs/common';
import { EmployeedService } from '../services/employeed.service';
import { EmployeedController } from '../../infrastructure/controllers/employeed.controller';

@Module({
    controllers: [EmployeedController],
    providers: [EmployeedService]
})
export class EmployeedModule {}
