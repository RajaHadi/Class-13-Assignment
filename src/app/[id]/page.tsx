import { log } from 'console';
import React from 'react'

const  page  = async (props:any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const res=await url.json();
    console.log(res)
  return (
    <div>
        <h1 className='text-3xl p-4 pt-0'>User Data:</h1>
      <h1 className='p-6 font-serif'>
       id: &nbsp;{props.params.id} <br />
       Name: &nbsp;{res.name} <br />
       UserName: &nbsp; {res.username} <br />
      Email: &nbsp; {res.email} <br />
       City: &nbsp; {res.address.city} <br />
       Street: &nbsp; {res.address.street} <br />
       ZipCode: &nbsp;{res.address.zipcode} <br />
       Suite: &nbsp;{res.address.suite} <br />
       Phone: &nbsp; {res.phone} <br />
       Website: &nbsp; {res.website} <br />
       Company: &nbsp; {res.company.name} <br />
       Company CatchPhrase: &nbsp; {res.company.catchPhrase} <br />
       Bs: &nbsp; {res.company.bs}
      </h1>
    </div>
  )
}

export default page
