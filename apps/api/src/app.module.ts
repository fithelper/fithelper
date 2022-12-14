import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configurations/app.configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/users.module';
import { WeightModule } from './modules/weight/weight.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('database'),
    }),
    UsersModule,
    WeightModule,
    AuthModule,
  ],
})
export class AppModule {}
