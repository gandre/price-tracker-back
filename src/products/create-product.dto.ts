import { IsNotEmpty, IsString, IsUrl, IsOptional, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio.' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres.' })
  nombre?: string;

  @IsUrl({}, { message: 'La URL de la tienda debe ser un enlace válido (ej: https://tienda.com).' })
  @IsNotEmpty({ message: 'La URL de la tienda es obligatoria.' })
  urlTienda?: string;

  @IsUrl({}, { message: 'La imagen debe ser una URL válida.' })
  @IsOptional()
  imagen?: string;
}
