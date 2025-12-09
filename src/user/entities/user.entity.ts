import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  password: string;

  @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true })
  @Field(() => UserProfile)
  profile: User;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
