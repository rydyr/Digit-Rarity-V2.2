import * as DRM from './DRIndex.js';
import React, { useState,useEffect } from "react";
import Input from "./components/input.jsx";
import MyButton from "./components/button.jsx";
import Result from "./components/result.jsx";
import Menu from "./components/menu.jsx";
import Owner from './components/owner.jsx';
import score from "./dataobjects/score.js";
import wordifyNum from "./dataobjects/switch.js";
import findEnsOwner from './drmodules/owner.js';
import "./components/input.css";
import "./components/button.css";
import "./components/result.css";
import "./App.css";


export default function App() {
  const rotArr = [0, 1, 6, 8, 9];
  const perArr = [0, 6, 8, 9];
  const [input, setInput] = useState("");
  const [owner, setOwner] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [typeScore, setTypeScore] = useState(0);
  const [typeList, setTypeList] = useState("");
  const [typePop, setTypePop] = useState("");
  const [result, setResult] = useState({
   // owner: undefined,
    length: 0,
    palindrome: false,
    ambigram: false,
    strobogrammatic: false,
    perfectprint: false,
    fourtwenty: false,
    sixtynine: false,
    prime: false,
    sequentialAsc: false,
    sequentialDsc: false,
    leadingzeros: false,
    trailingzeros: false
  });

  const handleChange = (newInput) => {
       setInput(newInput);
  };
  

  const calculateScore = (result) => {
    let objCall = "";
    let types = "";
    let pop;
    let gpop;
    let length = wordifyNum(result.length);
    if (length) {
       for (const key in result) {
          if (result[key] && key !== "length") {
             objCall = objCall + key;
            types = types + "#" + key + " ";
          }
       }
    if (objCall){
      pop = parseInt(score[objCall][length]);
      gpop = parseInt(score[objCall]["general"]);
    } else {
      pop = parseInt(score["floor"][length]);
      gpop = pop;
    }
    const setTotal = 111111000;
    const logScore1 = Math.log(setTotal/pop) / Math.log(10);
    const logScore2 = Math.log(setTotal/gpop) / Math.log(10);
    const finalScore = logScore1.toFixed(2);
    const gFinalScore = logScore2.toFixed(2);
    const strP = gpop.toLocaleString();
    const strPop = strP + " / 111,111,000"; 
      if (!types) {
         types = "Floor";
      }
      
    setFinalScore(finalScore);
    setTypeList(types);
    setTypeScore(gFinalScore);
    setTypePop(strPop);
  }   
}

  

  const calculateResults = async () => {
    const num = Number(input);
   // const owner = await findEnsOwner(input);
    setResult({
      //owner: owner,
      length: input.length,
      palindrome: DRM.Palindrome(input),
      ambigram: DRM.RotationChecker(input, rotArr, DRM.AmbHelper),
      strobogrammatic: DRM.RotationChecker(input, rotArr, DRM.StrHelper),
      perfectprint: DRM.RotationChecker(input, perArr, DRM.PerHelper),
      prime: DRM.IsPrime(num),
      fourtwenty: DRM.Has420(input),
      sixtynine: DRM.Has69(input),
      sequentialAsc: DRM.Sequential(input, "asc"),
      sequentialDsc: DRM.Sequential(input, "dsc"),
      leadingzeros: DRM.LeadingZeros(input),
      trailingzeros: DRM.TrailingZeros(input)
    });
  };

useEffect(() => {
  calculateScore(result);
}, [result]);



async function calcAll() {
  calculateResults()
  await findEnsOwner(input).then(owner => {
    setOwner(owner)
  })
}

useEffect(() => {
  console.log(owner)
},[owner])


  return (
    <main>
      <Menu />
      <h1>Digit Rarity</h1>
      <div className="subTitle">
        <h3 className="enter">Enter Your Digit</h3>
        <h3 className="version">V.2</h3>
      </div>
      <Input value={input} onChange={handleChange} /> 
      <MyButton className="myButton" onCalculate={calcAll} isValid={input.length >= 3 && input.length <= 8}/>
      <Owner owner={owner} />
      <Result
        type="scorecard"
        isTrue={finalScore}
        score={finalScore}
        gscore={typeScore}
        types={typeList}
        tPop={typePop}
      /> 
      <Result
        type="Length"
        isTrue={result.length}
        charLen={result.length}
        length={result.length}
      />
      <Result
        type="palindrome"
        isTrue={result.palindrome}
        length={result.length}
      />
      <Result type="ambigram" isTrue={result.ambigram} length={result.length} />
      <Result
        type="strobogrammatic"
        isTrue={result.strobogrammatic}
        length={result.length}
      />
      <Result
        type="perfectprint"
        isTrue={result.perfectprint}
        length={result.length}
      />
      <Result
        type="fourtwenty"
        isTrue={result.fourtwenty}
        length={result.length}
      />
      <Result
        type="sixtynine"
        isTrue={result.sixtynine}
        length={result.length}
      />
      <Result type="prime" isTrue={result.prime} length={result.length} />
      <Result
        type="sequentialAsc"
        isTrue={result.sequentialAsc}
        length={result.length}
      />
      <Result
        type="sequentialDsc"
        isTrue={result.sequentialDsc}
        length={result.length}
      />    
      <Result
        type="leadingzeros"
        isTrue={result.leadingzeros}
        length={result.length}
      />
      <Result 
        type="trailingzeros"
        isTrue={result.trailingzeros}
        length={result.length}
      />   
    </main>
  );
}




