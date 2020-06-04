import React,{useState, useEffect} from 'react';
import JobBoard from './components/Jobs'; 
import data from './data.json';
import './App.css';



function App() {
  const [jobs,setJobs] = useState([]);
  const [filters,setFilters] = useState([]);
  useEffect(() => {setJobs(data)},[]);
 console.log(filters);

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  }
 
  const filterPageBySpecificTags = ({role,level,tools,languages}) => {
    if(filters.length === 0) {
      return true;
    }
    const tags = [role,level];
    console.log(tags)
    if(tools) {
      tags.push(...tools);
    }
    if(languages) {
      tags.push(...languages);
    }

    return (
    filters.every(filter => tags.includes(filter))
    )
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((tag) => tag !== passedFilter))
  }

  const clearFilters = () => {
    setFilters([])
  }

  const filteredJobs = jobs.filter(filterPageBySpecificTags);
  console.log(filteredJobs)

  return (
    <div>
      <header className="bg-green-900 mx-auto mb-12">
      <img 
      className="w-full"
      src='/images/bg-header-desktop.svg' 
      />
      </header>
      <div className="container mx-auto ">
      {filters.length > 0 && (
        <div className="flex bg-white shadow-md -my-20 mb-16
        mx-10 p-10 rounded z-10 relative">
        {filters.map((filter) => 
        (<span onClick={() => handleFilterClick(filter)}
        className="cursor-pointer 
        text-teal-500 bg-teal-100 
        font-bold mr-4 mb-4 p-2 flex flex-col text-center">
        <i className="fas fa-times bg-green-400 py-1 -mt-3 text-white"></i>
        {filter} 
        </span>
        ))}
        <button 
        onClick={clearFilters}
        className="font-bold
        text-gray-800 ml-auto">
          Clear
        </button>
        </div>
      )}  
      {filteredJobs.length === 0 ? (
           <p>Jobs are fetching...</p>
         ) : (
          filteredJobs.map(eachJob => (
             <JobBoard job={eachJob}
              key={eachJob.id}
              handleTagClick={handleTagClick} />
           ))
         )
      }
    </div>
    </div>
  );
}

export default App;
