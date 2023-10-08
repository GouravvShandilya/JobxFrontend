import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function AddResponsibility({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const [formData,setFormData]=useState({
       
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
        axios.post("/resume/add-responsibility",formData)
        .then((res)=>{
            console.log(res)
            fetchUserData()
        })
        .catch(err=>console.log(err))
    }

    return (
        <>

            <button onClick={onOpen}>+ Add Responsibility</button>
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
