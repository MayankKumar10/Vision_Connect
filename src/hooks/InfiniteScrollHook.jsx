import { useState,useEffect } from 'react';

export const InfiniteScrollHook = ({oldPost, allPosts}) => {
 const totalPages = Math.ceil(allPosts.length/ 6)
 const [pageNum, setPageNum] = useState(1);
 const [loading, setLoading] = useState(false);

 useEffect(()=>{
  const pageRef = oldPost.current;
  const handleScroll = (entries)=>{
    const target = entries[0];
  if(
    target.isIntersecting && 
    (pageNum < totalPages || (pageNum === 0 && totalPages===0))
  ){
      setLoading(true);
      setPageNum((prev)=>prev + 1);
      setTimeout(()=>setLoading(false), 1000);
    }
  };
  const observer = new IntersectionObserver(handleScroll);
  if(pageRef){
    observer?.observe(pageRef);
  }
  return () =>{
    observer.unobserve(pageRef);
  }
 },[]);

 return { pageNum, loading };
}
