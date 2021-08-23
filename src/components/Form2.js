import React from "react";  
import { useForm } from "react-hook-form";



function Form2({ 
  register,  
  watch,
  moreDetail,
  shouldDisplay
}) {

  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="text-blue-dark mb-1">Please provide your details.</h3> 
        <p>This is so we can find your bank account with the lenders.</p>      

          <div className="form-group grid grid-cols-1 grid-rows-none md:grid-cols-3 md:grid-rows-2 md:gap-2">

            <div>
            <label htmlFor="title" class="mr-2">Title:</label> <br />
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

              <div className="flex mt-6 col-span-2">
                <input   
                  type="text"
                  id="postcode"                
                  name="postcode"
                  placeholder="Postcode" 
                  {...register("postcode", { required: true } )}        
                  
                  className="border-t mr-0 border-b border-l"
                />  
                <button class="btn-blue-input w-auto">Find Address</button>
              </div> 

              <div>
                <label htmlFor="lastName" className="mr-2">More Details</label>
                <input type="checkbox" {...register("moreDetail")} />

                {moreDetail && (
                  <div>
                    <label>Interests</label>
                    <input type="text" {...register("Interests")} />
                  </div>
                )}

              </div>

          </div>
    </div>
  );
}

export default Form2;
