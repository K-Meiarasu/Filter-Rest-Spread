import React, { useState } from "react";
var array=[],odd=[],even=[]
const Filter = () => {

    const [input,setInput]=useState('')
    const [filter,setFilter]=useState({
        array:'',
        odd:'',
        even:''
    })
    function generate(){
        array=[]
        for(let i=0;i<input;i++){
            array[i]=Math.floor(Math.random()*75)+1
        }
        filterarray(...array)
        setFilter({array:array,even:even,odd:odd})
    }

    function filterarray(...array){
        even=[]
        odd=[]
        let j=0,k=0
        for(let i=0;i<array.length;i++){
            if(array[i]%2===0){
                even[j]=array[i]
                j++
            }
            else{
                odd[k]=array[i]
                k++
            }
        }
    }

    return(
        <div className="Number">
            <div>
                <input type="text" placeholder="Enter the number of inputs" value={input} onChange={(e)=>setInput(e.target.value)}/><br/><br/>
                <button onClick={generate}>Generate Random Numbers</button>
                <div className="box">
                    <h1>Random Array</h1><hr/>
                    {filter.array.map?.(input =>(<p>{input}</p>))}
                </div>
                <br/>
                <div className="box">
                    <h1>Even Array</h1><hr/>
                    {filter.even.map?.(input =>(<p>{input}</p>))}
                </div>
                <br/>
                <div className="box">
                    <h1>Odd Array</h1><hr/>
                    {filter.odd.map?.(input =>(<p>{input}</p>))}
                </div>
            </div>
        </div>
    )
}

export default Filter