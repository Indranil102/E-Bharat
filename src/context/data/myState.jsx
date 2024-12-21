import MyContext from "./myContext";


function myState(props) {
  const state = {
    name: "Indranil Samanta",
    enroll: 11,
  };

  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
