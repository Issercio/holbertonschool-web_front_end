# JavaScript Advanced

This project introduces advanced JavaScript concepts with a focus on scoping, closures, and functional patterns.

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files must end with a new line
- Code uses the .js extension
- A README.md at the root of the project folder is mandatory

## Tasks
### 0. Lexical scoping and welcome message
Create a function `welcome(firstName, lastName)` that:
- Defines a variable `fullName` with the value "firstName lastName"
- Defines a nested function `displayFullName()` that displays an alert:
  `Welcome <fullName>!`
- Calls `displayFullName()` inside `welcome`

**File:**
- [0-welcome.js](0-welcome.js)

### 1. Closure Scope Chain
Create a variable `globalVariable` with value `Welcome`. Create a function `outer()` that:
- Alerts `globalVariable`
- Creates a variable `course` with value `Holberton`
- Creates a function `inner()` that:
   - Alerts `globalVariable` and `course` (concatenated with a space)
   - Creates a variable `exclamation` with value `!`
   - Creates a function `inception()` that alerts `globalVariable`, `course`, and `exclamation`
   - Calls `inception()`
- Calls `inner()`
- Call `outer()` in the main code

**File:**
- [1-nested_functions.js](1-nested_functions.js)

### 2. Closure
Write a function `welcomeMessage(fullName)` that returns a closure alerting `Welcome <fullName>`.
Create:
- `guillaume` with `welcomeMessage('Guillaume')`
- `alex` with `welcomeMessage('Alex')`
- `fred` with `welcomeMessage('Fred')`

**File:**
- [2-function_me.js](2-function_me.js)

### 3. Closure and loops
Write a function `createClassRoom(numbersOfStudents)` that:
- Defines `studentSeat(seat)` returning a function that returns `seat`
- Creates and populates an array `students` with closures from `studentSeat`
- Returns `students`
Create `classRoom` by calling `createClassRoom(10)`.

**File:**
- [3-classrooms.js](3-classrooms.js)

### 4. Complex Closure
Create:
- `divideBy(firstNumber)` returning a function that divides `secondNumber` by `firstNumber`
- `addBy(firstNumber)` returning a function that adds `secondNumber` to `firstNumber`
Create closures:
- `addBy100`
- `addBy1000`
- `divideBy10`
- `divideBy100`

**File:**
- [4-math.js](4-math.js)

### 5. Changing DOM with closure
Create a function `changeMode(size, weight, transform, background, color)` that returns a closure changing page styles.
Create a function `main()` that:
- Creates the closures `spooky`, `darkMode`, `screamMode`
- Adds a paragraph with `Welcome Holberton!`
- Adds three buttons: `Spooky`, `Dark mode`, `Scream mode`
- Hooks each button to its closure
- Calls `main()`

**File:**
- [5-mode.js](5-mode.js)

### 6. Private methods with closure
Create a function `studentHogwarts()` that:
- Has private variables `privateScore` (0) and `name` (null)
- Has private method `changeScoreBy(points)` to update `privateScore`
- Returns public methods `setName`, `rewardStudent`, `penalizeStudent`, `getScore`
Create two instances `harry` and `draco` and log their scores.

**File:**
- [6-hogwarts.js](6-hogwarts.js)

### 7. Stack order and setTimeout
Log the following in order:
- `Start of the execution queue`
- Loop from 1 to 100 logging each number
- `End of the loop printing`
- `Final code block to be executed` inside a `setTimeout` with delay 0

**File:**
- [7-timeout.js](7-timeout.js)

### 8. Stack order in functions
Create:
- `processPayment(amount)` that logs `Collecting payment of <amount>`
- `processOrder(orderId, amount)` that logs processing, calls `processPayment`, then logs completion
In main code, log `Processing orders`, call `processOrder` for three orders, then log `All the orders have been processed`.

**File:**
- [8-payments.js](8-payments.js)

### 9. Prime numbers & timing execution
Create `countPrimeNumbers()` to return the number of primes from 2 to 100 and log the execution time using `performance.now()`.

**File:**
- [9-prime.js](9-prime.js)

### 10. Execution stack & timing execution
Reuse `countPrimeNumbers()` and execute it 100 times, then log the execution time.

**File:**
- [10-prime.js](10-prime.js)

### 11. Changing stack order using setTimeout
Reuse `countPrimeNumbers()` and defer the heavy calculation with `setTimeout`, while logging the timing immediately.

**File:**
- [11-prime.js](11-prime.js)

### 12. Binding
Create an object `roomDimensions` with `width`, `length`, and `getArea()` using `this`. Create `boundGetArea` by binding `roomDimensions` to `getArea`.

**File:**
- [12-room_area.js](12-room_area.js)

### 13. Binding + Closure
Create a `user` object, a function `logWelcomeUser(welcomeString)` that logs a message using `this`, bind it to the user as `bindLogWelcomeUser`, then call it with `Welcome`.

**File:**
- [13-bind_user.js](13-bind_user.js)

### 14. Simple callback
Create `createElement(data)` to append a paragraph with `data`. Create `queryWikipedia(callback)` that fetches the Stack Overflow extract via `XMLHttpRequest` and calls `callback` with the extract. Call `queryWikipedia(createElement)`.

**File:**
- [14-wikipedia.js](14-wikipedia.js)

## How to Test
1. Open your browser developer tools and go to the Console tab.
2. Copy and paste the contents of [0-welcome.js](0-welcome.js).
3. Run:
   - `welcome('Holberton', 'School');`
4. Expected alert:
   - `Welcome Holberton School!`
5. Verify lexical scoping:
   - `alert(fullName)` should throw `ReferenceError: fullName is not defined`.

6. For task 1, copy and paste the contents of [1-nested_functions.js](1-nested_functions.js).
7. Expected alerts in order:
   - `Welcome`
   - `Welcome Holberton`
   - `Welcome Holberton!`

8. For task 2, copy and paste the contents of [2-function_me.js](2-function_me.js).
9. Run:
   - `guillaume();`
   - `alex();`
   - `fred();`
10. Expected alerts in order:
   - `Welcome Guillaume`
   - `Welcome Alex`
   - `Welcome Fred`

11. For task 3, copy and paste the contents of [3-classrooms.js](3-classrooms.js).
12. Run:
   - `console.log(classRoom[0]());`
   - `console.log(classRoom[3]());`
   - `console.log(classRoom[9]());`
13. Expected output:
   - `1`
   - `4`
   - `10`

14. For task 4, copy and paste the contents of [4-math.js](4-math.js).
15. Run:
   - `console.log(addBy100(20));`
   - `console.log(divideBy10(20));`
   - `console.log(divideBy100(200));`
   - `console.log(addBy1000(20));`
16. Expected output:
   - `120`
   - `2`
   - `2`
   - `1020`

17. For task 5, load [5-mode.js](5-mode.js) in a browser and click each button to switch themes.

18. For task 6, run [6-hogwarts.js](6-hogwarts.js).
19. Expected console output:
   - `Harry: 4`
   - `Draco: -2`

20. For task 7, run [7-timeout.js](7-timeout.js).
21. Expected output order:
   - `Start of the execution queue`
   - `1` ... `100`
   - `End of the loop printing`
   - `Final code block to be executed`

22. For task 8, run [8-payments.js](8-payments.js).
23. Expected output order:
   - `Processing orders`
   - `12321 is being processed`
   - `Collecting payment of 10.99`
   - `12321 has been fully processed`
   - `12322 is being processed`
   - `Collecting payment of 12.99`
   - `12322 has been fully processed`
   - `12323 is being processed`
   - `Collecting payment of 15`
   - `12323 has been fully processed`
   - `All the orders have been processed`

24. For task 9, run [9-prime.js](9-prime.js).
25. Expected output format:
   - `Execution time of printing countPrimeNumbers was <time> milliseconds.`

26. For task 10, run [10-prime.js](10-prime.js).
27. Expected output format:
   - `Execution time of calculating prime numbers 100 times was <time> milliseconds.`

28. For task 11, run [11-prime.js](11-prime.js).
29. Expected output format:
   - `Execution time of calculating prime numbers 100 times was <time> milliseconds.`

30. For task 12, run [12-room_area.js](12-room_area.js) and call `boundGetArea()` to verify it returns `5000`.

31. For task 13, run [13-bind_user.js](13-bind_user.js).
32. Expected output format:
   - `Welcome, Guillaume. Your occupation is: Engineer`

33. For task 14, open [14-wikipedia.js](14-wikipedia.js) in a browser and verify the Stack Overflow extract is appended to the page.

## Repository
- GitHub repository: holbertonschool-web_front_end
- Directory: Javascript_advanced
