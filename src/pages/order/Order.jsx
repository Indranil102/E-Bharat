import { useContext } from "react"
import Layout from "../../components/layout/layout"
import MyContext from "../../context/data/myContext"


function Order() {
  const context= useContext(MyContext);
  const{name, rollno }=context
  return (
    <Layout>
      order
      <h1>name:{name}</h1>
      <h2>roll no : {rollno}</h2></Layout>
  )
}

export default Order
