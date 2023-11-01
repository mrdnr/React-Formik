import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import CustomCheckbox from "../components/CustomCheckbox";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="User Name"
              name="username"
              type="text"
              placeholder="Enter User Name"
            />
            <CustomSelect
              label="Your School"
              name="university"
              placeholder="Select your university"
            >
              <option value="">Select your university</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="odtu">Orta Doğu Teknik Üniversitesi</option>
              <option value="itu">İstanbul Teknik Üniversitesi</option>
              <option value="oxford">University of Oxford</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"/>
            <button disabled={isSubmitting} type="submit">Save</button>
            <Link to="/">Go To General Form</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
