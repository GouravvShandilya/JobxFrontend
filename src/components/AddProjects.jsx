import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function AddProjects({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const [formData,setFormData]=useState({
       Title:"",
       StartMonth:"",
       EndMonth:"",
        Description:"",
        ProjectLink:""
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
        axios.post("/resume/add-project",formData)
        .then((res)=>{
            console.log(res)
            fetchUserData()
        })
        .catch(err=>console.log(err))
    }

    return (
        <>

            <button onClick={onOpen}>+ Add Projects</button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Intership  details</ModalHeader>
                            <ModalBody>
                               <Input
                                label="Title"
                                placeholder=""
                               name="Title"
                               type="text"
                               onChange={handleChange}
                               
                               />
                                <Input
                                label="Start Month"
                                placeholder=""
                               name="StartMonth"
                               type="text"
                               variant="bordered"
                                autoFocus
                               onChange={handleChange}
                               
                               />
                                <Input
                                label="End Month"
                                placeholder="End Month"
                               name="EndMonth"
                               type="text"
                               variant="bordered"
                               autoFocus

                               onChange={handleChange}
                               
                               />
                                <Textarea label="Description"
                                    placeholder="Short descripion of work done (max 250 char)"
                                    name="Description"
                                    onChange={handleChange}

                                >
                               

                                </Textarea>

                                <Input
                                label="Link"
                                placeholder="LINK"
                               name="ProjectLink"
                               type="text"
                               variant="bordered"
                               autoFocus

                               onChange={handleChange}
                               
                               />



                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={handleSubmit} onPress={onClose}>
                                    Add Responsibility
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
