import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function AddJob({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const [formData,setFormData]=useState({
        Designation:"",
        Profile:"",
        Organization:"",
        Location:"",
        StartDate:"",
        EndDate:"",
        Description:""
    })


    console.log(formData)

    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("/resume/add-job",formData)
        .then((res)=>{
            console.log(res)
            fetchUserData()
        })
        .catch(err=>console.log(err))
    }

    return (
        <>

            <button onClick={onOpen}>+ Add Job</button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Job details</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus

                                    label="Designation"
                                    placeholder="Enter your Designation"
                                    variant="bordered"
                                    name="Designation"
                                    onChange={handleChange}
                                />
                                <Input

                                    label="Profile"
                                    placeholder="Enter your Profile"
                                    type="text"
                                    variant="bordered"
                                    name="Profile"
                                    onChange={handleChange}

                                />
                                <Input

                                    label="Organization"
                                    placeholder="Enter your Organization"
                                    type="text"
                                    variant="bordered"
                                    name="Organization"
                                    onChange={handleChange}

                                />
                                <Input

                                    label="Location"
                                    placeholder="Enter your Location"
                                    type="text"
                                    variant="bordered"
                                    name="Location"
                                    onChange={handleChange}

                                />
                             
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Is work from home
                                    </Checkbox>
                                </div>
                                <div className=" flex gap-6">

                                    <Input

                                        label="Start date"
                                        placeholder="Enter your Start date"
                                        type="text"
                                        variant="bordered"
                                        name="StartDate"
                                        onChange={handleChange}

                                    />
                                    <Input

                                        label="End date"
                                        placeholder="Enter your End date"
                                        type="text"
                                        variant="bordered"
                                        name="EndDate"
                                        onChange={handleChange}

                                    />
                                </div>
                                <Textarea label="Description"
                                    placeholder="Short descripion of work done (max 250 char)"
                                    name="Description"
                                    onChange={handleChange}

                                >

                                </Textarea>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
                                    Add Jobs
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
