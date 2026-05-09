import React from 'react'
import Text from './Text';

const ViewText = ({text,ageHandler}) => {
    console.log("Text component is running now");

    // it will executed by implementing re-evaluation concept ! 
    // so it will running it then move into next line !
    const apiConnectionExample = () => {
        for(let i = 0 ; i <= 500_000_000; i++){}
        console.log("api calling - Text View Component ....");
    }

    // apiConnectionExample();

    return (
        <div className='w-fit flex items-center justify-center text-center flex-col border p-12 my-4'>
             <button 
                className=' rounded-md px-4 py-0.5 border cursor-pointer text-white bg-sky-600 hover:bg-sky-800 transition-all duration-300'
                onClick={ageHandler}
                type="button">add age</button>
           <Text>{text.info}</Text> 
           <Text>{text.age}</Text> 
        </div>
  )
}

export default React.memo(ViewText); // avoid re-render + re-evaluation to children => ( ViewText ) when not changed !