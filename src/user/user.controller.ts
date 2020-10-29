import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  HttpStatus,
  Put,
  Delete,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { UserService } from './user.service';

import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  public async findAll() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  public async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Put('/:id')
  public async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: UpdateUserDto,
  ) {
    const { affected } = await this.userService.updateOne(id, updateServiceDto);
    if (affected > 0) {
      return this.userService.findOne(id);
    } else {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('/:id')
  public async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const { affected } = await this.userService.remove(id);
    if (affected > 0) {
      return;
    } else {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
