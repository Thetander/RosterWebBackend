import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/role/aplications/dto/create-role.dto';
import { EditRoleDto } from 'src/role/aplications/dto/edit-role.dto';
import { RoleService } from 'src/role/aplications/services/role.service';

@ApiTags('role')
@Controller('role')
export class RoleController {

    constructor(
      private readonly RoleService:RoleService
    ){

    }

    @Get()
    async getMany(){
          const data = await this.RoleService.getMany()
          return {data}
    }
@Get(':id_role')
async getOne(
    @Param('id_role')
    id_role:number
){
    const data = await this.RoleService.getOne(id_role)
    return {data}
}
@Post()
async createOne(
    @Body() dto:CreateRoleDto
){
    const data = await this.RoleService.createOne(dto)
    return {message: 'create role ' , data}
}
 @Put(':id_role')
 async editOne(
    @Param('id_role') id_role:number,
    @Body() dto: EditRoleDto
 ){
    const data = await this.RoleService.editOne(id_role, dto)
    return{message: 'role edited', data}
 }
 @Delete(':id_role')
 async deleteOne(
    @Param('id_role') id_role: number
 ){
    const data = await this.RoleService.deleteOne(id_role)
    return{message: 'role delete', data}
 }




}
