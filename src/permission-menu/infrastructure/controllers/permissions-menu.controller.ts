import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { REPLCommand } from 'repl';
import { CreatePermissionMenuDto } from 'src/permission-menu/aplications/dto/create-permisions-menu.dto';
import { EditPermissionMenuDto } from 'src/permission-menu/aplications/dto/edit-permissions-menu.dto';
import { PermissionsMenuService } from 'src/permission-menu/aplications/services/permissions-menu.service';
import { EditPermissionDto } from 'src/permissions/aplications/dto/edit-permissions.dto';
import { Repository } from 'typeorm';
@ApiTags('permissions-menu')
@Controller('permissions-menu')
export class PermissionsMenuController {
    constructor(
        private readonly PermissionMenuService:PermissionsMenuService
    ){}
@Get()
async getMany(){
      const data = await this.PermissionMenuService.getMany()
      return {message:'All permissionMenu Selected', data }
}
@Get(':id_permissiom_menu')
async getOne(
    @Param('id_permission_menu')
    id_permission_menu: number
){
    const data = await this.PermissionMenuService.getOne(id_permission_menu)
    return {message:'Selected permissionMenu' , data}
} 
@Post()
async createOne(
    @Body() dto: CreatePermissionMenuDto
){
    const data = await this.PermissionMenuService.createOne(dto)
    return{message:'Created permissionMenu', data}
}
@Put(':id_permission_menu')
async editOne(
    @Param('id_permission_menu')
    id_permission_menu:number,
    @Body() dto:EditPermissionMenuDto
){
    const data = await this.PermissionMenuService.editOne(id_permission_menu,dto)
    return {message:'Edited PermissionMenu', data}
}
@Delete(':id_permission_menu')
async deleteOne(
    @Param('id_permission_menu')
    id_permission_menu:number
){
const data  = await this.PermissionMenuService.deleteOne(id_permission_menu)
return {message:'Deleted permissionMenu',data}
}
}
