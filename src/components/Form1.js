import React from "react";

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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      value="Capitol One, " 
                      onChange={handleChange}
                      {...register("lenders", { required: true } )}             
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      {...register("lenders", { required: true } )}             
                    />
                  Co-operative Bank</label>                      
              </div>  

              {errors.lenders?.type === 'required' && "Please choose at least one lender"}

        </div>
       

        <div className="form-group flex align-items-center mt-4">
              <div>
                <label htmlFor="lender" class="mr-2">Lender not listed?</label>
                <input
                  type="text"              
                  name="otherlender"
                  placeholder="Add them here"   
                  defaultValue={defaultValues && defaultValues.otherlender}
                  {...register("lender" )}              
                />  
              </div>  
        </div>          
    
    </div>
  );
}

export default Form1;
