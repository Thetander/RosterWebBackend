import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMenuDto } from 'src/menu/aplications/dto/create-menu.dto';
import { EditMenuDto } from 'src/menu/aplications/dto/edit-menu.dto';
import { MenuService } from 'src/menu/aplications/services/menu.service';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
constructor(
    private readonly menuService: MenuService
){}

@Get()
    async getMany(){
    const data = await this.menuService.getMany()
    return {message:'All selected Menu',data}
}
@Get(':id_menu')
async getOne(
    @Param('id_menu')
    id_menu: number,
){
  const data = await this.menuService.getOne(id_menu)
  return {message: 'Selected Menu',data}
}
@Post()
async createOne(
    @Body() dto:CreateMenuDto
){
    const data = await this.menuService.createOne(dto)
    return {message: 'Menu created succesfully', data}
}
@Put(':id_menu')
async editOne(
    @Param('id_menu')
      id_menu: number,
    @Body() dto:EditMenuDto
){
const data = await this.menuService.editOne(id_menu,dto)
return{message: 'edited Menu', data}
}
@Delete(':id_menu')
async deleteOne(
    @Param('id_menu')
    id_menu:number
) {
    const data = await this.menuService.deleteOne(id_menu)
    return{message:'deleted menu', data}
}

}
