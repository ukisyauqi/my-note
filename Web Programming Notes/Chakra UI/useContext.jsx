// create file ContextProvider.jsx
		import { createContext, useState } from "react";

		export const AppContext = createContext();
		export const AppProvider = (props) => {
		  const [myState1, setMyState1] = useState("Hi");
		  const [myState2, setMyState2] = useState("Hi");
		  const [myState3, setMyState3] = useState("Hi");

		  const myFun1 = () => { console.log("Hi") };
		  const myFun2 = () => { console.log("Hi") };
		  const myFun3 = () => { console.log("Hi") };

		  const states = { 
		  	myState1, 
		  	setMyState1, 
	  	myState2, 
	  	setMyState2, 
	  	myState3, 
	  	setMyState3 
	  };

	  const functions = {
	    myFun1,
	    myFun2,
	    myFun3
	  };

	  return (
	    <AppContext.Provider value={{ states, functions }}>
	      {props.children}
	    </AppContext.Provider>
	  );
	};


// wrap <App/> with <AppProvider/> in index.js
	import { AppProvider } from "./ContextProvider.jsx";
	ReactDOM.render(
	  <React.StrictMode>
	    <AppProvider>
	      <App />
	    </AppProvider>
	  </React.StrictMode>,
	  document.getElementById("root")
	);


// use the context
	import { useContext } from "react";
	import { AppContext } from "../ContextProvider";
	
	export default function MyButton(props) {
	  const { states, functions } = useContext(AppContext)
	  const { myState1, setMyState2, myState3 } = states
	  const { myFun1, myFun2, myFun3 } = functions

	  return (
	  	<button onCLick={myFun1}>{myState1}</button>
	  )
	}