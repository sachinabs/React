import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
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