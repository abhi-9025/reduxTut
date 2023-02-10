import React from 'react'

const AddContact = () => {
  return (

<div className='container'>
<div className='row'>
  <h1 className='display-3 my-5 text-center'> 
 Add Student 
 </h1>
   <div className='col-md-6 shadow mx-auto p-5'>
      <form>
          <div className='form-group'>
               <input type="text" placeholder='Name' className='form-control'/>
          </div>
          <div className='form-group'>
               <input type="text" placeholder='Email' className='form-control'/>
          </div>
          <div className='form-group'>
               <input type="text" placeholder='Phone number' className='form-control'/>
          </div>
          <div className='form-group'>
               <input type="submit" value="Add student " className='btn btn-dark'/>
          </div>
      </form>
   </div>
</div>
</div>
  )
}

export default AddContact