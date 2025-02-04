import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserParams {
  name?: string;
  email?: string;
  password?: string;
}

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  listAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser({ name, email, password }: CreateUserParams) {
    const userExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error('User exists, please use another e-mail!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

  async updateUser(id: string, { name, email, password }: UpdateUserParams) {
    const userExist = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userExist) {
      throw new Error('User not found!');
    }

    const updateData: UpdateUserParams = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}