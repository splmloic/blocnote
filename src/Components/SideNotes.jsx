import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter()

const SideNote = ({ onNoteClick }) => {
    const handleNoteClick = (key) => {
        const note = JSON.parse(localStorage.getItem(key));
        onNoteClick(note);
      };
  return (
    <div>
      <h2>Notes</h2>
      <ul>
      {Object.keys(localStorage).map((key)=> {
            const note = JSON.parse(localStorage.getItem(key));
            const noteText = converter.makeHtml(note.text);
            const noteTextIntro = noteText.split(' ')
            return (
                <li key={key}>
                    <article data-key={key}>
                        <a key={key} onClick={() => handleNoteClick(key)}> {note.title}</a>
                        <p dangerouslySetInnerHTML={{ __html: noteTextIntro.slice(0, 15).join(' ') }}/>
                    </article>
                </li>
            );
            })}
      </ul>
    </div>
  );
};

export default SideNote;
