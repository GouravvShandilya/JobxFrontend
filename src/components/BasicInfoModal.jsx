import React, { useState } from "react";
import { FiEdit2 } from 'react-icons/fi';

import { Modal, ModalContent, Select, SelectItem, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, avatar } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function App({ dets, setdets ,fetchUserData,fetchResumeDetails}) {
    const genders = ["Male", "Female", "Others"];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [firstName, setfirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState(null)
    const [city, setCity] = useState("")
    const [gender, setGender] = useState("")
    const [file, setFile] = useState(null)

    function updateSessionStorage(key, data) {
        try {
          // Get the existing data from sessionStorage, if any
          const existingData = JSON.parse(sessionStorage.getItem(key)) || {};
      
          sessionStorage.removeItem(key);
    
          // Merge the new data with the existing data
          const updatedData = { ...existingData, ...data };
      
          // Store the updated data in sessionStorage
          sessionStorage.setItem(key, JSON.stringify(updatedData));
        } catch (error) {
          console.log('Error updating sessionStorage:', error);
        }
      }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        const formFile=new FormData()
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("contact", contact);
        formData.append("city", city);
        formData.append("gender", gender);
        formFile.append("avatar", file);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
         axios.post("/user/student/update", formData, config)
         .then((res)=>{
            fetchUserData();
            console.log(res)

           
            sessionStorage.setItem("avatar",JSON.stringify(res.data.student.avatar))
         })
         .catch((err)=>{
            console.log(err)
         })

         axios.post("/user/student/avatar", formFile, config)
         .then((res)=>{
            fetchUserData();
        updateSessionStorage("user",formData)
            console.log(res)
         })
         .catch((err)=>{
            console.log(err)
         })


      

    }

    const handleChange = (e) => {

        if (e.target.value === "0") {
            setGender("Male");
        }
        else if (e.target.value === "1") {
            setGender("Female");
        }
        else {
            setGender("Others");
        }
    };
    return (
        <>
            {/* <Button onPress={onOpen} color="primary">Open Modal</Button> */}
            <FiEdit2 onClick={onOpen} fontSize={20} />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className="  min-w-[500px] min-h-[400px]"
            >
                <ModalContent >
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex items-center flex-col gap-1">
                                Personal details
                            </ModalHeader>
                            <ModalBody>
                                <div className=" flex gap-8">

                                    <Input
                                        autoFocus

                                        label="First name"
                                        placeholder="Enter your first name"
                                        variant="bordered"
                                        onChange={(e) => setfirstName(e.target.value)}
                                    />
                                    <Input

                                        label="Last name"
                                        placeholder="Enter your Last name"
                                        type="text"
                                        variant="bordered"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <Input
                                    type="file"
                                    className=" mt-4"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    name="file"
                                />

                                <Input
                                    autoFocus
                                    className=" mt-4"
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    onChange={(e) => setEmail(e.target.value)}

                                />

                                <Input
                                    type="text"
                                    autoFocus
                                    className=" mt-4"
                                    label="Contact no."
                                    placeholder="Enter your Contact no."
                                    variant="bordered"
                                    onChange={(e) => setContact(e.target.value)}

                                />

                                <Input
                                    type="text"
                                    autoFocus
                                    className=" mt-4"
                                    label="Current City"
                                    placeholder="Enter your City"
                                    variant="bordered"
                                    onChange={(e) => setCity(e.target.value)}


                                />

                                <Select
                                    label="Gender"
                                    placeholder="Select a Gender"
                                    className="max-w-xs mt-4"
                                    onChange={handleChange}
                                >
                                    {genders.map((gender, index) => (
                                        <SelectItem key={index} id={gender} value={gender}>
                                            {gender}
                                        </SelectItem>
                                    ))}
                                </Select>

                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        I'm a woman returning to work
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={handleSubmit}>
                                    Update
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
