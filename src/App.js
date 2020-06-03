import React,{useState, useEffect} from 'react';
import JobBoard from './components/Jobs'; 
import data from './data.json';
import './App.css';



function App() {
  const [jobs,setJobs] = useState([]);
  const [filters,setFilters] = useState([]);
  useEffect(() => {setJobs(data)},[]);

  const filterByTags = ({}) => {

  }
  const filteredJobs = jobs.filter(filterByTag);
  
  const handleTagClick = (tag) => {
    setFilters([...filters, tag]);
  }
  return (
    <div>
      <header className="bg-green-900 mx-auto mb-12">
      <img src='/images/bg-header-desktop.svg' />
      </header>
      {jobs.length === 0 ? (
           <p>Jobs are fetching...</p>
         ) : (
           jobs.map(eachJob => (
             <JobBoard job={eachJob}
              key={eachJob.id}
              handleTagClick={handleTagClick} />
           ))
         )
      }
    </div>
  );
}

export default App;
