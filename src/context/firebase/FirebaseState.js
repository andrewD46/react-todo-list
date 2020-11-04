import React,{useReducer} from 'react'

import {SHOW_LOADER,FETCH_NOTES,REMOVE_NOTE,ADD_NOTE} from '../../context/types'

import {FireBaseContext} from './firebaseContext'

import {FireBaseReducer} from './firebaseReducer'

import axios from 'axios'

const url = process.env.REACT_APP_DB_URL

export  const FireBaseState = ({children})=>{
    const initialState = {
        notes:[],
        loading:false

    }
    const [state,dispath] = useReducer(FireBaseReducer,initialState)
    
    const showLoader = ()=> dispath({type:SHOW_LOADER})
    
    const fetchNotes = async ()=>{

        showLoader()

        const res = await axios.get(`${url}/notes.json`);

        console.log(res.data);

       

        if (res.data){
            const payload = Object.keys(res.data).map((id_)=>({
                id:id_,
                date:res.data[id_].date,
                title:res.data[id_].title
            }
                
            ))
            
            dispath({type:FETCH_NOTES,payload})
        }

        return res;
        
    } 
    
    const addNote = async (title)=>{

        const note = {title, date: new Date().toJSON() }

        try {
        
            const res  =  await axios.post(`${url}/notes.json`,note);

            if (res && res.data && res.data.name){

                const payload = {
                    ...note,
                    id:res.data.name
                }
    
                dispath({type:ADD_NOTE,payload})
            }

        } catch (error) {

            throw new Error(error.message);        

        }

    }

    const removeNotes = async (id)=>{
        
       const res = await axios.delete(`${url}/notes/${id}.json`)

        dispath({
            type:REMOVE_NOTE,
            payload:id})

   //         fetchNotes()
    }
        

    return(
        <FireBaseContext.Provider value={{
            showLoader,addNote,removeNotes,fetchNotes,loading:state.loading,
            notes:state.notes
        }}>
    
            {children}
        </FireBaseContext.Provider>
    )
}