import React from "react";

function Form2({ register, shouldDisplay }) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

          <div className="form-group">
            <label>User name</label>
            <input type="text" name="firstName" {...register("firstName", { required: true } )} />
            <label>Email</label>
            <input type="email" name="email" {...register("email", { required: true } )} />
          </div>
    </div>
  );
}

export default Form2;
