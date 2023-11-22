export function getAnimal(animal) {
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  }
  if (typeof animal === "string") {
    return `I like ${animal}!`;
  }
  if (typeof animal === "undefined") {
    return "I do not like animals at all!";
  }
}
