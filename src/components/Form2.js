import React, {useEffect, createRef, useState} from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";

function Form2({ 
  register,  
  watch,
  errors,
  defaultValues,
  shouldDisplay
}) {

  const PostcodeLookupComponent = (props) => {
    const context = createRef();
  
    useEffect(() => {
      PostcodeLookup.setup({
        apiKey: "ak_kt1m9kndpJwBiEP6CXPnLaPdfdoYH",
        context: context.current,
        outputFields: {
              line_1: '#address_line1',  
              line_2: '#address_line2',         
              line_3: '#address_line3',
              post_town: '#post_town',
             postcode: '#postcode'
           },
        buttonStyle: {
          backgroundColor: "green",
          color: "white"
        },
        ...props
      });
    }, []);
  
    return <div ref={context}></div>;
  };


   {/*    
    const [touched, setTouched] = useState([]);

 } const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
      if (!touched.includes(event.target.name)) { // NEW
        setTouched([
          ...touched,
          event.target.name
        ])
      }
    }  */}



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
                  defaultValue={defaultValues && defaultValues.dob}
                  {...register("dob", { required: true } )}                                     
                />  
                {errors.dob?.type === 'required' && "Date of birth is required"}
              </div>   

            </div>  

            <div>
                <PostcodeLookupComponent/>

                <div className="mt-4">  
                  <label htmlFor="address_line1" class="mr-2">Line 1</label>
                  <input
                    type="text"
                    id="address_line1"
                    name="address_line1"
                    {...register("address_line1", { required: true } )}   
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Line 2</label>
                  <input
                    type="text"
                    id="address_line2"
                    name="address_line2"
                    {...register("address_line2", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Line 3</label>
                  <input
                    type="text"
                    id="address_line3"
                    name="address_line3"
                    {...register("address_line3", { required: true } )}   
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Post Town</label>
                  <input
                    type="text"
                    id="post_town"
                    name="post_town"
                    {...register("post_town", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Postcode</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
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
                      {...register('PrevYes')}             
                    />
                    <label htmlFor="prevYes" className="mx-2">Yes</label>   
                    <input 
                      type="checkbox"
                      id="PrevNo"
                      name="PrevNo"
                      value="yes" 
                      isChecked                 
                      {...register('PrevNo')}                    
                    />
                    <label htmlFor="prevNo" className="mx-2">No</label>   
                  </div>
                
                  <div>

              </div>
            </div>          
          </div>
    </div>
  );
}
export default Form2;
