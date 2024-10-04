import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeedRoleDto, EditEmployeedRoleDto } from 'src/employeed-role/aplications/dto';
import { EmployeedRoleService } from 'src/employeed-role/aplications/services/employeed-role.service';



@ApiTags('employeed-role')
@Controller('employeed-role')
export class EmployeedRoleController {
constructor(
    private readonly employeedRoleService : EmployeedRoleService
){}

@Get()
async getmany(){
    const data = await this.employeedRoleService.getMany()
    return {data}

}
@Get(':id_employeedRole')
async getOne(
    @Param('id_employeedRole')
    id_employeedRole: number
){
     const data = await this.employeedRoleService.getOne(id_employeedRole)
     return {data}
 
}
@Post()
async createOne(
    @Body() dto:CreateEmployeedRoleDto
){
    const data = await this.employeedRoleService.createOne(dto)
    return{message: 'employeedRole create',data}
}
@Put(':id_employeedRole')
async editOne(
    @Param('id_employeedRole') id_employeedRole:number,
    @Body() dto:EditEmployeedRoleDto
){
    const data = await this.employeedRoleService.editOne(id_employeedRole,dto)
    return {messagee: 'EmployeedRole Edited',data}
}
@Delete(':id_employeedRole')
async deleteOne(
    @Param('id_employeedRole') id_employeedRole:number
){
    const data = await this.employeedRoleService.deleteOne(id_employeedRole)
    return {message: 'EmployeedRole deleted', data}

}
}
