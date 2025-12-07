# DOM Manipulation and Events Handling in JavaScript

## Overview

This project demonstrates fundamental concepts of **DOM manipulation** and **event handling** in JavaScript. It dynamically creates page elements, updates content, and responds to user interactions. The example is simple yet effective for understanding how JavaScript interacts with HTML elements.

---

## Project Structure

```plaintext
DOM/
├── index.html
└── main.js
```

### **index.html**

- Contains a root `<div>` where dynamic JavaScript-generated content will be injected.
- Loads `main.js`, which performs all DOM manipulation.

### **main.js**

- Selects the `#root` element.
- Creates a heading.
- Dynamically generates color buttons.
- Adds click event listeners to each button.
- Updates the text color of the heading based on user interaction.

---

## How the Project Works

### **1. Selecting DOM Elements**

The JavaScript file begins by selecting the `root` div:

```javascript
const rootDiv = document.getElementById("root");
```

This allows all elements to be added dynamically using JavaScript.

---

### **2. Creating and Appending Elements**

A heading (`<h1>`) is created and added to the page:

```javascript
const heading = document.createElement("h1");
heading.innerText = "Welcome to Dex'N.com";
rootDiv.appendChild(heading);
```

---

### **3. Rendering Color Buttons Dynamically**

A list of colors is defined:

```javascript
const colors = ["red", "blue", "green"];
```

Each color is used to generate a button:

```javascript
function renderButtons(color) {
    const button = document.createElement('button');
    button.innerText = color;
    button.style.backgroundColor = color;
    button.style.marginRight = "20px";
    ...
    rootDiv.appendChild(button);
}
```

Buttons are created using:

```javascript
colors.forEach((c) => {
  renderButtons(c);
});
```

---

### **4. Handling Events (Interactivity)**

Each button listens for a **click event**:

```javascript
button.addEventListener("click", () => {
  heading.style.color = color;
});
```

**What happens when you click a button?**

- The event listener detects the click.
- The heading's text color changes to match the button’s color.

This demonstrates:

- Event listeners
- DOM style manipulation
- Callback functions

---

## Key Concepts Demonstrated

### ✔ DOM Selection

Using `getElementById()` to target page elements.

### ✔ Creating and Modifying Elements

`document.createElement()`, `.innerText`, `.style`, `.appendChild()`

### ✔ Event Handling

Attaching event listeners with `addEventListener()`.

### ✔ Dynamic UI Updates

Changing the page based on user interaction.

---

## How to Run

1. Download both files (`index.html` and `main.js`).
2. Ensure they are in the same directory.
3. Open `index.html` in a browser.
4. Click the color buttons to change the heading color.

---

### 💻 Author

Denis Murithi  
👤 GitHub: [@Denis-7242](https://github.com/Denis-7242)
mail: [@gmail](dexdenis3@gmail.com)

🗓️ Made with ❤️ by Denis

---
