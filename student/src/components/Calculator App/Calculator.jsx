import React, { useState } from "react";
import "./css/calculator.css";
const Calculator = () => {
  const [value, setValue] = useState("");
  function numInput(e) {
    setValue(value + e.target.value);
  }
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
          </div>
          <div>
            <input type="button" value="AC"  onClick={e=>setValue('')}/>
            <input type="button" value="DE" onClick={e=>setValue(value.slice(0,-1))}/>
            <input type="button" value="." onClick={numInput}/>
            <input type="button" value="/" onClick={numInput}/>
          </div>
          <div>
            <input type="button" value="7" onClick={numInput} />
            
            <input type="button" value="8" onClick={numInput}/>
            
            <input type="button" value="9" onClick={numInput}/>
            
            <input type="button" value="0" onClick={numInput}/>
          </div>
          <div>
            
            <input type="button" value="4" onClick={numInput}/>
            
            <input type="button" value="5" onClick={numInput}/>
            
            <input type="button" value="6" onClick={numInput}/>
            
            <input type="button" value="+" onClick={numInput}/>
          </div>

          <div>
            
            <input type="button" value="1" onClick={numInput}/>
            
            <input type="button" value="2" onClick={numInput}/>
            
            <input type="button" value="3" onClick={numInput}/>
            
            <input type="button" value="-" onClick={numInput}/>
          </div>

          <div>
            
            <input type="button" value="00" onClick={numInput}/>
            
            <input type="button" value="0" onClick={numInput}/>
            
            <input type="button" value="=" className="equal" onClick={e=>{
                setValue(eval(value))
            }}/>
          </div>


        </form>
      </div>
    </div>
  );
};

export default Calculator;
