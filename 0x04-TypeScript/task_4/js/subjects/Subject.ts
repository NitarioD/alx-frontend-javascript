/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // prettier-ignore
    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
