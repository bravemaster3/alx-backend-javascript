namespace Subjects {
  export class Subject {
    protected _teacher: Teacher | undefined;

    constructor(teacher: Teacher) {
      this._teacher = teacher;
    }

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
