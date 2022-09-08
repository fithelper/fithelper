
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerConfiguration = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('fithelper API')
    .setDescription('welcome to fitHelper API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
