import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const SideNote = ({  onNoteClick }) => {
    return (
        <div>
            <h2>Notes</h2>
                {Object.keys(localStorage).map((key) => {
                    const note = JSON.parse(localStorage.getItem(key));
                    const noteText = converter.makeHtml(note.text);
                    const noteTextIntro = noteText.split(' ');
                    return (
                            <article data-key={key}>
                                <a onClick={() => onNoteClick(note)}> {note.title}</a>
                                <p dangerouslySetInnerHTML={{ __html: noteTextIntro.slice(0, 6).join(' ') }} />
                            </article>
                    );
                })}
        </div>
    );
};

export default SideNote;
