import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import axios from "../../utils/axios";
import { FiEdit2 } from "react-icons/fi"

export default function UpdateGraduation({ fetchUserData, formData2, setFormData2 }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    console.log(formData2)

    const handleChange = (event) => {
        setFormData2({
            ...formData2,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (e) => {
        console.log(formData2)
        axios.post("/resume/edit-edu", formData2)
            .then((response) => {
                console.log(response)
                fetchUserData()
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            {/* <Button >Open Modal</Button> */}
            <FiEdit2 onClick={onOpen} />

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
                                    value={formData2.college}
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
                                        value={formData2.startYear}


                                    />

                                    <Input
                                        autoFocus
                                        type="text"

                                        label="End year"
                                        placeholder="Enter your End year"
                                        variant="bordered"
                                        name="endYear"
                                        onChange={handleChange}
                                        value={formData2.endYear}


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
                                        value={formData2.degree}


                                    />
                                    <Input

                                        label="Stream"
                                        placeholder="Enter your Stream"
                                        type="text"
                                        variant="bordered"
                                        name="stream"
                                        onChange={handleChange}
                                        value={formData2.stream}


                                    />
                                </div>
                                <Input

                                    label="Performance(Optional)"
                                    placeholder="Enter your Stream"
                                    type="text"
                                    variant="bordered"
                                    name="performance"
                                    onChange={handleChange}
                                    value={formData2.performance}

                                />

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
