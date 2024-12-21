import { useContext } from "react";
import Layout from "../../components/layout/layout";
import MyContext from "../../context/data/myContext";

function Home() {
  const context=useContext(MyContext);
  console.log(context)
    return (
      <Layout>Home</Layout>
    );
  }
  
  export default Home;
  