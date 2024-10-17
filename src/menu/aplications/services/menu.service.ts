import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuEntity } from 'src/menu/domain/entities/menu.entity';
import { Repository } from 'typeorm';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { EditMenuDto } from '../dto/edit-menu.dto';

@Injectable()
export class MenuService {

    constructor(
        @InjectRepository(MenuEntity)
        private readonly MenuEntityRepository: Repository<MenuEntity>
    ){}

    async getMany(){
        return await this.MenuEntityRepository.find()
    }
    async getOne(id_menu: number){
        const menu = await this.MenuEntityRepository.findOne({where:{id_menu}})
        if(!menu) throw new NotFoundException('menu not found')
        return menu;
    }
    async createOne(dto:CreateMenuDto){
        const createMenu = await this.MenuEntityRepository.create(dto)
        return await this.MenuEntityRepository.save(createMenu)     
    }
    async editOne(id_menu:number , dto:EditMenuDto){
        const menuSave = await this.getOne(id_menu)
        const editMenu = await Object.assign(menuSave,dto )
        const menu = await this.MenuEntityRepository.save(editMenu)
        return menu
    }
    async deleteOne(id_menu:number){
        const menu = await this.getOne(id_menu)
        return await this.MenuEntityRepository.remove(menu)
    }
}
