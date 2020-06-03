import React,{useState, useEffect} from 'react';
import JobBoard from './components/Jobs'; 
import data from './data.json';
import './App.css';



function App() {
  const [jobs,setJobs] = useState([]);
  useEffect(() => {setJobs(data)},[]);
  console.log(jobs);
  return (
    <div className="App">
      {jobs.length === 0 ? (
           <p>Jobs are fetching...</p>
         ) : (
           jobs.map(eachJob => (
             <JobBoard job={eachJob} key={eachJob.id} />
           ))
         )
      }
    </div>
  );
}

export default App;
