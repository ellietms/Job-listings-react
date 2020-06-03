import React,{useState, useEffect} from 'react';
import JobBoard from './components/Jobs'; 
import data from './data.json';
import './App.css';



function App() {
  const [jobs,setJobs] = useState([]);
  useEffect(() => {setJobs(data)},[]);
  console.log(jobs);
  return (
    <div>
      <header className="bg-green-900 mx-auto mb-12">
      <img src='/images/bg-header-desktop.svg' />
      </header>
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
