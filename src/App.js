import { useState } from "react";

const user = {
  name : 'Divya Macharla',
  url : 'https://www.google.com',
};
const listOfCourses = [
  {id : 1,title : 'React for beginners from A to Z'},
  {id : 2, title : 'Learn Angular for beginners'},
  {id : 3, title : 'Learn Angular for Intermediate level'}
];
const courses = listOfCourses.map(c => 
  <li key={c.id} style={{color : 'magenta'}}> 
    <a href="{c.id}">
      {c.title}
    </a> 
  </li>
);
export default function MyApp(){
  return (
    <div style={{padding:'8px'}}>
      <h1 style={{textAlign:'center'}}>
        Welcome to helloworld platform 
      </h1>
      <p><b>Instructor details</b></p>
      <p>------------------------</p>
      <p>
        {user.name} 
      </p>
      <MyButton/>
      <h2>Available Courses for FREE</h2>
        <ul>{courses}</ul>
    </div>
  );
}

function MyButton(){
  const [count,setCount] = useState(1000);
  function follow(){
    setCount(count + 1);
  }
  return(
    <button onClick={follow} style={{backgroundColor:'#61dafb',border:'none'}}>
      Follow on Linkedin ({count} followers)
    </button>
  );
}
