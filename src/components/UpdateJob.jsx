import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";
import { FiEdit2 } from "react-icons/fi";


export default function UpdateJob({fetchUserData, formData, setFormData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


   

    console.log(formData)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (e) => {
        console.log(formData)
        axios.post("/resume/edit-job", formData)
            .then((response) => {
                console.log(response)
                fetchUserData()
            })
            .catch((err) => console.log(err))
    }

    

    return (
        <>

            {/* <button onClick={onOpen}> Update Job</button> */}
            <FiEdit2 onClick={onOpen} />
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
                                    value={formData.Designation}
                                />
                                <Input

                                    label="Profile"
                                    placeholder="Enter your Profile"
                                    type="text"
                                    variant="bordered"
                                    name="Profile"
                                    onChange={handleChange}
                                    value={formData.Profile}

                                />
                                <Input

                                    label="Organization"
                                    placeholder="Enter your Organization"
                                    type="text"
                                    variant="bordered"
                                    name="Organization"
                                    onChange={handleChange}
                                    value={formData.Organization}

                                />
                                <Input

                                    label="Location"
                                    placeholder="Enter your Location"
                                    type="text"
                                    variant="bordered"
                                    name="Location"
                                    onChange={handleChange}
                                    value={formData.Location}


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
                                    value={formData.StartDate}


                                    />
                                    <Input

                                        label="End date"
                                        placeholder="Enter your End date"
                                        type="text"
                                        variant="bordered"
                                        name="EndDate"
                                        onChange={handleChange}
                                    value={formData.EndDate}


                                    />
                                </div>
                                <Textarea label="Description"
                                    placeholder="Short descripion of work done (max 250 char)"
                                    name="Description"
                                    onChange={handleChange}
                                    value={formData.Description}


                                >

                                </Textarea>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
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
