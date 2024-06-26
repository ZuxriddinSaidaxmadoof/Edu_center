import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('Auth')
@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("Login")
  login(@Body() createAuthDto: CreateAuthDto) {
    
    return this.authService.login(createAuthDto);
  }

  @Post("Register")
  create(@Body() createAuthDto: CreateAuthDto) {
    
    return this.authService.create(createAuthDto);
  }

  
  @Get()
  findAll() {
    return this.authService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
