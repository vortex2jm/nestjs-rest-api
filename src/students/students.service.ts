import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>
  ){}

  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create(createStudentDto);
    return this.studentRepo.save(student)
  }

  findAll() {
    return this.studentRepo.find();
  }

  findOne(id: number) {
    return this.studentRepo.findOneBy({id: id});
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    
    const updateRes = await this.studentRepo.update(id, updateStudentDto)
    if(!updateRes.affected){
      throw new EntityNotFoundError(Student, id)
    }
    return this.studentRepo.findOneBy({id: id});
  }

  async remove(id: number) {
    const deleteRes = await this.studentRepo.delete(id);
    if(!deleteRes.affected){
      throw new EntityNotFoundError(Student, id)
    }
  }
}
