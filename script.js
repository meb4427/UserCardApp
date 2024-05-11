// 一つ目のdivの処理
let child1 = document.createElement("div");

let sport = document.createElement("h2");
sport.innerHTML = "sports";

let tennis = document.createElement("p");
tennis.innerHTML = "tennis";

let baseball = document.createElement("p");
baseball.innerHTML = "baseball"

child1.append(sport, tennis, baseball);

// 二つ目のdivの処理

let child2 = document.createElement("div");

let animal = document.createElement("h2");
animal.innerHTML = "animal";

let dog = document.createElement("p")
dog.innerHTML = "dog";

let cat = document.createElement("p")
cat.innerHTML = "cat";

child2.append(animal, dog, cat);

document.getElementById("target-container").append(child1, child2);


