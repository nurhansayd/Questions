import { useState } from "react";
import questions from './data'
import SingleQuestion from './SingleQuestion'


const App = () => {
  
const [question, setQuestion] = useState(questions)
return (
  <section className='container'>
    <h1>Questions</h1>
    {question.map((ques) => {
    return (
      <SingleQuestion key={ques.id} {...ques}></SingleQuestion>
    );
    })}
  </section>
);
};
export default App;
