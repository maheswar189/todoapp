import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(itemToDelete) {
    console.log("Delete item:", item);
    setTodos(todos.filter((todo) => todo !== itemToDelete));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item.name}
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
