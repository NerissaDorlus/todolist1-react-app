import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItemList from "./components/TodoItemList";

function App() {
  const itemList = [
    { title: "Need Butter", isCompleted: true },
    { title: "Need Bread", isCompleted: false },
    { title: "Need Booze", isCompleted: false },
    { title: "Need Banana", isCompleted: false },
    { title: "Need Berries", isCompleted: false },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <TodoItemList items={itemList} />
      </header>
    </div>
  );
}

export default App;
