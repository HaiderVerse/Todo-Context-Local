# Todo App with React Context & Local Storage

This is a simple Todo application built with **React** using the Context API for state management and **localStorage** for data persistence.

## Features

- Add, edit, complete, and delete todos
- Todos are saved in your browser's local storage
- Responsive and clean UI with Tailwind CSS
- State management using React Context API

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Todo-Context-Local
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/
    TodoForm.jsx
    TodoItem.jsx
  context/
    AppContext.jsx
  App.jsx
  main.jsx
```

## Usage

- **Add Todo:** Type your task and click "Add".
- **Edit Todo:** Click the ✏️ icon, update the text, then click 📁 to save.
- **Complete Todo:** Check the box to mark as completed.
- **Delete Todo:** Click the ❌ icon to remove a todo.

## License

This project is open source and available under the [MIT License](LICENSE)