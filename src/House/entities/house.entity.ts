import {
  IsBoolean,
  IsDateString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  @IsString()
  @MaxLength(15)
  @MinLength(3)
  public address: string;

  @Column()
  @IsBoolean()
  public forSale?: boolean;

  @Column()
  @IsDateString()
  public constructionDate?: Date;

  @ManyToOne(() => User, (user) => user.ownerHouses)
  public owner?: User;
}
