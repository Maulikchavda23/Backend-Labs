import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StudentController } from './student/student.controller.js';
import { StudentModule } from './student/student.module.js';

@Module({
  imports: [StudentModule],
  controllers: [AppController, StudentController], // Make sure AppController is here
  providers: [AppService],
})
export class AppModule {}