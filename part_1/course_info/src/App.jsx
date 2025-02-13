
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

  const exercises = props.exercises;
  let total =0;
  for(let i=0;i<exercises.length;i++)
  {
    total += exercises[i];
  }
  return (<p>Number of exercises {total}</p>);
}

const App = () => {
 /* const course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
*/
const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1,part2,part3];
  const exercises = [part1.exercises,part2.exercises,part3.exercises];
  return (
    <div>
      <Header course_name={course} />
      <Content parts={parts}  />                 
      <Total exercises={exercises} />
    </div>
  )
}


export default App
