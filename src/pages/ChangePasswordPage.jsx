import React, { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import Nav from '../components/Nav'

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id,
    password: "",
    confirmPassword: "", // Add a state for confirmPassword
  });
  const [passwordMismatchError, setPasswordMismatchError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check for password mismatch here
    if (name === "confirmPassword" && value !== formData.password) {
      setPasswordMismatchError("Passwords do not match");
    } else {
      setPasswordMismatchError(""); // Reset error message if passwords match
    }
  };

  const handleClick = () => {
    // Check for password mismatch again before making the API call
    if (formData.password === formData.confirmPassword) {
      axios
        .post(`/user/student/reset-password`, {
          id,
          password: formData.password,
        })
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            if(res){
              toast.success("Password Changed Successfully")
            }
          }, 1);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      setPasswordMismatchError("Passwords do not match");
    }
  };

  return (
    <div>
      <Nav/>
    <div className=" flex justify-center w-[100%] h-[100vh] items-center">
      <Card className="md:min-w-[400px] min-w-[380px]">
        <CardHeader className="flex gap-3">
          <h1>Make sure you remember next time</h1>
        </CardHeader>
        <Divider />
        <CardBody className=" space-y-4">
          <Input
            label="Password"
            placeholder="Enter your password"
            variant="bordered"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Input
            label="Confirm Password"
            placeholder="Enter your password"
            variant="bordered"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
          {passwordMismatchError && (
            <div className="text-red-500">{passwordMismatchError}</div>
          )}
        </CardBody>
        <Divider />
        <CardFooter className=" flex items-end justify-end">
          <Button color="primary" onClick={handleClick}>
            Change Password
          </Button>
        </CardFooter>
      </Card>
    </div>
    </div>

  );
}
