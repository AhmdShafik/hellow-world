import React ,{useState , useEffect} from 'react'

function IntervalCounterHook() {
    const [count,setCount] = useState(0);

    const tick =() =>{
        console.log('tick function');
        setCount(count+1);
        console.log('count : ',count);
    };

    useEffect(()=>{
        const interval=setInterval(tick,1000);

        return ()=>{
            clearInterval(interval);
        }
        },[count]);

  return (
    <div>
      {count} </div>
  )
}

export default IntervalCounterHook
