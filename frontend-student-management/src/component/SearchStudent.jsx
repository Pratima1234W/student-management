import React from 'react'

function SearchStudent({search, setSearch}){
  return (
    <input
    type = "text"
    placeholder='search by name'
    className='form-control mb-2'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchStudent