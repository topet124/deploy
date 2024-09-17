import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const { name, lastName, email, location, role } = user;
  const handleRedirect = () => {
    navigate("/dashboard"); // Redirects to the home page
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Welcome {name}</h4>

        <div className="form-center">
          <div className="form-row">
            <button
              className="btn btn-block form-btn"
              type="button"
              onClick={handleRedirect}
            >
              Go back
            </button>
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <FormRow type="text" name="role" defaultValue={role} />
          <button className="btn btn-block form-btn" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
