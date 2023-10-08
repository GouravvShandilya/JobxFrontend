import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Textarea, Select, SelectItem } from "@nextui-org/react";
import axios from "../../utils/axios";


export default function AddSkills({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const level = ["Beginner", "Intermidiate", "Master"];
    const [gender, setGender] = useState("")


    const [formData,setFormData]=useState({
       Skill:"",
       level:"Beginner"
    })

    console.log(formData)
    console.log(gender)

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
        axios.post("/resume/add-skills",formData)
        .then((res)=>{
            console.log(res)
            fetchUserData()
        })
        .catch(err=>console.log(err))
    }

    return (
        <>

            <button onClick={onOpen}>+ Add Skills</button>
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
                                placeholder="Add Skills"
                               name="Skill"
                               type="text"
                               onChange={handleChange}
                               
                               />

<Select
                                    label="Level"
                                    placeholder="Select a Level"
                                    className="max-w-xs mt-4"
                                    onChange={handleChangeSelect}
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
                                    Add Skills
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
