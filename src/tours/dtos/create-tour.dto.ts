import { IsNotEmpty, IsString, Length, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  price: number;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  category: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  continent: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  imageMain: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  imageGallery: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  longDescription: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    return parseInt(value, 10);
  })
  tourDurationDays: number;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  tags: string;
}