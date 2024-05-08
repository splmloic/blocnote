import React from 'react';
import Showdown from 'showdown';
const converter = new Showdown.Converter();

function NoteDisplay({ note }) {
  const titleContent = note ? converter.makeHtml("#" + note.title) : '';
  const textContent = note ? converter.makeHtml(note.text) : '';

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: titleContent }} />
      <div dangerouslySetInnerHTML={{ __html: textContent }} />
    </div>
  );
}

export default NoteDisplay;
