import React, {useEffect, createRef, useState} from "react";
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


function MainComponent() {
  const {
    register,
    trigger,
    formState: { errors },
    watch,
    getValues
  } = useForm({
    mode: "onChange",
    // You can set default values here
    defaultValues: {

    }
  });

  const watchAllFields = watch();

  const [defaultValues, setDefaultValues] = useState({});

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    {
      fields: ["lenders"],
      component: (register, errors) => (
        <Form1
          key={0}
          shouldDisplay={currentForm === 0}
          defaultValues={defaultValues}
          register={register}
          errors={errors}
        />
      )
    },
    {
      fields: ["firstName", "lastName", "dob"],
      component: (register, errors) => (
        <Form2
          key={1}
          shouldDisplay={currentForm === 1}
          defaultValues={defaultValues}
          register={register}  
          errors={errors}         
        />
      )
    },
    {
      fields: ["email", "tel", "privacy"],
      component: (register, errors) => (
        <Form3
          key={2}
          shouldDisplay={currentForm === 2}
          register={register}  
          errors={errors}
          values={getValues()}
        />
      )
    },
    {
      fields: ["email"],
      component: (errors) => (
        <Form4
          key={3}
          shouldDisplay={currentForm === 3}
          errors={errors}
          values={getValues()}
        />
      )
    }    
  ];

  const moveToPrevious = () => {
      setCurrentForm(currentForm - 1);
  };

  const moveToNext = () => {
    setDefaultValues(prev => ({ ...prev, ...getValues() }));
    trigger(forms[currentForm].fields).then(valid => {
      if (valid) setCurrentForm(currentForm + 1);
    });
  };

  {/*  const moveToNext = () => {
    const isStepValid = trigger();
    if (isStepValid) setCurrentForm(currentForm + 1);
  };*/} 

  const prevButton = currentForm !== 0;
  const nextButton = currentForm !== forms.length - 1;
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...getValues() })
    })
    .then((response) => {
      navigate("/thank-you/")
    })
    .catch(error => alert(error));
  } 

  return (

    <Layout>

      <div className="container">  

      <h2 className="text-center uppercase text-green-500 mb-2">Start Your Free Plevin Check today</h2>
      <hr className="my-2"/>
      <p className="text-center">Answer the quick questions below to see if you may have a claim</p> 

      <section className="section md:shadow w-50">
        <progress max="3" value={currentForm}></progress>
        <div className="progress">
          <h4 className="underline">Step {currentForm + 1}</h4>
        </div>


        <form
          name="contact"
          method="post"
          action="/thank-you/"  
          data-netlify="true"
          data-netlify-honeypot="bot-field"           
        >  
          <input type="hidden" name="form-name" value="contact" />     
          {forms.map(form => form.component(register, errors, defaultValues))}
        </form>

        {prevButton && (
          <button
            className="btn-blue"
            type="button"
            onClick={moveToPrevious}
          >
            Back
          </button>
        )}

        {nextButton && (
          <button 
            className="btn-blue" 
            type="button" 
            onClick={moveToNext}
          >
            Next
          </button>
        )}

        {currentForm === 3 && (
          <button
            onClick={handleSubmit}
            className="btn-green"
            type="submit"
          >
            Submit
          </button>
        )}

      </section>  


      </div>      

    </Layout>    
  );
}

export default MainComponent;
