import { IsOptional } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsOptional()
  firstName?: string;

  @Field()
  @IsOptional()
  lastName?: string;
  
  @Field()
  @IsOptional()
  profilePicture?: string;
}
