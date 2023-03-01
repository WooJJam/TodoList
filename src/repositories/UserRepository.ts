import {Service} from "typedi";
import { CreateUserDto, LoginUserDto } from "../dtos/UserDto";
import {User} from "../models"
@Service()

export class UserRepository{
    public async create(createUserDto: CreateUserDto) {
        const user = await new User({
            id : createUserDto.user_id,
            name : createUserDto.user_name,
            password : createUserDto.user_password
        })
        // user.save();
        return user;
    }

    public async login(id:string, pw:string) {
        const result = await User.findOne({user_id:id, password:pw}).exec();
        console.log(result);
        return result;
    }

}
