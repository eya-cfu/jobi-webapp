import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { EmployersModule } from './employers/employers.module';
import { OffersModule } from './offers/offers.module';
import { ApplicationsModule } from './applications/applications.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      /*database: 'jobidb',
      username: 'root',
      password: 'MyNewPass',
      host: 'localhost',
      port: 3306,*/
      url: process.env.CLEARDB_DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    CompaniesModule,
    StudentsModule,
    EmployersModule,
    OffersModule,
    ApplicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
