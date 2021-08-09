import React, { useState } from "react";
import { navigate } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";
import { useForm } from "react-hook-form";

function MainComponent() {
  const {
    register,
    triggerValidation,
    defaultValues,
    errors,
    getValues
  } = useForm({
    // You can set default values here
    defaultValues: {

    }
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    {
      fields: ["uname", "email", "password"],
      component: (register, errors) => (
        <Form1
          // a key is needed to render a list
          key={0}
          // this will be used to set the css display property to block or none on each form
          shouldDisplay={currentForm === 0}
          register={register}
          errors={errors}
        />
      )
    },
    {
      fields: ["lname"],
      component: (register, errors) => (
        <Form2
          key={1}
          shouldDisplay={currentForm === 1}
          register={register}  
          errors={errors}                  
        />
      )
    },
    {
      fields: ["email"],
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
      setCurrentForm(currentForm + 1);
  };

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

      <h2 className="text-center uppercase text-green-500">Start your free online Plevin Check Now</h2>
      <hr />
      <p className="text-center">Answer the quick questions below to see if you may have a claim</p> 

      <section className="section">
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
          {forms.map(form => form.component(register, errors))}
        </form>

        {prevButton && (
          <button
            className="btn-green"
            type="button"
            onClick={moveToPrevious}
          >
            back
          </button>
        )}

        {nextButton && (
          <button 
            className="btn-green" 
            type="button" 
            onClick={moveToNext}
          >
            next
          </button>
        )}

        {currentForm === 3 && (
          <button
            onClick={handleSubmit}
            className="btn-blue"
            type="submit"
          >
            Submit
          </button>
        )}

      </section>    
    </Layout>    
  );
}

export default MainComponent;
