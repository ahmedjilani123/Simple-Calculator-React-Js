
import { useState } from "react";
import { AiOutlineRollback, AiOutlineClear } from "react-icons/ai";
function Calculator() {
    const [value, setvalue] = useState('');  //this is a main hook for the calculation settings

    const change = function (event) {
        debugger;
        var mainvalue = value;  // check for value is come or not 
        var x = event.target.name.toString();
        let pattern = ["*", "-", "+", "/", "."]

        var y = mainvalue.length;
        var t = mainvalue[y - 1]

        if (pattern.includes(x)) {
            if (pattern.includes(t)) {
                var re = mainvalue.slice(0, -1);

                setvalue(re.concat(x));

            } else {
                setvalue(value.concat(x));
            }


        } else {
            setvalue(value.concat(x));
        }



    }
    const inputchange = function (event) {
        setvalue(event.target.value)
    }
    const equal = function () {
        if (value === "") {
            alert("invalid value");
        } else {
            let total = eval(value).toString();
            setvalue(total);

        }
    }
    const clear = function () {
        setvalue("");
    }
    const back = function () {
        let x = value;
        setvalue(x.slice(0, -1));
    }

    return (
        <>
            <div className="flex justify-center ">
                <div className="w-[17.6rem] h-[25rem] bg-red-500 mt-6 rounded-md ">
                    <div className="flex justify-center mt-3  ">
                        <input id="iiput" type="tel" onChange={inputchange} className="[&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none
 py-2 flex justify-center bg-orange-50 text-bold text-2xl rounded-md outline-none border border-blue-500  " value={value} ></input>
                    </div>
                    <div className=" grid grid-rows-5 grid-flow-col gap-y-4 mt-3 ml-[18px]" id="NumberContainer">
                        <button name="1" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-red-800 border rounded-lg hover:border-yellow-700 active:bg-yellow-900 text-white" onClick={clear}><AiOutlineClear className="pl-1" /></button>
                        <button name="1" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>1</button>
                        <button name="4" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>4</button>
                        <button name="7" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>7</button>
                        <button name="0" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>0</button>

                        <button name="(" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>(</button>
                        <button name="2" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>2</button>
                        <button name="5" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>5</button>
                        <button name="8" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>8</button>
                        <button name="." className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>.</button>

                        <button name=")" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>)</button>
                        <button name="3" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>3</button>
                        <button name="6" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>6</button>
                        <button name="9" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>9</button>
                        <button name="/" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>/</button>

                        <button className=" p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-yellow-600 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={back}><AiOutlineRollback className="pl-1" /></button>
                        <button name="+" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>+</button>
                        <button name="-" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>-</button>
                        <button name="*" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-sky-400 border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={change}>*</button>

                        <button name="=" className="p-2 w-[3rem] h-[3rem] text-2xl grow font-mono shadow-md bg-indigo-700 text-white border rounded-lg hover:border-yellow-700 active:bg-yellow-900" onClick={equal}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Calculator;