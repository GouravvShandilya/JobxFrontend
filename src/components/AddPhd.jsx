import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function AddPhd({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [formData,setFormData]=useState({
        level:"Graduation",
        college:"",
        startYear:"",
        EndYear:"",
        degree:"",
        stream:"",
        performance:""
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
        axios.post("/resume/add-edu",formData)
        .then((res)=>{
            console.log(res)
            fetchUserData()
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
            {/* <Button >Open Modal</Button> */}
            <button onClick={onOpen} >+ Add PhD</button>
            

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add graduation/ post graduation</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus

                                    label="College"
                                    placeholder="Enter your college"
                                    variant="bordered"
                                    name="college"
                                    onChange={handleChange}

                                />

                                <div className="flex gap-6">
                                    <Input
                                        autoFocus
                                        type="text"

                                        label="Start year"
                                        placeholder="Enter your Start year"
                                        variant="bordered"
                                        name="startYear"
                                    onChange={handleChange}

                                    />

                                    <Input
                                        autoFocus
                                        type="text"

                                        label="End year"
                                        placeholder="Enter your End year"
                                        variant="bordered"
                                        name="EndYear"
                                    onChange={handleChange}

                                    />
                                </div>
                                <div className=" flex gap-6">

                                    <Input

                                        label="Degree"
                                        placeholder="Enter your deegree"
                                        type="text"
                                        name="degree"
                                        variant="bordered"
                                    onChange={handleChange}

                                    />
                                    <Input

                                        label="Stream"
                                        placeholder="Enter your Stream"
                                        type="text"
                                        variant="bordered"
                                        name="stream"
                                    onChange={handleChange}

                                    />
                                </div>
                                <Input

                                    label="Performance(Optional)"
                                    placeholder="Enter your Stream"
                                    type="text"
                                    variant="bordered"
                                    name="performance"
                                    onChange={handleChange}
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
