import { useMemo, useState } from 'react'


function App() {
  const [wieght, setwieght] = useState(40);
  const [hieght, sethieght] = useState(140);

  function wieghtChange(e) {
    setwieght(e.target.value);
  }

  function hieghtChange(e) {
    sethieght(e.target.value);
  }

  let result = useMemo(() =>{
  const calHeight= hieght/100;
  let final = (wieght*calHeight**2).toFixed(2);
  return final;
  },[wieght,hieght])
  return (
    <>
      <div className='bg-black text-white h-screen flex justify-center items-center'>
        <div className='border rounded-2xl text-black bg-blue-400 h-60 w-64'>
        <h1 className='text-2xl text-center text-red-950 font-bold' >BMI CALCULATOR</h1>
      <div className='text-center py-4'>
        <p className='mb-2'> Wieght : {wieght} kg</p>
        <input type="range" step="1" min="40" max="200" onChange={wieghtChange} /><br />
        <p>Hieght :{hieght} cm </p>
        <input type="range" step="1" min="140" max="280" onChange={hieghtChange} />
      </div>
      <div className='text-center'>
        <p className='text-2xl '> BMI : <span className='underline font-bold text-red-700'>{result} </span>
        </p>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
