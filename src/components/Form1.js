import React from "react";

function Form1 ({
  register,
  shouldDisplay,
}) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <div className="form-group">
              <div> 
                <label htmlFor="checkbox" className="mr-2">Lloyds:</label>
                <input
                    type="checkbox"
                    id="lloyds"
                    name="lloyds"
                    value="yes" 
                    {...register('lloyds')}             
                  />    
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">Barclays:</label>
                <input
                    type="checkbox"
                    id="barclays"                    
                    name="barclays"
                    value="yes"                
                    {...register('barclays')}       
                  />   
              </div>              
        </div>
    </div>
  );
}

export default Form1;
