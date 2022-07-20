import { useState,useEffect } from 'react';

export const useDebounceHook = (searchVal, delay) => {
  const [searchValue, setSearchValue] = useState(searchVal);

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setSearchValue(searchVal)
    },delay);

    return ()=> {clearTimeout(handler)};
  },[searchVal, delay])

  return searchValue
};

