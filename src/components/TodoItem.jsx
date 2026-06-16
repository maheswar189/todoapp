import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(itemToDelete) {
    console.log("Delete item:", item);
    setTodos(todos.filter((todo) => todo !== itemToDelete));
  }

  function handleClick(name) {
    const newTodos = todos.map((todo) => {
      if (todo.name === name) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log("todos:", newTodos);
  }

  const strikerDoneName = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={strikerDoneName}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
