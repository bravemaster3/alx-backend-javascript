
interface CommonInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
}

interface DirectorInterface extends CommonInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface extends CommonInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  constructor() {
  }

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }

  toString(): string {
    return 'Director';
  }
}


class Teacher implements TeacherInterface {
  constructor() {
  }

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }

  toString(): string {
    return 'Teacher';
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    const teacher1 = new Teacher();
    return teacher1;
  } else {
    const director1 = new Director();
    return director1;
  }
}

function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log((employee as Director).workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  const allowedClasses: Subjects[] = ['Math', 'History'];

  if (allowedClasses.includes(todayClass)) {
    return `Teaching ${todayClass}`;
  }
}
///TESTS
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log(teachClass('Math'));
console.log(teachClass('History'));
