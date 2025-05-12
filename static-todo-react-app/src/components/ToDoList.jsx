export default function ToDoList() {
    const tasks = ['Learn React', 'Build a Project', 'Read Documentation'];

    return (
        <div className="todo-container">
            <ul className="todo-list">
                <li>{tasks[0]}</li>
                <li>{tasks[1]}</li>
                <li>{tasks[2]}</li>
            </ul>
        </div>
    );
}