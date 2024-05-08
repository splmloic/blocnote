import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'; 

function MarkdownInput(){
  const [values, setValues] = useState({title:'',text:''});

    const getHandler = (name) => {
      return (event) => {
        setValues({ ...values, [name]: event.target.value });
      };
    };

    const handleSave = () => {
      const noteId = uuidv4();
      const note = { id: noteId, ...values };
      localStorage.setItem(`blocNote-${noteId}`, JSON.stringify(note));
      setValues({ title: '', text: '' }); 
    };

    return (
        <div>
            <input value={values.title} onChange={getHandler('title')}/> <br />
            <textarea value={values.text} onChange={getHandler('text')} /><br />
            <button onClick={handleSave}>Sauvegarder la note</button> 
        </div>
      );
}

export default MarkdownInput;