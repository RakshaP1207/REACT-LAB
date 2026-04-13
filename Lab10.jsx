import React,{useState,useEffect} from 'react';
const DataFetcher=()=>{
  const[data,setData]=useState([]),[q,setQ]=useState(''),[err,setErr]=useState(null),[load,setLoad]=useState(false);
  const fetchDAta=async()=>{
    setLoad(true);
    try{
      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      if(!res.ok)throw new Error('Fetch failed');
      setData(await res.json());
      setErr(null);
}
catch(e){
  setErr(e.message);

}
setLoad(false);
  };
  useEffect(()=>{fetchDAta();},[]);
  const filtered =q?data.filter(d=>d.name.toLowerCase().includes(q.toLowerCase())):data;
  return(
    <div>
      <h1>UserData</h1>
      {err&&<div>Error:{err}</div>}
      <input value={q} onChange={e=>setQ(e.target.value)}placeholder="Search..."/>
      {load?<div>LOading...</div>:(
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>City</th></tr></thead>
          <tbody>
            {filtered.length?filtered.map(({id,name,email,address})=>(
              <tr key={id}><td>{name}</td><td>{email}</td><td>{address.city}</td></tr>
            )):<tr><td colSpan="3">No results</td></tr>}
          </tbody>
        </table>
      )}
      <button onClick={fetchData}></button>
    </div>
  );
    
  };
  export default DataFetcher;
