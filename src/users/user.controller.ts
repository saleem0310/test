import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Put,
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { CreateProfileDto } from './dtos/CreateProfile.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getUsers() {
    const users = await this.userService.findUsers();
    return users;
  }

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
