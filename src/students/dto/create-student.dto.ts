import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"

export class CreateStudentDto {
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string

    @IsNotEmpty()
    @IsNumber()
    media: number

    @IsNotEmpty()
    @IsNumber()
    registration: number
}
