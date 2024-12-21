import { useContext } from "react";
import Layout from "../../components/layout/layout";
import MyContext from "../../context/data/myContext";

function Home() {
  const context=useContext(MyContext);
  console.log(context);
  //const { name, rollno } = context;
  const {state,color}=context;
    return (
      <Layout>
        <h1>Name: {state.name}</h1>
        <h1>Rollno: {state.rollno}</h1>
        <p>my color : {color}</p>

        </Layout>
    );
  }
  
  export default Home;
  