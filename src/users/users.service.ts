import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './Entity/user-entity';

@Injectable()
export class UsersService {
    private users: UserEntity[]=[{id:1, name:'John'},{id:2, name:'Jane'}];
    findAll(name?: string): UserEntity[]{
        if(name){
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }
    findById(id: number):UserEntity {
        return this.users.find(user => user.id === id);
    }
    createUser(createUserDto:CreateUserDto):UserEntity[] {
        const newuser = {
            id: this.users.length + 1,
            ...createUserDto
        }
        this.users.push(newuser);
        return this.users;
    }
}
