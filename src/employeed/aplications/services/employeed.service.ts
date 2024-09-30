import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeedDto } from '../dto/create-employeed.dto';
import { EmployeedEntity } from '../../../employeed/domain/entities/employeed.entity';
import { Repository } from 'typeorm';
import { EditEmployeedDto } from '../dto/edit-employeed.dto';
import { identity } from 'rxjs';


export interface EmployeedFindOne {
    id_employeed?: number;
    email?: string;
}
@Injectable()
export class EmployeedService {
    constructor(
        @InjectRepository(EmployeedEntity)
        private readonly EmployeedEntityRepository: Repository<EmployeedEntity>
    ){}    
    async getMany() {
        return await this.EmployeedEntityRepository.find();
    }
    
    async getOne(id_employeed:number){
        return await this.EmployeedEntityRepository.findOne({where: {id_employeed}});
    }
    async createOne(dto: CreateEmployeedDto){
        const employeedExist = await this.EmployeedEntityRepository.findOne({ where: { email: dto.email } });
        if(employeedExist) throw new BadRequestException('User already registered with email');

        const newEmployeed = this.EmployeedEntityRepository.create(dto);
        const employeed = await this.EmployeedEntityRepository.save(newEmployeed);
        delete employeed.password;
        return employeed;
    }

    async editOne(id_employeed:number,dto: EditEmployeedDto){
        const employeedsaved = await this.getOne(id_employeed) // buscar el id 
        const editedEmployeed = Object.assign(employeedsaved, dto) //edit 
        const employeed = await this.EmployeedEntityRepository.save(editedEmployeed)
        delete employeed.password;
        return employeed;
    }
    async deleteOne(id_employeed:number){
        const employeedDelete = await this.getOne(id_employeed)
        return await this.EmployeedEntityRepository.remove(employeedDelete);
    }
    
    
}
