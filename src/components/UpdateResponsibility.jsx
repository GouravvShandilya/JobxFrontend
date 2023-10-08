import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";
import { FiEdit2 } from "react-icons/fi";


export default function UpdateResponsibility({fetchUserData, formData, setFormData}) {
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
        axios.post("/resume/edit-responsibility", formData)
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
                            <ModalHeader className="flex flex-col gap-1">InerShips details</ModalHeader>
                            <ModalBody>
                          
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
