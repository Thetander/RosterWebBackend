import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { identity } from 'rxjs';
import { CreateEmployeedDto } from 'src/employeed/aplications/dto/create-employeed.dto';
import { EditEmployeedDto } from 'src/employeed/aplications/dto/edit-employeed.dto';


import { EmployeedService } from 'src/employeed/aplications/services/employeed.service';

@ApiTags('employeed')
@Controller('employeed')
export class EmployeedController {
  constructor (
    private readonly employeedService:EmployeedService
  ){}

@Get()
async getMany(){
    const data = await this.employeedService.getMany()
    return {data};
}
@Get(':id_employeed')
async getOne(
    @Param('id_employeed')
    id_employeed:number,
){
    const data = await this.employeedService.getOne(id_employeed)
    return {data}
}

@Post()
async createOne(
    @Body() dto:CreateEmployeedDto){
    const data = await this.employeedService.createOne(dto)
    return{message: 'User create', data}
}
@Put(':id_employeed')
async editOne(
    @Param('id_employeed') id_employeed: number,
    @Body() dto:EditEmployeedDto
){
const data = await this.employeedService.editOne(id_employeed,dto);
return {message: 'User edited', data}
}
@Delete(':id_employeed')
async DeleteOne(
    @Param('id_employeed') id_employeed:number
)
{
const data = await this.employeedService.deleteOne(id_employeed);
   return {message: 'User deleted', data}
}


}

