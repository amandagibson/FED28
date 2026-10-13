// Lesson 2: Objects, Arrays, and the DOM
// Open index.html in a browser. Check the console for logs.

// --- Arrays ---
const colors = ["red", "green", "blue"];
const mixed = [1, "two", true];

console.log(colors[0]); // "red"
console.log(colors.length); // 3

colors.push("yellow");
console.log(colors);

colors.pop();
console.log(colors);

for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}

for (const color of colors) {
  console.log(color);
}

const colorsList = document.getElementById("colors-list");
for (const color of colors) {
  const li = document.createElement("li");
  li.textContent = color;
  li.style.color = color;
  colorsList.appendChild(li);
}

const mixedItem = document.createElement("li");
mixedItem.textContent = "mixed: " + mixed.join(", ");
colorsList.appendChild(mixedItem);

// --- Objects ---
const person = {
  name: "Ada",
  age: 36,
  isStudent: false,
};

console.log(person.name);
console.log(person["age"]);

person.age = 37;
person.city = "London";
console.log(person);

const team = [
  { name: "Ada", role: "engineer" },
  { name: "Grace", role: "lead" },
];

console.log(team[0].name);
console.log(team[1].role);

document.getElementById("person-info").textContent =
  person.name + ", age " + person.age + ", lives in " + person.city;

const teamList = document.getElementById("team-list");
for (const member of team) {
  const li = document.createElement("li");
  li.textContent = member.name + " — " + member.role;
  teamList.appendChild(li);
}

// --- The DOM ---
const heading = document.getElementById("heading");
console.log(heading);

const firstParagraph = document.querySelector(".mainText");
console.log(firstParagraph);

const paragraphs = document.querySelectorAll(".mainText");
console.log(paragraphs.length);

heading.textContent = "Welcome";
heading.innerHTML = "Welcome <span>guest</span>";

heading.classList.add("headingClass");
heading.classList.toggle("headingClass");
heading.classList.remove("headingClass");

const newParagraph = document.createElement("p");
newParagraph.textContent = "Our new paragraph";
heading.appendChild(newParagraph);

for (let i = 0; i < paragraphs.length; i++) {
  if (i === 0) {
    paragraphs[i].textContent = "this is the first paragraph";
    paragraphs[i].style.color = "blue";
  } else {
    paragraphs[i].style.color = "yellow";
  }
}
