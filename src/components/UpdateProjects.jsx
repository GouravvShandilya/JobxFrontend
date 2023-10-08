import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";
import { FiEdit2 } from "react-icons/fi";


export default function UpdateProjects({fetchUserData, formData, setFormData}) {
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
        axios.post("/resume/edit-project", formData)
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
                               <Input
                                label="Title"
                                placeholder=""
                               name="Title"
                               type="text"
                               onChange={handleChange}
                               value={formData.Title}
                               />
                                <Input
                                label="Start Month"
                                placeholder=""
                               name="StartMonth"
                               type="text"
                               variant="bordered"
                                autoFocus
                               onChange={handleChange}
                               value={formData.StartMonth}
                               
                               />
                                <Input
                                label="End Month"
                                placeholder="End Month"
                               name="EndMonth"
                               type="text"
                               variant="bordered"
                               autoFocus
                               value={formData.EndMonth}

                               onChange={handleChange}
                               
                               />
                                <Textarea label="Description"
                                    placeholder="Short descripion of work done (max 250 char)"
                                    name="Description"
                                    onChange={handleChange}
                                    value={formData.Description}

                                >
                               

                                </Textarea>

                                <Input
                                label="Link"
                                placeholder="LINK"
                               name="ProjectLink"
                               type="text"
                               variant="bordered"
                               autoFocus
                               value={formData.ProjectLink}

                               onChange={handleChange}
                               
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
