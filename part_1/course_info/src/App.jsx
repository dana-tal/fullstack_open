
const Header = (props) =>{
  return (<h1>{props.course_name}</h1>);
}


const Part = (props) =>{
   return (<p>{props.part}  {props.exercise}</p>);

}

const Content = (props) =>{
       
     return  <> 
       { props.parts.map((part,index)=>(<Part key={index} part={part.name}  exercise={part.exercises} />)) }    
       </>;
}

const Total = (props) =>{

  let total =0;
  for(let i=0;i<props.parts.length;i++)
  {
    total += props.parts[i].exercises;
  }
  return (<p>Number of exercises {total}</p>);
}

const App = () => {

const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course_name={course} />
      <Content parts={parts}  />                 
      <Total parts={parts} />
    </div>
  )
}


export default App
