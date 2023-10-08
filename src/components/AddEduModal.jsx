import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import AddGraduation from "./AddGraduation";
import SeniorSecModal from "./SeniorSecModal";
import SecondaryModal from "./SecondaryModal";
import AddDiploma from "./AddDiploma";
import AddPhd from "./AddPhd";

export default function AddEduModal({fetchUserData}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [size, setSize] = React.useState('md')

  


  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 text-center">
          <button   onClick={() => handleOpen(size)}>+ Add Education</button>
      </div>
      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-start gap-6 text-blue-600">
                <AddGraduation fetchUserData={fetchUserData}/>
                 <SeniorSecModal fetchUserData={fetchUserData}/>
                 <SecondaryModal fetchUserData={fetchUserData} />
                  <AddDiploma fetchUserData={fetchUserData}/>
                  <AddPhd  fetchUserData={fetchUserData}/>
                </div>
              </ModalBody>
           
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
