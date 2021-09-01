import React, { Component } from "react";
import {Helmet} from "react-helmet";

function Form2({ 
  register,  
  watch,
  moreDetail,
  shouldDisplay
}) {

    const handleChange = e => {
    let isChecked = e.target.checked;
  };



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

                  <div id="postcode_lookup"></div>
                  

                  <label>Address Line One</label>
                  <input id="first_line" type="text" />
                  
                  <label>Address Line Two</label>
                  <input id="second_line" type="text" />

                  <label>Address Line Three</label>
                  <input id="third_line" type="text" />

                  <label>Post Town</label>
                  <input id="post_town" type="text" />

                  <label>Postcode</label>
                  <input id="postcode" type="text" />                                      
              </div> 

              <div className="flex mt-6 col-span-2">
                <p className="mr-2">Was this your address at the time you took out the PPI?</p>
                <input
                    type="checkbox"
                    id="PrevYes"
                    name="PrevYes"
                    value="yes" 
                    isChecked
                    onChange={handleChange}                            
                    {...register('PrevYes')}             
                  />
                  <label htmlFor="prevYes" className="mx-2">Yes</label>   
                  <input 
                    type="checkbox"
                    id="PrevNo"
                    name="PrevNo"
                    value="yes" 
                    isChecked
                    onChange={handleChange}                    
                    {...register('PrevNo')}                    
                   />
                  <label htmlFor="prevNo" className="mx-2">No</label>   
                </div>
                
                <div>
                {moreDetail && (
                  <div className="col-span-2 mt-2">
                    <input
                      type="text"
                      id="prevAddress"                
                      name="prevAddress"
                      onChange={handleChange}   
                      placeholder="Enter your previous address"   
                      {...register("prevAddress", { required: true } )}              
                    />                        
                  </div>
                )}

              </div>

          </div>
    </div>
  );
}

export default Form2;
