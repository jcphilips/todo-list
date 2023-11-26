import { ConfirmDialog } from 'primereact/confirmdialog';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default function TaskList({ handleDelete, taskList, parent, setVisible, visible }) {
    return (
        <ul ref={parent}>
            {taskList.map(({task, id}) => (
                    <li key={id}>
                        <p>{task}</p>
                        <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to delete the task?"
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={() => handleDelete(id)} reject={() => setVisible(false)} />
                        <input 
                            type="button" 
                            value="&#9747;" 
                            onClick={() => {
                                setVisible(true)
                            }} 
                            className="delete-task" 
                        />
                    </li>
            ))}
        </ul>
    )
}