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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
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
                      {...register("lenders" )}             
                    />
                  Co-operative Bank</label>                      
              </div>  
        </div>

        {errors.lenders?.type === 'required' && <p class="errors mt-4"><FeatherIcon icon="alert-triangle" className="mr-2" />Please choose at least one lender</p>}
       

        <div className="form-group flex align-items-center mt-4">
              <div>
                <label htmlFor="otherlender" class="mr-2">Lender not listed?</label>
                <input
                  type="text"              
                  name="otherlender"
                  placeholder="Add them here"   
                  defaultValue={defaultValues && defaultValues.otherlender}
                  {...register("otherlender" )}              
                />  
              </div>  
        </div>          
    
    </div>
  );
}

export default Form1;
