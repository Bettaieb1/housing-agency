import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { House } from 'src/House/entities/house.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ unique: true })
  @IsEmail()
  public email: string;

  @Column()
  public hashedPassword: string;

  @Column()
  @IsNumber()
  public age: number;

  @Column()
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  public firstName: string;

  @Column()
  @IsString()
  @MinLength(2)
  @MaxLength(15)
  public lastName: string;

  @OneToMany(() => House, (house) => house.owner, { cascade: true })
  public ownerHouses?: House[];
}
