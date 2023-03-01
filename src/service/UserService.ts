import { Service } from "typedi";
import { CreateUserDto, LoginUserDto } from "../dtos/UserDto";
import { UserRepository } from "../repositories/UserRepository";

@Service()
export class UserService{
    constructor(private userRepository: UserRepository){}

    public async register(createUserDto:CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    public async login(id:string, pw:string) {
        return this.userRepository.login(id, pw);
    }

}