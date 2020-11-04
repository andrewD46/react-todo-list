import{SHOW_LOADER,ADD_NOTE,FETCH_NOTES,REMOVE_NOTE}  from "../../context/types"

const hadlers = 
    {
        [SHOW_LOADER]:(state)=>({...state,loading: true}),
        [ADD_NOTE]:(state,{payload})=>({
            ...state,
            notes:[...state.notes, payload ],
            loading:false
        }),
        [FETCH_NOTES]:(state,{payload})=>({
            ...state,
            notes:payload,
            loading:false
        }),
        [REMOVE_NOTE]: (state, {payload}) => {

            return({
            ...state,
            notes: state.notes.filter(note => note.id !== payload)
          })

        },
/*

        [REMOVE_NOTE]:(state,payload)=>({
            ...state,
            notes:state.notes.filter(note=>note.id!==payload)
        }),
*/

        DEFAULT:state=>state

    }   

export const FireBaseReducer= (state,action)=>{
    const handle = hadlers[action.type] || hadlers.DEFAULT
    return handle(state,action)
}