import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./mailcon";
import { LockIcon } from "./LockIcon";

export default function Sign() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="warning">
        <h1 className="title">Sign Up</h1>
      </Button>
      <form action="signUp">
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Sign Up
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    isClearable
                    autoComplete="jerico sumabat"
                    autoFocus
                    label="Full-Name"
                    name="fullname"
                    placeholder="Enter your Full Name"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isRequired
                    isClearable
                    autoFocus
                    autoComplete="sumabat.jerico@gmail.com"
                    name="email"
                    label="email"
                    placeholder="Enter your Email"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isRequired
                    isClearable
                    autoFocus
                    label="Password"
                    name="password"
                    placeholder="Enter your Password"
                    type="password"
                    variant="bordered"
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isRequired
                    isClearable
                    autoFocus
                    label="Password"
                    name="confirmpassword"
                    placeholder="Enter your Password"
                    type="password"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between"></div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Sign Up
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}
