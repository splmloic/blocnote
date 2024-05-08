import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; 

function NewNote(){
    const [values, setValues] = useState({title:'',text:''});

    const noteId = uuidv4();
    const note = { id: noteId, ...values };
    localStorage.setItem(`blocNote-${noteId}`, JSON.stringify(note));
    setValues({ title: '', text: '' }); 
    return(
        <p>Note crée</p>
    )
}
export default NewNote