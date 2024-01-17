import React, { useEffect, useRef, useState } from 'react';
import ShowResults from './ShowResults';

function Search() {
  const [inputText, setInputText] = useState('');
  const [showResultsContainer, setShowResultsContainer] = useState(false);
  const resultsContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (showResultsContainer && resultsContainerRef.current && !resultsContainerRef.current.contains(e.target)) {
        setShowResultsContainer(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showResultsContainer]);

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent the click from reaching the document click handler immediately
    setShowResultsContainer(true);
  };

  return (
    <div className='relative hidden lg:block'>
      {/* search box with icon and input */}
      <div className='relative w-full  flex items-center rounded-full overflow-hidden'>
        <input
          ref={inputRef}
          onClick={handleInputClick}
          onChange={(e) => setInputText(e.target.value.toLowerCase().trim())}
          className='searchbox w-full md:w-72 outline-none border border-primary p-2 pl-4 text-#040721 bg-#f2f4fe placeholder-#040721 rounded-l-full'
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <div className='border-l border-t border-b cursor-pointer border-primary p-2 px-7 bg-primary text-white rounded-r-full'>
          {/* Magnifying glass icon */}
          <span className='ri-search-line'></span>
        </div>
      </div>
      {/* searchbox dropdown menu */}
      {showResultsContainer && (
        <div ref={resultsContainerRef} className=''>
          <ShowResults inputText={inputText} />
        </div>
      )}
    </div>
  );
}

export default Search;
