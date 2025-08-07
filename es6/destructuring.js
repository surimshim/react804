/**
 * 구조 분해 할당(Destructuring Assignment)
 * - 객체 또는 배열의 값을 개별 변수로 쉽게 꺼내는 문법
 *   
 **/

// 배열 구조분해
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);

const [x, y] = [10, 20];
console.log(x);
console.log(y);


// 객체 구조 분해
const user = { _name: '홍길동', age: 25 };
const { _name, age } = user;

console.log(_name); // 홍길동
console.log(age);  // 25

const { name: userName } = user;
console.log(userName); // 홍길동

const { job = '개발자' } = user;
console.log(job); // 개발자


// 함수의 매개변수에서 구조 분해 (React에서 매우 자주 사용)
function printUser({name2, age2}) {
  console.log(`${name2}(${age2})`);
}

const user2 = {name2: 'Jane', age2: 22};
printUser(user2);


// 중첩 구조 분해
// {{}}
const user3 = {
  name: '철수',
  address: {city: '서울', zip: '12345'}
};

const {address: { city }, address: {zip}} = user3;

console.log(`${city}(${zip})`); // 서울

// 리액트 구조 분해 할당
// const [변수, 함수] = useState(초깃값);
// 변수는 상태값
// 함수는 상태 변경 함수
// 함수 이름은 set변수명 


//배열 반환 함수
const handleChange = (e) => {
  const { name3, value3 } = e.target;
  console.log(`${name3}: ${value3}`);
};