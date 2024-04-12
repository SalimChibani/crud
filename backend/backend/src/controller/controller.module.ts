import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllersService } from './controller.service';
import { CategorySchema } from 'src/model/category.model';
import { CategoriesService } from '../categories/categories.service'; // Correct import path for CategoriesService
import { ControllerSchema } from 'src/model/controller.dto';
import { ControllerController } from './controller.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Controller', schema: ControllerSchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  controllers: [ControllerController],
  providers: [ControllersService, CategoriesService], // Include CategoriesService in providers
})
export class ControllersModule {}
