import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FireBaseContext } from '../context/firebase/firebaseContext';


export const Notes = ({notes, onRemove, onChange}) => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)
    const firebase = useContext(FireBaseContext)
    const submitHandler = event => {
        event.preventDefault();
        
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('The note was created', 'success');
            }).catch(() => {
                alert.show('Something went wrong...', 'danger');
            })
            setValue('');
        } else {
            alert.show('Enter a title for the note');
        }
    }
    return (
    <TransitionGroup component="ul" className="list-group">
        {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                    <div className="note-group">
                        <strong>{note.title}</strong>
                        <small class="text-muted">{note.date}</small>
                    </div>
                    <div>
                        {/* <button type="button" className="btn chng-btn  btn-circle btn-lg">&#9998;</button> */}
                        <button type="button" className="btn btn-circle btn-lg" onClick={() => onRemove(note.id)}>&times;</button>
                    </div>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)}