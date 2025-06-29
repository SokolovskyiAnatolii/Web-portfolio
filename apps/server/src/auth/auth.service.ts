import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(profile: {
    id: string;
    displayName: string;
    emails?: { value: string }[];
    photos?: { value: string }[];
  }): Promise<User> {
    const { id, displayName, emails, photos } = profile;

    let user = await this.prisma.user.findUnique({
      where: { googleId: id },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          googleId: id,
          name: displayName,
          email: emails?.[0]?.value || '',
          avatarUrl: photos?.[0]?.value || '',
        },
      });
    }

    return user;
  }

  async login(user: User): Promise<{ access_token: string; user: User }> {
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
      user,
    };
  }
}
