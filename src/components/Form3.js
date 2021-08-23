import React from "react";

function Form3({ register, shouldDisplay }) {
  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="text-blue-dark mb-1">Please provide your contact details.</h3> 
        <p>This is so we can contact you and send you documentation regarding your claim.</p> 

        <div class="grid grid grid-cols-2 gap-4"> 

        <div>
        <label htmlFor="email"  class="mr-2">Email:</label>
        <input   
          type="email"
          id="email"                
          name="email"
          placeholder="Enter your email"                
          {...register("email", { required: true } )}   
        />  
        </div> 

        <div>
        <label htmlFor="tel"  class="mr-2">Telephone:</label>
        <input   
          type="tel"
          id="tel"                
          name="tel"
          placeholder="Enter your number"                
          {...register("tel", { required: true } )}   

        />  
        </div>  

        <div className="col-span-2 flex items-center">
          <input
              className="float-left m-3"
              type="checkbox"
              id="privacy"                    
              name="privacy"
              value="yes"                
              {...register("privacy", { required: true } )}   
            />
          <label htmlFor="privacy" className="mr-2 text-sm">I have read and understood the Privacy Policy and agree to be contacted using the details supplied.</label>               
        </div>                                       

        </div>

    </div>
  );
}

export default Form3;
