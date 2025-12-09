import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserProfile)
    private readonly userProfileRepo: Repository<UserProfile>,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const existing = await this.userRepo.findOne({
      where: [{ email: createUserInput.email }],
    });
    if (existing) {
      throw new ConflictException('Username or email already exists');
    }
    const newUser = this.userRepo.create({ ...createUserInput, profile: {} });
    const savedUser = await this.userRepo.save(newUser);
    return savedUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
