const person = {
  name: ['Code', 'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  getfullName: function (params) {
    console.log(this.name[0] + this.name[1]);
  }
  // メソッドも追加できる
};

person.age = 12;
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.interests);
// ドット記法

const agekey = 'age';
person['agekey'] = 12;
console.log(person.age);
person.getfullName();

const s = 'hello World';

s.length
s.toUpperCase();
