import React, {useState} from 'react'
import ErrorBox from '../Error/ErrorBox'
import Editore from '../TextEditore/Editore'
export default function Users() {


  return (
    <>
     <div>Users</div>
     <ErrorBox mesage={'there is no user'} />
     <Editore  value={contentProduct}  onChange={setContentProduct}/>
    </>
   
  )
}
