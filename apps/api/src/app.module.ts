import { FitHelperApiAuthModule } from '@fithelper/fit-helper-api//auth';
import { FitHelperApiUsersModule } from '@fithelper/fit-helper-api//users';
import { FitHelperApiWeightsModule } from '@fithelper/fit-helper-api//weights';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './configurations/app.configuration';

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
    FitHelperApiUsersModule,
    FitHelperApiWeightsModule,
    FitHelperApiAuthModule
  ],
})
export class AppModule {}
