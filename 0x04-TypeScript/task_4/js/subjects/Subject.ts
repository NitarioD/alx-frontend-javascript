/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface ISubject {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  export class Subject implements ISubject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
