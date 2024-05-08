import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './Components/MarkdownInput';
import NoteDisplay from './Components/NoteDisplay';
import Sidebar from './Components/Sidebar';
import { Layout, Row, Col } from 'antd';
import './assets/index.css';

const { Content } = Layout;

const App = () => {
  const [currentNote, setCurrentNote] = useState(null);

  const getLastNoteFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    const lastKey = keys[keys.length - 1];
    return JSON.parse(localStorage.getItem(lastKey));
  };

  useEffect(() => {
    const lastNote = getLastNoteFromLocalStorage();
    if (lastNote) {
      setCurrentNote(lastNote);
    }
  }, []);

  const handleNoteClick = (note) => {
    setCurrentNote(note);
    console.log(note);
    console.log(currentNote)
  };

  const handleNoteUpdate = (updatedNote) => {
    setCurrentNote(updatedNote);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Row>
        <Col span={6}>
          <Sidebar onNoteSelect={handleNoteClick} />
        </Col>
        <Col span={18}>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content className="site-layout-background">
              <Row gutter={16}>
                <Col span={16}>
                  <NoteDisplay note={currentNote} />
                  <MarkdownInput currentNote={currentNote} onUpdate={handleNoteUpdate} />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
