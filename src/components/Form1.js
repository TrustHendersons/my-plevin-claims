import React from "react";

function Form1 ({
  register,
  shouldDisplay,
}) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="blue-dark mb-1">Please select the banks you had PPI with:</h3> 
        <p>(you can select multiple banks)</p>

        <div className="form-group grid grid-cols-2 gap-4">
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

              <div>
                <label htmlFor="checkbox" className="mr-2">Barclaycard:</label>
                <input
                    type="checkbox"
                    id="barclaycard"                    
                    name="barclaycard"
                    value="yes"                
                    {...register('barclaycard')}       
                  />   
              </div>

              <div>
                <label htmlFor="checkbox" className="mr-2">Natwest:</label>
                <input
                    type="checkbox"
                    id="natwest"                    
                    name="natwest"
                    value="yes"                
                    {...register('natwest')}       
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">RBS:</label>
                <input
                    type="checkbox"
                    id="rbs"                    
                    name="rbs"
                    value="yes"                
                    {...register('rbs')}       
                  />   
              </div>                

              <div>
                <label htmlFor="checkbox" className="mr-2">TSB:</label>
                <input
                    type="checkbox"
                    id="tsb"                    
                    name="tsb"
                    value="yes"                
                    {...register('tsb')}       
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">Halifax:</label>
                <input
                    type="checkbox"
                    id="halifax"                    
                    name="halifax"
                    value="yes"                
                    {...register('halifax')}       
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Bank of Scotland:</label>
                <input
                    type="checkbox"
                    id="bankofscotland"                    
                    name="bankofscotland"
                    value="yes"                
                    {...register('bankofscotland')}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">HSBC:</label>
                <input
                    type="checkbox"
                    id="hsbc"                    
                    name="hsbc"
                    value="yes"                
                    {...register('hsbc')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Capital One:</label>
                <input
                    type="checkbox"
                    id="capitalone"                    
                    name="capitalone"
                    value="yes"                
                    {...register('capitolone')}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">MBNA:</label>
                <input
                    type="checkbox"
                    id="mbna"                    
                    name="mbna"
                    value="yes"                
                    {...register('mbna')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">EGG:</label>
                <input
                    type="checkbox"
                    id="egg"                    
                    name="egg"
                    value="yes"                
                    {...register('egg')}
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">Mint:</label>
                <input
                    type="checkbox"
                    id="mint"                    
                    name="mint"
                    value="yes"                
                    {...register('mint')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Clydesdale Bank:</label>
                <input
                    type="checkbox"
                    id="clydesdale"                    
                    name="clydesdale"
                    value="yes"                
                    {...register('clydesdale')}
                  />   
              </div>   

              <div>
                <label htmlFor="checkbox" className="mr-2">Yorkshire Bank:</label>
                <input
                    type="checkbox"
                    id="yorkshire"                    
                    name="yorkshire"
                    value="yes"                
                    {...register('yorkshire')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">M&amp;S Bank:</label>
                <input
                    type="checkbox"
                    id="mands"                    
                    name="mands"
                    value="yes"                
                    {...register('mands')}
                  />   
              </div>  

              <div>
                <label htmlFor="checkbox" className="mr-2">Santander:</label>
                <input
                    type="checkbox"
                    id="santander"                    
                    name="santander"
                    value="yes"                
                    {...register('santander')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Alliance &amp; Leicester:</label>
                <input
                    type="checkbox"
                    id="alliance"                    
                    name="alliance"
                    value="yes"                
                    {...register('alliance')}
                  />   
              </div>  


              <div>
                <label htmlFor="checkbox" className="mr-2">Abbey National:</label>
                <input
                    type="checkbox"
                    id="abbey"                    
                    name="abbey"
                    value="yes"                
                    {...register('abbey')}
                  />   
              </div> 

              <div>
                <label htmlFor="checkbox" className="mr-2">Black Horse:</label>
                <input
                    type="checkbox"
                    id="blackhorse"                    
                    name="blackhorse"
                    value="yes"                
                    {...register('blackhorse')}
                  />   
              </div>    

              <div>
                <label htmlFor="checkbox" className="mr-2">Northern Rock:</label>
                <input
                    type="checkbox"
                    id="northernrock"                    
                    name="northernrock"
                    value="yes"                
                    {...register('northernrock')}
                  />   
              </div>   

              <div>
                <label htmlFor="checkbox" className="mr-2">Co-operative Bank:</label>
                <input
                    type="checkbox"
                    id="coop"                    
                    name="coop"
                    value="yes"                
                    {...register('coop')}
                  />   
              </div>    




        </div>
    </div>
  );
}

export default Form1;
