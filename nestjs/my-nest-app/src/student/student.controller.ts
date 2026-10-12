import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

@Controller('student')
export class StudentController {

  @Get('hello')
  helloWorld() {
    return 'hello world';
  }

  @Get()
  findAll() {
    return 'Find all students';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Find student with id ${id}`;
  }

  @Post()
  insert() {
    return 'Student inserted successfully';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Student with id ${id} updated successfully`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Student with id ${id} deleted successfully`;
  }
}