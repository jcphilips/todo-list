export default function NewTask({ handleChange, handleSubmit, newTask }) {
    return (
        <div className="create-new-task">
            <form onSubmit={handleSubmit}>
                <h1>Create a task: </h1>
                <input 
                    id='task-details' 
                    type="text" 
                    name="task" 
                    onChange={handleChange} 
                    value={newTask.task || ''} 
                    autoComplete="off" 
                    placeholder="Enter your task" 
                    
                />
            </form>
        </div>
    )
}