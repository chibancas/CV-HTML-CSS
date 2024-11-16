import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly UsersRepository:Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    try {
      const user= this.UsersRepository.create(createUserDto)
      await this.UsersRepository.save(user)
      // return{
      //   msg:'Formulario enviado correctamente.',
      //   user
      // }
      // return user
      return 'user'
    } catch (error) {
      throw new InternalServerErrorException(
        'Fallo al enviar datos del usuario.'
      )
    }  
  }

  async findAll() {
    // return `This action returns all users`;
    const users= await this.UsersRepository.find()
    return users
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
