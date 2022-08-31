import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "store",
    synchronize: true,
    logging: false,
    entities: [Student]
  }) , StudentsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
