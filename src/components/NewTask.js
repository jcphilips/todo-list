export default function NewTask({ handleChange, handleSubmit, newTask }) {
    return (
        <div className="create-new-task">
            <h1>{newTask.task}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" onChange={handleChange} value={newTask.task || ''} autoComplete="off" placeholder="Enter your task" />
            </form>
        </div>
    )
}