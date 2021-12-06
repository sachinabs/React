import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;

// import { useState } from "react";

// const Home = () => {

// const [name,setName] =useState('sachin')
// const [age,setAge] = useState(15);

// var logHello = ()=>{
//   setName("Anish");
//   setAge(23)

// }


//     return ( <div className="home">
//         <h2>Home Page for {name} and his age is {age}</h2>
//         <button onClick={logHello}>Say Hello</button>
       
//     </div> );
// }
 
// export default Home;