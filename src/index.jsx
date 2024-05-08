import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './Components/MarkdownInput';
import NoteDisplay from './Components/NoteDisplay';
import Sidebar from './Components/Sidebar';
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    // Récupérer la première note du localStorage
    const keys = Object.keys(localStorage).filter(key => key.startsWith("blocNote-"));
    if (keys.length > 0) {
      const firstNoteKey = keys[0];
      const firstNote = JSON.parse(localStorage.getItem(firstNoteKey));
      setCurrentNote(firstNote);
    }
  }, []); // Effectuer cette action une seule fois lors du chargement initial

  const handleNoteClick = (note) => {
    setCurrentNote(note);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{ margin: '16px' }}>
          <NoteDisplay note={currentNote} />
          <MarkdownInput currentNote={currentNote} />
        </Content>
      </Layout>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
