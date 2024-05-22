import { Body, Controller,Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './Entity/user-entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('users')
export class UsersController {
   
    constructor(private usersService: UsersService) { }
    @ApiOkResponse({ type: UserEntity, isArray: true })
    @ApiQuery({ name: 'name', required: false })
    @Get()
    getAll(@Query('name') name: string):UserEntity[] {
        return this.usersService.findAll(name); 
    }
    @ApiOkResponse({ type: UserEntity, })
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.findById(id);
        if (!user) { 
            throw new NotFoundException()
        }
        return user
    }
    @Post()
    @ApiBadRequestResponse()
    @ApiCreatedResponse({ type: UserEntity })
    createUser(@Body() body: CreateUserDto) : any {
        return this.usersService.createUser(body);
    }

  
}
