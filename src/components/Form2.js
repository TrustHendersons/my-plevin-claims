import React from "react";

function Form2({ register, shouldDisplay }) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

          <div className="form-group grid grid-cols-2 gap-4">

            <div>
            <label htmlFor="title" class="mr-2">Title:</label>
              <select name="title"  {...register("title", { required: true } )}   >
              <option value="title">Title</option>                  
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
              </select>
            </div>            

              <div>
              <label htmlFor="name" class="mr-2">First Name:</label>
              <input
                type="text"
                id="firstName"                
                name="firstName"
                placeholder="Enter your first name"  
                {...register("firstName", { required: true } )}            
              /> 
              </div>

              <div>
              <label htmlFor="lastName" class="mr-2">Last Name:</label>
              <input
                type="text"
                id="lastName"                
                name="lastName"
                placeholder="Enter your last name"   
                {...register("lastName", { required: true } )}              
              />  
              </div>    

              <div>
              <label htmlFor="dob"  class="mr-2">Date of Birth:</label>
              <input   
                type="date"
                id="dob"                
                name="dob" 
                {...register("dob", { required: true } )}                                     
              />  
              </div>    

              <div>
              <label htmlFor="address" class="mr-2">Your Address:</label>
              <input   
                type="text"
                id="address"                
                name="address"
                placeholder="Your Address" 
                {...register("address", { required: true } )}                                        
              />  
              </div>    
          </div>
    </div>
  );
}

export default Form2;
