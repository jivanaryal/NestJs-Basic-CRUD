import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './products/products.module';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.PORT, process.env.DATABASE, process.env.USERNAME);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This ensures .env variables are available everywhere
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      username: process.env.NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: Number(process.env.PORT), // Convert port to number
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
