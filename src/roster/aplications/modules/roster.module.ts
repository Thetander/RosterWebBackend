import { Module } from '@nestjs/common';
import { RosterController } from 'src/roster/infrastructure/controllers/roster.controller';
import { RosterService } from '../services/roster.service';

@Module({
    controllers: [RosterController],
    providers: [RosterService]
})

export class RosterModule {}
