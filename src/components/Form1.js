import React from "react";
import FeatherIcon from "feather-icons-react"

function Form1 ({
  register,
  errors,
  shouldDisplay,
  defaultValues,
  isChecked
}) {

  const handleChange = e => {
    let isChecked = e.target.checked;
  };

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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      value="Capitol One, " 
                      onChange={handleChange}
                      {...register("lenders" )}             
                    />
                  Capitol One</label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value="MBNA, " 
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
