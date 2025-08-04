# React Class-Based Components TODO App

This project demonstrates how to build a simple TODO application using **React class-based components**. It is intended for learners who want to understand the differences between class-based and functional components, state management, and event handling in React.

## Key Concepts Illustrated

### 1. Class-Based Components

Unlike functional components, class-based components use ES6 classes and extend `React.Component`. State and lifecycle methods are managed within the class, making them ideal for understanding React's original component model.

### 2. State Management

State is initialized in the constructor and managed using `this.setState`. The app keeps track of:
- The list of todos
- The current input value
- Whether the app is in edit mode
- Which todo is being edited

### 3. Event Handling and Binding

Class methods that handle events (like input changes, submitting, editing, and resubmitting) are explicitly bound to the class instance in the constructor. This ensures that `this` refers to the component instance inside these methods.

### 4. Inline Editing

When the "Edit" button is clicked for a todo, the app:
- Switches to edit mode
- Displays an input pre-filled with the selected todo's value
- Changes the "Edit" button to a "Resubmit" button for that todo
- Updates the todo in place when "Resubmit" is clicked

### 5. Conditional Rendering

The UI conditionally renders inputs and buttons based on the current state (edit mode vs. normal mode), demonstrating how to use logic in JSX to control what the user sees.

### 6. Controlled Components

All input fields are controlled, meaning their values are tied to React state. This is a core concept for managing form data in React.

## Why Use Class-Based Components?

While modern React development favors functional components and hooks, understanding class-based components is important for:
- Maintaining legacy codebases
- Grasping the fundamentals of React's component model
- Learning how state and props work under the hood

## For Learners

This project is not intended for production use or end-users. Instead, it serves as a reference and learning tool for those new to React or those wanting to deepen their understanding of class-based components.

Feel free to experiment with the code, add new features, or refactor it to use functional components and hooks