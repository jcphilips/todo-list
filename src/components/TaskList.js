export default function TaskList({ handleDelete, taskList, parent }) {
    return (
        <ul ref={parent}>
            {taskList.map(({task, id}) => (
                    <li key={id}>
                        <p>{task}</p>
                        <input type="button" value="X" onClick={() => handleDelete(id)} />
                    </li>
            ))}
        </ul>
    )
}