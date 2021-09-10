import React, {useEffect, createRef, useState} from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

function Form2({ 
  register,  
  watch,
  errors,
  defaultValues,
  moreDetail,
  shouldDisplay
}) {

    const handleChange = e => {
    let isChecked = e.target.checked;
  };


  const PostcodeLookupComponent = (props) => {
    const context = createRef();
  
    useEffect(() => {
      PostcodeLookup.setup({
        apiKey: "ak_kt1m9kndpJwBiEP6CXPnLaPdfdoYH",
        context: context.current,
        buttonStyle: {
          backgroundColor: "green",
          color: "white"
        },
        ...props
      });
    }, []);
  
    return <div ref={context}></div>;
  };
  
    const [address, setAddress] = useState({
      line_1: "",
      line_2: "",
      line_3: "",
      post_town: "",
      postcode: "",
    });  



  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="text-blue-dark mb-1">Please provide your details.</h3> 
        <p>This is so we can find your bank account with the lenders.</p>      

          <div className="form-group flex grid grid-cols-none grid-rows-none md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-x-20">

            <div>

              <div className="mt-2">
                <label htmlFor="title" class="mr-2">Title:</label> <br />
                <select name="title"  {...register("title", { required: true } )}   >
                <option value="title">Title</option>                  
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </div>            

              <div className="mt-2">
                <label htmlFor="name" class="mr-2">First Name:</label>
                <input
                  type="text"
                  id="firstName"                
                  name="firstName"
                  placeholder="Enter your first name"  
                  defaultValue={defaultValues && defaultValues.firstName}
                  {...register("firstName", { required: true, maxLength: 20 })}       
                /> 
                {errors.firstName?.type === 'required' && "First name is required"}
              </div>

              <div className="mt-2">
                <label htmlFor="lastName" class="mr-2">Last Name:</label>
                <input
                  type="text"
                  id="lastName"                
                  name="lastName"
                  placeholder="Enter your last name"   
                  defaultValue={defaultValues && defaultValues.lastName}
                  {...register("lastName", { required: true } )}              
                />  
                {errors.lastName?.type === 'required' && "Last name is required"}
              </div>    

              <div className="mt-2">
                <label htmlFor="dob"  class="mr-2">Date of Birth:</label>
                <input   
                  type="date"
                  id="dob"                
                  name="dob" 
                  {...register("dob", { required: true } )}                                     
                />  
              </div>   

            </div>  

            <div>
                <PostcodeLookupComponent onAddressSelected={setAddress} />

                <div className="mt-4">  
                  <label class="mr-2">Line 1</label>
                  <input
                    type="text"
                    name="address_line1"
                    value={address.line_1}
                    onChange={(e) => setAddress({ ...address, line_1: e.target.value })}
                    defaultValue={defaultValues && defaultValues.address_line1}
                    {...register("address_line1", { required: true } )}    
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Line 2</label>
                  <input
                    type="text"
                    name="address_line2"
                    value={address.line_2}
                    onChange={(e) => setAddress({ ...address, line_2: e.target.value })}
                    defaultValue={defaultValues && defaultValues.address_line2}
                    {...register("address_line2", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Line 3</label>
                  <input
                    type="text"
                    name="address_line3"
                    value={address.line_3}
                    onChange={(e) => setAddress({ ...address, line_3: e.target.value })}
                    defaultValue={defaultValues && defaultValues.address_line3}
                    {...register("address_line3", { required: true } )}   
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Post Town</label>
                  <input
                    type="text"
                    name="post_town"
                    value={address.post_town}
                    onChange={(e) => setAddress({ ...address, post_town: e.target.value })}
                    defaultValue={defaultValues && defaultValues.post_town}
                    {...register("post_town", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Postcode</label>
                  <input
                    type="text"
                    name="postcode"
                    value={address.postcode}
                    onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
                    defaultValue={defaultValues && defaultValues.postcode}
                    {...register("postcode", { required: true } )}   
                  />
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
    </div>
  );
}
export default Form2;
