import React from "react";

function Form1 ({
  register,
  shouldDisplay,
}) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>
        <form
          name="contact"
          method="post"
          action="/thank-you/"  
          data-netlify="true"
          data-netlify-honeypot="bot-field"           
        >  
      <input type="hidden" name="form-name" value="contact" />    
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
        </form>
    </div>
  );
}

export default Form1;
