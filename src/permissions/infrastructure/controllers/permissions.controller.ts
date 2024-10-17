import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePermissionDto } from 'src/permissions/aplications/dto/create-permissions.dto';
import { EditPermissionDto } from 'src/permissions/aplications/dto/edit-permissions.dto';
import { PermissionsService } from 'src/permissions/aplications/services/permissions.service';

@Controller('permissions')
export class PermissionsController {
    constructor(
        private readonly permissionService: PermissionsService
    ){}
    @Get()
    async getMany(){
        const data = this.permissionService.getMany()
        return {message:'All permission Selected' , data}
        
    }
    @Get(':id_permission')
    async getOne(
        @Param('id_permission')
        id_permission: number

    ){
       const data = this.permissionService.getOne(id_permission)
        return {message: 'Selected permission', data}
    }
    @Post()
    async createOne( 
        @Body() dto:CreatePermissionDto)
    {
    const data = this.permissionService.createOne(dto)
    return {message: 'Created Permission',data}
    }
    @Put(':id_permission')
    async editOne(
        @Param('id_permission')
        id_permission: number,
        @Body() dto:EditPermissionDto
    ){
        const data = this.permissionService.editOne(id_permission,dto)
        return {message:'edited permission', data}
    }
    @Delete(':id_permission')
    async deleteOne(
        @Param('id_permission')
        id_permission: number
    ){
        const data = this.permissionService.deleteOne(id_permission)
        return {message: 'delete permission', data}
    }
}
