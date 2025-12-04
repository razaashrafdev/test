import { useState } from "react";

function Todo({ todo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (!editText.trim()) return; // Prevent empty text
        editTodo(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="todo">
            <p>{todo.text}</p>
            <div className="todo-buttons">
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            {isEditing && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Edit Todo</h3>
                        <input
                            className="popup-input"
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                        <div className="modal-buttons">
                            <button className="save-button" onClick={handleEdit}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;
