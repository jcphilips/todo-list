export default function NewTask({ handleChange, handleSubmit, newTask }) {
    return (
        <div className="create-new-task">
            <h1>Create a task: </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    id='task-details' 
                    name="task" 
                    onChange={handleChange} 
                    value={newTask.task || ''} 
                    autoComplete="off" 
                    placeholder="Enter your task..." 
                    style={{ height: Math.max() }}
                />
                <input type="submit" value='Create Todo' id="submit-todo"/>
            </form>
        </div>
    )
}