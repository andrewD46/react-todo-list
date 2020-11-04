import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FireBaseContext } from '../context/firebase/firebaseContext';


export const Form = () => {
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
        <form onSubmit={submitHandler}>
            <div className="from-group">
                <input type="text" className="form form-control form-control-lg" placeholder="Name" value={value} onChange={e => setValue(e.target.value)}/>
            </div>
        </form>
    )
}