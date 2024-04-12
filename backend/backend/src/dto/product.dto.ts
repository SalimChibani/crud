import { IsString, IsNotEmpty } from 'class-validator';

export class ProductDto {
<<<<<<< HEAD
    ProductID: string;

    ProductName: string;
=======
    @IsString()
    @IsNotEmpty()
    ProductID: string;

    @IsString()
    @IsNotEmpty()
    ProductName: string;

    @IsString()
    @IsNotEmpty()
>>>>>>> 9e682a5867e3fb96b8ca020cfe1de1e2b00146f8
    ProductCategory: string; 
}
