export default function TaskList({ handleDelete, taskList }) {
    return (
        <ul>
            {taskList.map(({task, id}) => (
                    <li key={id} >
                        <p>{task}</p>
                        <input type="button" value="X" onClick={() => handleDelete(id)} />
                    </li>
            ))}
        </ul>
    )
}