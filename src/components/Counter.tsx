const Counter = () => {
  return (
    <div className='p-30 w-full flex items-center justify-center flex-col gap-2'>
        <h3>Counter  <span id='counter'>0</span> </h3>
        
        <div className="flex items-center gap-4">   
          <button 
              className='buttonStyle'
              type='button'
              id='increase'>Increase</button>
          <button 
              className='buttonStyle'
              type='button'
              id='decrease'>decrease</button>
        </div>
    </div>
  )
}

export default Counter