import { OmitType } from '@nestjs/mapped-types';
import { House } from '../entities/house.entity';

export class CreateHouseDto extends OmitType(House, ['id'] as const) {}
