const initialStates={
    data:["time","date"]
}

const rootReducer=(state=initialStates,action)=>{
    switch(action.type){
        case 'SET_DATA':return { ...state,data:action.payload};
    default: return state;    
    }
};
export default rootReducer