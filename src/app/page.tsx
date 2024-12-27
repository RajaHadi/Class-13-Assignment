import Link from "next/link";
export default async function Home() {

  const url = await fetch("https://jsonplaceholder.typicode.com/users") ;
  const res = await url.json();
  
  return (
   <>
    <h1 className="text-4xl pl-1">Users List:</h1>
  {res.map((user:any, index:number)=>(
    <div key={index} className="p-2">
     
      <Link href={`${user.id}`}>

      <h1>
        {user.id}
        {user.name}
        </h1></Link>

    </div>
  ))}
   </>
  );
}
