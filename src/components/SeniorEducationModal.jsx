import React from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Radio, RadioGroup } from "@nextui-org/react";
import { FiEdit2 } from 'react-icons/fi';
import axios from "../../utils/axios";

export default function SeniorEducationModal({formData,setFormData,fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    console.log(formData)

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit=(e)=>{
        console.log(formData)
        axios.post("/resume/edit-edu",formData)
        .then((response)=>{
            console.log(response)
            fetchUserData()
        })
        .catch((err)=>console.log(err))
      }

    return (
        <>

            <FiEdit2 onClick={onOpen} />
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <RadioGroup
                                    label="Intermediate status"
                                    orientation="horizontal"
                                >
                                    <Radio value="Pursuing">Pursuing</Radio>
                                    <Radio value="Completed">Completed</Radio>

                                </RadioGroup>

                                <Input
                                    autoFocus

                                    label="Year of completion
                  "
                                    placeholder="Year of completion
                  " 
                                    variant="bordered"
                                    onChange={handleChange}
                                    value={formData.YearOfCompletion}
                                    name="YearOfCompletion"
                                />
                                <Input

                                    label="Board"
                                    placeholder="Enter your Board"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                    name="Board"
                                    value={formData.Board}
                                />
                                <Input

                                    label="Performance"
                                    placeholder="Enter your Performance"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                        name="Performance"
                                    value={formData.Performance}

                                />
                            <div className=" flex gap-4">

                            
                                <Input

                                    label="Stream"
                                    placeholder="Enter your Stream"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                    name="Stream"
                                    value={formData.Stream}

                                />
                                <Input

                                    label="School"
                                    placeholder="Enter your School"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                    
                                    name="School"
                                    value={formData.School}

                                />
                                </div>

                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
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
