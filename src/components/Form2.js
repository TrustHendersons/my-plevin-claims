import React from "react";

function Form2({ register, shouldDisplay }) {
  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>
      <form autoComplete="on">
        <br />
        <div className="form-group">
          <label>User name</label>
          <input type="text" name="uname" {...register("uname", { required: true } )} />
          <label>Email</label>
          <input type="email" name="email" {...register("email", { required: true } )} />
        </div>
      </form>
    </div>
  );
}

export default Form2;
