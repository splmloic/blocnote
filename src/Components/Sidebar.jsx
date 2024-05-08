import React, { useState, useEffect } from 'react';
import { Menu, Button, Row, Col } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import SideNote from './SideNotes';

const Sidebar = ({ onNoteSelect }) => {
    const [title, setTitle] = useState('Note sans Titre');
    const [text, setText] = useState('');
    const [noteAdded, setNoteAdded] = useState(false);

    const handleNewNote = () => {
        const noteId = uuidv4();
        const note = { id: noteId, title, text };
        localStorage.setItem(`blocNote-${noteId}`, JSON.stringify(note));
        setTitle('Note sans Titre');
        setText('');
        setNoteAdded(true);
    };

    useEffect(() => {
        if (noteAdded) {
            setNoteAdded(false);
        }
    }, [noteAdded]);

    const handleNoteClick = (note) => {
        onNoteSelect(note);
    };

    return (
        <Row>
            <Col span={24}>
                <Menu theme="dark" mode="inline" selectable={true} style={{ width: '100%' }}>
                    <SideNote noteAdded={noteAdded} onNoteClick={handleNoteClick} />
                    <Button type="primary" onClick={handleNewNote} danger>
                        Ajouter une note
                    </Button>
                </Menu>
            </Col>
        </Row>
    );
};

export default Sidebar;
