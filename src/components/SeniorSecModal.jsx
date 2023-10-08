import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Radio, RadioGroup } from "@nextui-org/react";

import axios from "../../utils/axios";

export default function SeniorSecModal({fetchUserData}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const [formData, setFormData] = useState({
        level: "SeniorSec",
        status: "",
        YearOfCompletion: "",
        Board: "",
        Performance: "",
        Stream: "",
        School: ""

    })
    console.log(formData)
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      
      const handleRadioChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          status: e.target.value,
        }));
      };

    const handleSubmit = (e) => {
        axios.post("/resume/add-edu",formData)
        .then((response)=>{
            console.log(response)
            fetchUserData()
        })
        .catch((err)=>console.log(err))
    }

    return (
        <>


            <button onClick={onOpen}  >+ Add senior secondary</button>
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
                                    name="status"
                                    onChange={handleChange}
                                    checked={formData.status === "Pursuing"}
                                >
                                    <Radio value="Pursuing" onChange={handleRadioChange}>
                                        Pursuing
                                    </Radio>
                                    <Radio value="Completed" onChange={handleRadioChange}>
                                        Completed
                                    </Radio>
                                </RadioGroup>

                                <Input
                                    autoFocus

                                    label="Year of completion
                  "
                                    placeholder="Year of completion
                  "
                                    variant="bordered"
                                    onChange={handleChange}

                                    name="YearOfCompletion"
                                />
                                <Input

                                    label="Board"
                                    placeholder="Enter your Board"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                    name="Board"

                                />
                                <Input

                                    label="Performance"
                                    placeholder="Enter your Performance"
                                    type="text"
                                    variant="bordered"
                                    onChange={handleChange}
                                    name="Performance"


                                />
                                <div className=" flex gap-4">


                                    <Input

                                        label="Stream"
                                        placeholder="Enter your Stream"
                                        type="text"
                                        variant="bordered"
                                        onChange={handleChange}
                                        name="Stream"


                                    />
                                    <Input

                                        label="School"
                                        placeholder="Enter your School"
                                        type="text"
                                        variant="bordered"
                                        onChange={handleChange}

                                        name="School"


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
