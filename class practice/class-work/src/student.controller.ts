import { Controller, Delete, Get, Param } from "@nestjs/common";

@Controller('student')
export class StudentController {
    @Get()
    getAll(): string {
        return 'List of all students';
    }

    @Get('/:id')
    getById(@Param('id') id: string): string {
        return 'Details of student with id=' + id;
    }

    @Delete('/:id')
    delete(@Param('id') id: string): string {
        return 'Delete the student with id=' + id;
    }

}