import React from "react";

function Form1 ({
  register,
  shouldDisplay,
  isChecked
}) {

  const handleChange = e => {
    let isChecked = e.target.checked;
  };

  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="blue-dark mb-1">Please select the banks you had PPI with:</h3> 
        <p>(you can select multiple banks)</p>

        <div className="form-group grid grid-cols-2 md:grid-cols-3 gap-4 align-items-center">
              <div> 
                <input
                    type="checkbox"
                    id="lloyds"
                    name="lloyds"
                    value="yes" 
                    isChecked
                    onChange={handleChange}                    
                    {...register('lloyds')}             
                  />
                <label htmlFor="lloyds" className="ml-2">Lloyds</label>                      
              </div>  

              <div>
                <input
                    type="checkbox"
                    id="barclays"                    
                    name="barclays"
                    value="yes"                
                    {...register('barclays')}       
                  />   
                <label htmlFor="barclays" className="ml-2">Barclays</label>                  
              </div> 

              <div>
                <input
                    type="checkbox"
                    id="barclaycard"                    
                    name="barclaycard"
                    value="yes"                
                    {...register('barclaycard')}       
                  />   
                <label htmlFor="barclaycard" className="ml-2">Barclaycard</label>                  
              </div>

              <div>
                <input
                    type="checkbox"
                    id="natwest"                    
                    name="natwest"
                    value="yes"                
                    {...register('natwest')}       
                  />   
                <label htmlFor="natwest" className="ml-2">Natwest</label>                  
              </div>  

              <div>
                <input
                    type="checkbox"
                    id="rbs"                    
                    name="rbs"
                    value="yes"                
                    {...register('rbs')}       
                  />
                <label htmlFor="rbs" className="ml-2">RBS</label>                     
              </div>                

              <div>
                <input
                    type="checkbox"
                    id="tsb"                    
                    name="tsb"
                    value="yes"                
                    {...register('tsb')}       
                  />   
                <label htmlFor="tsb" className="ml-2">TSB</label>                  
              </div> 

              <div>
                <input
                    type="checkbox"
                    id="halifax"                    
                    name="halifax"
                    value="yes"                
                    {...register('halifax')}       
                  />   
                <label htmlFor="halifax" className="ml-2">Halifax</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="bankofscotland"                    
                    name="bankofscotland"
                    value="yes"                
                    {...register('bankofscotland')}
                  />   
                <label htmlFor="bankofscotland" className="ml-2">Bank of Scotland</label>                  
              </div> 

              <div>
                <input
                    type="checkbox"
                    id="hsbc"                    
                    name="hsbc"
                    value="yes"                
                    {...register('hsbc')}
                  />   
                <label htmlFor="hsbc" className="ml-2">HSBC</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="capitalone"                    
                    name="capitalone"
                    value="yes"                
                    {...register('capitolone')}
                  />   
                <label htmlFor="capitalone" className="ml-2">Capital One</label>                  
              </div> 

              <div>
                <input
                    type="checkbox"
                    id="mbna"                    
                    name="mbna"
                    value="yes"                
                    {...register('mbna')}
                  />   
                <label htmlFor="mbna" className="ml-2">MBNA</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="egg"                    
                    name="egg"
                    value="yes"                
                    {...register('egg')}
                  />   
                <label htmlFor="egg" className="ml-2">EGG</label>                  
              </div>  

              <div>
                <input
                    type="checkbox"
                    id="mint"                    
                    name="mint"
                    value="yes"                
                    {...register('mint')}
                  />   
                <label htmlFor="mint" className="ml-2">Mint</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="clydesdale"                    
                    name="clydesdale"
                    value="yes"                
                    {...register('clydesdale')}
                  />   
                <label htmlFor="clydesdale" className="ml-2">Clydesdale Bank</label>                  
              </div>   

              <div>
                <input
                    type="checkbox"
                    id="yorkshire"                    
                    name="yorkshire"
                    value="yes"                
                    {...register('yorkshire')}
                  />   
                <label htmlFor="yorkshire" className="ml-2">Yorkshire Bank</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="mands"                    
                    name="mands"
                    value="yes"                
                    {...register('mands')}
                  />   
                <label htmlFor="mands" className="ml-2">M&amp;S Bank</label>                  
              </div>  

              <div>

                <input
                    type="checkbox"
                    id="santander"                    
                    name="santander"
                    value="yes"                
                    {...register('santander')}
                  />   
                <label htmlFor="santander" className="ml-2">Santander</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="alliance"                    
                    name="alliance"
                    value="yes"                
                    {...register('alliance')}
                  />
                <label htmlFor="alliance" className="ml-2">Alliance &amp; Leicester</label>                     
              </div>  


              <div>
                <input
                    type="checkbox"
                    id="abbey"                    
                    name="abbey"
                    value="yes"                
                    {...register('abbey')}
                  />
                <label htmlFor="abbey" className="ml-2">Abbey National</label>                     
              </div> 

              <div>
                <input
                    type="checkbox"
                    id="blackhorse"                    
                    name="blackhorse"
                    value="yes"                
                    {...register('blackhorse')}
                  />   
                <label htmlFor="blackhorse" className="ml-2">Black Horse</label>                  
              </div>    

              <div>
                <input
                    type="checkbox"
                    id="northernrock"                    
                    name="northernrock"
                    value="yes"                
                    {...register('northernrock')}
                  />   
                <label htmlFor="northernrock" className="ml-2">Northern Rock</label>                  
              </div>   

              <div>
                <input
                    type="checkbox"
                    id="coop"                    
                    name="coop"
                    value="yes"                
                    {...register('coop')}
                  />   
                <label htmlFor="coop" className="ml-2">Co-operative Bank</label>                  
              </div>    




        </div>
    </div>
  );
}

export default Form1;
