function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  const students = [];
  for (let i = 0; i < numbersOfStudents; i += 1) {
    students.push(studentSeat(i + 1));
  }

  return students;
}

const classRoom = createClassRoom(10);
