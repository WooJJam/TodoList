import {Service} from 'typedi';
import 'reflect-metadata';
import { Body, Delete, Get, HttpCode, JsonController, Render, Param, Patch, Post, QueryParam, QueryParams, Req, Res, Session, SessionParam, UseBefore} from 'routing-controllers';
import {UserService} from "../service/UserService";
import { CreateUserDto, LoginUserDto } from '../dtos/UserDto';
import {Request, Response} from 'express';

@JsonController() // /auth/register 에서 auth
@Service() // Container에 담기 위해서 써줘야함

export class UserController{
    constructor(private userSerivce: UserService) {};

    @HttpCode(200)
    @Get('/')

// 회원가입
    @HttpCode(200)
    @Post('/users')
    public async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userSerivce.register(createUserDto);
    }

    @HttpCode(200)
    @Get('/users')
    public async loginUser(@QueryParam('user_id') id: string, @QueryParam('user_password') pw: string) {
        console.log(id, pw);

        return await this.userSerivce.login(id,pw);
    }

    // @HttpCode(200)
    // @Get('/logout')
    // public async logoutUser(@Req() req:Request) {
    //     console.log(req.session.email);
    //     req.session.destroy(function(err:Error) {
    //         if(err) { throw err }
    //     })
    //     return {
    //         message: "Complete"
    //     }
    // }
}   