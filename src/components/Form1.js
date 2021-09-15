import React from "react";
import FeatherIcon from "feather-icons-react"

function Form1 ({
  register,
  errors,
  shouldDisplay,
  defaultValues,
}) {


  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="blue-dark mb-1">Please select all the banks you had PPI with:</h3> 
        <p>(you can select multiple banks, this could mean you have more claims)</p>


        <div className="form-group grid grid-cols-2 md:grid-cols-3 gap-4 align-items-center">

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Lloyds, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Lloyds</label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Barclays, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Barclays</label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Barclaycard, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Barclaycard</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Natwest, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Natwest</label>                      
              </div>   
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="RBS, " 
                      {...register("lenders", { required: true } )}             
                    />
                  RBS</label>                      
              </div>   
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="TSB, " 
                      {...register("lenders", { required: true } )}             
                    />
                  TSB</label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Halifax, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Halifax</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Bank of Scotland, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Bank of Scotland</label>                      
              </div>     

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="HSBC, " 
                      {...register("lenders", { required: true } )}             
                    />
                  HSBC</label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Capital One, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Capital One</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="MBNA, " 
                      {...register("lenders", { required: true } )}             
                    />
                  MBNA</label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Egg, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Egg</label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Mint, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Mint</label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Clydesdale, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Clydesdale</label>                      
              </div>

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Yorkshire, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Yorkshire</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="M and S, " 
                      {...register("lenders", { required: true } )}             
                    />
                  M&amp;S Bank</label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Santander, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Santander</label>                      
              </div>  
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Alliance, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Alliance</label>                      
              </div>                                                        

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Abbey, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Abbey</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Black Horse, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Black Horse</label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Northern Rock, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Northern Rock</label>                      
              </div>                    
 
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Coop, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Co-operative Bank</label>                      
              </div>  
        </div>
       
        <div className="form-group mt-4">
        <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="Other, " 
                      {...register("lenders", { required: true } )}             
                    />
                  Other</label>                      
              </div>  
              <div className="mt-2">
                <input
                  type="text"              
                  name="otherlender"
                  placeholder="Add them here"   
                  defaultValue={defaultValues && defaultValues.otherlender}
                  {...register("otherlender" )}              
                />  
              </div>  
        </div>          
        {errors.lenders?.type === 'required' && <p class="errors mt-4"><FeatherIcon icon="alert-triangle" className="mr-2" />Please choose at least one lender</p>}
    </div>
  );
}

export default Form1;
