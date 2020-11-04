import {Notes} from '../components/notes'
import {FireBaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'
import React, {Fragment,useContext,useEffect} from 'react'


export const AllNotes = () => {

    const {loading, notes ,fetchNotes, removeNotes } = useContext(FireBaseContext);

    useEffect(()=>{
        fetchNotes()
    
        

    },[])
    return (
        <Fragment>
            {loading && <Loader/>}
            {notes.length ? (!loading && <Notes notes={notes} onRemove={removeNotes}/>) : (!loading && (<h1 className="title text-center">No todos!</h1>))}
        </Fragment>
    )     
}