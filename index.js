
let text;
let person = prompt("Please enter your name:", "Harry Potter");
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
console.log(text)
