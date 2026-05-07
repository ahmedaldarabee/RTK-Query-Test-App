import { useReducer} from 'react'

const ReducerState = () => {

  const subtractionHandler = (state: number): number => {
    if(state === 0){
      return state = 0;
    }else {
      return state - 1;
    }
  }

  const reducerHandler = (state:number,action:any): number => {
    switch(action.type){
      case "add":
        return state + 1;
      case "sub":
        return subtractionHandler(state);
      default:
        return state;
    }
  }
  
  const [state,dispatch] = useReducer(reducerHandler,0);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className='flex items-center justify-center gap-4 flex-col text-center'>
        <p>current value: {state} </p>
        <button className='buttonStyle' type="button" onClick={() => dispatch({type:"add"})}>+</button>
        <button className='buttonStyle' type="button" onClick={() => dispatch({type:"sub"})}>-</button>
      </div>
    </div>
  )
}

export default ReducerState;