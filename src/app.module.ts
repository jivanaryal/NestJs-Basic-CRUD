import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/products.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'jivan',
      password: 'Jivan@admin123',
      database: 'ecommerce',
      port: 3309,
      logging: false,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
