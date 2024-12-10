import { Injectable } from "@nestjs/common";
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateUserParams {
    name: string;
    email: string;
}

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    listAllUsers() {
        return this.prisma.user.findMany(); 
    }

    async createUser({name, email}: CreateUserParams) {
        const userExist = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });

        if(userExist) {
            throw new Error('User exists, please use another e-mail!')
        }

        return this.prisma.user.create({
            data: {
                name,
                email
            }
        });
    }
}