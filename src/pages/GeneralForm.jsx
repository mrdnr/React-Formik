import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values,actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    })

    actions.resetForm();
};

const GeneralForm = () => {
  const { values, handleSubmit,isSubmitting, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: basicSchema,

    onSubmit,
  });
  console.log(values)
  console.log(values.email);
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          id="age"
          placeholder="Age entry"
          onChange={handleChange}
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="mail"
          value={values.email}
          id="email"
          placeholder="Mail address entry"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          id="password"
          placeholder="Password entry"
          onChange={handleChange}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Password Again</label>
        <input
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          placeholder="Password again entry"
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && ( <p className="error">{errors.confirmPassword}</p> )}
      </div>
      <button disabled={isSubmitting} onClick={handleSubmit}>Sign Up</button>
      <Link to="/portal">Go To Portal Form</Link>
    </form>
  );
};

export default GeneralForm;
