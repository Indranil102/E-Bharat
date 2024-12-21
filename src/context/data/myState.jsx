import MyContext from "./myContext";


function myState(props) {
  const state = {
    name: "Indranil Samanta",
    rollno: '11',
  };

  const color="red";

  return (
    <MyContext.Provider value={{state,color}}>
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
