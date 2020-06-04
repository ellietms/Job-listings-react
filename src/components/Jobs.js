import React from "react";

const Jobs = ({job : {
   company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools },
    handleTagClick
}) => {
    const tags = [role,level];
    if(languages) {
        tags.push(...languages);
    }
    if(tools){
        tags.push(...tools);
    }
    return(
  <div className={`flex cursor-pointer flex-col bg-white shadow-md 
  my-16 mx-10 p-6 rounded transform hover:-translate-y-1 hover:scale-110 
  ${featured && 'border-l-4 border-teal-500 border-solid'}
  } lg:flex-row lg:my-5`}>
    <div>
      <img className="-mt-16 mb-4 w-20 h-20
       lg:my-0  lg:h-24  lg:w-24"
       src={logo} alt={company} />
    </div>
    <div className="flex flex-col 
     ml-4 ">
      <h3 className="font-bold  text-teal-500 ">
          {company}
          {isNew && (
          <span className="text-teal-100 
          bg-teal-500 
          uppercase mx-2 p-2 rounded-full">
              New!
         </span>)
          }   
          {featured && (
          <span  className="text-white
          bg-red-700  m-2
          uppercase px-2 py-2 rounded-full">
          Featured
          </span>)
          }         
      </h3>
      <h2 className="font-bold text-2lg my-2">{position}</h2>
      <p className="text-gray-700">
        {postedAt} . {contract} . {location}
      </p>
    </div>
    <div className="flex flex-wrap
     items-center mx-4 pt-4 border-t  border-gray-200 
     border-solid lg:ml-auto lg:border-0">

        {tags.map((tag) =>
                <span 
                onClick = {() => handleTagClick(tag)}
                className="text-teal-500 mb-2 bg-teal-100 font-bold
                 mr-2 p-2 rounded cursor-pointer">
                    {tag}
                </span>)
        }
    </div>
  </div>
    )};

export default Jobs;
