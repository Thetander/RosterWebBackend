import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMenuRoleDto } from 'src/menu-role/aplications/dto/create-menu-role.dto';
import { EditMenuRoleDto } from 'src/menu-role/aplications/dto/edit-menu-role.dto';
import { MenuRoleService } from 'src/menu-role/aplications/services/menu-role.service';

@ApiTags('menu-role')
@Controller('menu-role')
export class MenuRoleController {
    constructor(
        private readonly MenuRoleService: MenuRoleService
    ){} 
@Get()
async getMany(){
    const data = await this.MenuRoleService.getMany()
    return {message: 'All menuRole Selected', data }
}
@Get(':id_menu_role')
async getOne(
    @Param('id_menu_role')
    id_menu_role: number    
){
    const data = await this.MenuRoleService.getOne(id_menu_role)
    return{message:'Selected MenuRole', data }
}
@Post()
async createOne(
    @Body() dto:CreateMenuRoleDto
){
    const data = await this.MenuRoleService.createOne(dto)
    return{message: 'MenuRole created succesfully', data}

}
@Put(':id_menu_role')
async editOne(
    @Param('id_menu_role')
    id_menu_role: number,
    @Body() dto: EditMenuRoleDto
){
    const data = await this.MenuRoleService.editOne(id_menu_role,dto)
    return {message:'edited MenuRole',data}
}
@Delete(':id_menu_role')
async deleteOne(
    @Param('id_menu_role')
    id_menu_role:number
){
    const data = await this.MenuRoleService.deleteOne(id_menu_role)
    return {message:'deleted MenuRole', data}
}
}
