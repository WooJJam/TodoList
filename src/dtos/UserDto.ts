import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    public user_name: string;

    @IsNotEmpty()
    @IsString()
    public user_id:string;

    @IsNotEmpty()
    @IsString()
    public user_password:string;
}

export class LoginUserDto{
    @IsNotEmpty()
    @IsString()
    public user_id: string;

    @IsNotEmpty()
    @IsString()
    public user_password:string;
}