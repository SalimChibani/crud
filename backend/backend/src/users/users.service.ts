import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
<<<<<<< HEAD
import { faker } from "@faker-js/faker";
import { User, UserDocument } from "src/model/users.models";
import { UserDto } from "src/dto/user.dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async Add(body: UserDto) {
        return this.userModel.create(body); 
    }

    async FindAll() {
        return this.userModel.find(); 
    }

    async FindOne(id: string) {
        return this.userModel.findOne({_id: id}); 
    }

    async Update(id: string, body: UserDto) {
        return this.userModel.findByIdAndUpdate(
            id,
            body,
            { new: true },
        ); 
    }

  
    async Search(key: string) {
        const keyword = key ? {
            $or: [
                { fullname: { $regex: key, $options: 'i' } },
                { email: { $regex: key, $options: 'i' } },
            ],
        } : {}; 

        return this.userModel.find(keyword); 
    }

    async Faker() {
        for (let index = 0; index < 30; index++) {
            const fakerUser = {
                fullname: faker.name.fullName(), 
                email: faker.internet.email(),
                age: 30,
            }; 

            await this.userModel.create(fakerUser); // Ensure await here
        }
        
        return 'success';
    }
=======
import { UserDto } from "src/dto/user.dto";
import { User, UserDocument } from "src/model/users.models";
import { faker } from "@faker-js/faker";
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private usermodel: Model<UserDocument>){}
    Add(body: UserDto){
        return this.usermodel.create(body); 
    }
    FindAll(){
        return this.usermodel.find(); 
    }
    FindOne(id :string){
        return this.usermodel.findOne({_id: id}); 
    }
    Update(id: string, body:UserDto){
        return this.usermodel.findByIdAndUpdate(
            {_id: id},
            {$set: body },
            { new: true },
            ); 
    }
     Delete(id: string): Promise<any> {
        return this.usermodel.deleteOne({ _id: id });
      }
    Search(key: string){
        const keyword = key ? {
            $or: [{fullname: {$regex: key, $options: 'i'}},
            {email: {$regex: key, $options: 'i'}},],
        } : {} ; 
        return this.usermodel.find(keyword) ; 
    }
 Faker(){
     for (let index = 0; index < 30 ; index++) {
        const fakeruser = {
            fullname: faker.name.fullName(), 
            email: faker.internet.email(),
            age: 30,
        }; 
        this.usermodel.create(fakeruser)
        
    }
    return'succes';
 }
>>>>>>> 9e682a5867e3fb96b8ca020cfe1de1e2b00146f8
}
