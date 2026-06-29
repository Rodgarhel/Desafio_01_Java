# Desafío 01 - JavaScript

## Page Link

🔗 Live Demo: https://rodgarhel.github.io/Desafio_01_Java/

---

## Project Description

This project was developed as an introductory exercise in JavaScript programming. The objective was to transform a static HTML product card into an interactive webpage by implementing JavaScript functionality.

The application simulates a simple shopping cart component where users can increase or decrease the quantity of a product using buttons. The page dynamically updates both the selected quantity and the total price by multiplying the number of items by the product's base price.

My contribution focused on implementing the JavaScript logic required to make the webpage interactive while practicing fundamental concepts of front-end web development.

---

## Features

* Increase the quantity of the selected product.
* Decrease the quantity of the selected product.
* Calculate the total price automatically.
* Update the webpage content dynamically without reloading.
* Manipulate HTML elements using the JavaScript DOM API.

---

## Technologies Used

* **HTML5** — Structure and content of the webpage.
* **CSS3** — Styling and visual presentation.
* **JavaScript (Vanilla JavaScript)** — Interactive functionality and DOM manipulation.

---

## Concepts Practiced

This project was created to practice and reinforce the following JavaScript concepts:

* Variables and constants
* Functions
* Arithmetic operations
* Type conversion using `Number()`
* DOM element selection with `querySelector()`
* DOM manipulation using `innerHTML`
* Event handling through button interactions
* Dynamic content updates

---

## How It Works

The webpage displays a product card containing:

* A product name
* A base price
* A quantity counter
* Increment (`+`) and decrement (`-`) buttons
* A dynamically calculated total price

When the user clicks the increment button, the quantity increases by one and the total price is recalculated. Likewise, clicking the decrement button decreases the quantity and updates the total amount accordingly.

---

## Project Structure

```text
Desafio_01_Java/
│
├── assets
    ├── java
        └── index.js
    └── css
        └── style.css
├── index.html
└── README.md
```

---

## Future Improvements

Possible improvements for future versions include:

* Preventing the quantity from becoming negative.
* Adding multiple products.
* Implementing a shopping cart system.
* Formatting prices using locale currency formatting.
* Replacing inline `onclick` events with `addEventListener()`.
* Improving the user interface and responsiveness.

---

## Author

Developed by **Rodrigo García** as part of my web development and JavaScript learning journey.
