import { Module } from '@nestjs/common';
import { RosterController } from 'src/roster/infrastructure/controllers/roster.controller';
import { RosterService } from '../services/roster.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RosterEntity } from 'src/roster/domain/entities';

@Module({
    imports:[TypeOrmModule.forFeature([RosterEntity])],
    controllers: [RosterController],
    providers: [RosterService]
})

export class RosterModule {}
