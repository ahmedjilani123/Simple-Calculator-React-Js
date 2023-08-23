
import { useState } from "react";
import Calculator from "./Calculator";
function Header(){
    const [cal,setcal] = useState(0);
    const add = function(){
        if(cal !==20){
            setcal(cal + 1)
        }
       
    }
    const remove = function(){
        if(cal !==0){
            setcal(cal -1);
        }
       
    }


    return(
        <>
       
        <div className="h-[100vh] max-w-[1230px] bg-slate-200 m-auto">
        <Calculator/> 
        <div className="flex justify-center">
        <button className='py-3 m-3 bg-sky-600 w-[4rem] rounded-lg border hover:bg-green-900 hover:text-white' onClick={add}>add{cal}</button>
        <button className='py-3 m-3 bg-red-600 w-[6rem] rounded-lg border hover:bg-green-900 hover:text-white' onClick={remove}>remove{cal}</button>
        </div>
        </div>
      
        </>
    )
}
export default Header;
