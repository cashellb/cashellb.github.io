/* Commenting out the notes from learning for the example */

/* Changing the header 1 to be a variable */
//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

// Single line comments can use two forward slashes

/* Example of creating and assigning a variable, 
then reassigning later in code */
//let myVariable = "Bob";
//myVariable = "Steve";

/* alert() function displays a browser popup
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
  */

// creating your own function
/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(4, 7);

  // add an event which listens for the click on the HTML (page) and throws alert
  document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/

/* above is an "anonymous" function which can also be done with => arrow

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
*/

// example of changing the image on click
document.addEventListener("DOMContentLoaded", () => {
    const myImage = document.querySelector("img");
  
    myImage.onclick = () => {
      const mySrc = myImage.getAttribute("src");
      if (mySrc === "images/team-af.png") {
        myImage.setAttribute("src", "images/team-af-w-background.jpg");
      } else {
        myImage.setAttribute("src", "images/team-af.png");
      }
    };
  
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
  
    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) { 
            setUserName();
        } else { // Check if a name was actually entered
          localStorage.setItem("name", myName);
          myHeading.textContent = `You are Team AF, ${myName}`;
        }
    }
  
    if (!localStorage.getItem("name")) {
      setUserName();
    } else {
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `You are Team AF, ${storedName}`;
    }
  
    myButton.onclick = () => {
      setUserName();
    };
  });