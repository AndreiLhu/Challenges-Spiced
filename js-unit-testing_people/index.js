export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => person.firstName + " " + person.age);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => person.firstName + " " + person.lastName);
}

export function getPeopleByLastName(people, lastName) {
  return people.map((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
