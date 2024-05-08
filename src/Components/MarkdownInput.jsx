import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { TextArea } = Input;

function MarkdownInput({ currentNote, onUpdate }) {
  const [values, setValues] = useState({ title: '', text: '' });

  useEffect(() => {
    if (currentNote) {
      setValues({ title: currentNote.title, text: currentNote.text });
    }
  }, [currentNote]);

  const handleInputChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSave = () => {
    const noteId = currentNote ? currentNote.id : uuidv4();
    const note = { id: noteId, ...values };
    localStorage.setItem(`blocNote-${noteId}`, JSON.stringify(note));
    onUpdate(note); // Update the current note
  };

  return (
    <div>
      <Input
        value={values.title}
        onChange={handleInputChange('title')}
        placeholder="Titre"
        style={{ marginBottom: '8px' }}
      />
      <br />
      <TextArea
        value={values.text}
        onChange={handleInputChange('text')}
        placeholder="Texte"
        rows={4}
        style={{ marginBottom: '8px' }}
      />
      <br />
      <Button type="primary" onClick={handleSave} danger>
        Sauvegarder la note
      </Button>
    </div>
  );
}

export default MarkdownInput;
