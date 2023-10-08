import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea, Select, SelectItem } from "@nextui-org/react";
import axios from "../../utils/axios";
import { FiEdit2 } from "react-icons/fi";


export default function UpdateSkills({fetchUserData, formData, setFormData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const level = ["Beginner", "Intermidiate", "Master"];
    const [gender, setGender] = useState("")

   

    console.log(formData)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleChangeSelect = (e) => {

        if (e.target.value === "0") {
            setGender("Male");
            setFormData((prev)=>{
                return{
                    ...prev,
                    level:"Beginner"
                }
            })

        }
        else if (e.target.value === "1") {
            setGender("Female");
            setFormData((prev)=>{
                return{
                    ...prev,
                    level:"Intermidiate"
                }
            })
        }
        else {
            setGender("Others");
            setFormData((prev)=>{
                return{
                    ...prev,
                    level:"Master"
                }
            })
        }
    };
    const handleSubmit = (e) => {
        console.log(formData)
        axios.post("/resume/edit-skills", formData)
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
                                placeholder="Add Skills"
                               name="Skill"
                               type="text"
                               onChange={handleChange}
                               value={formData.Skill}
                               />

<Select
                                    label="Level"
                                    placeholder="Select a Level"
                                    className="max-w-xs mt-4"
                                    onChange={handleChangeSelect}
                               value={formData.level}

                                >
                                    {level.map((level, index) => (
                                        <SelectItem key={index} id={level} value={level}>
                                            {level}
                                        </SelectItem>
                                    ))}
                                </Select>
                                

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
