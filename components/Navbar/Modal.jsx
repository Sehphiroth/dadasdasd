import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "./mailcon";
import { LockIcon } from "./LockIcon";
import Sign from "./signup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./client.js";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData((prevFormDAta) => {
      return {
        ...prevFormDAta,
        [event.target.name]: event.target.value,
      };
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      alert("check you email for verifivation link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Log In
      </Button>
      <form onSubmit={handleSubmit}>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Log in
                </ModalHeader>
                <ModalBody>
                  <Input
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isRequired
                    isClearable
                    autoFocus
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    onChange={handleChange}
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isRequired
                    isClearable
                    autoFocus
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    onChange={handleChange}
                  />
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
                  <Sign />
                  <Button color="primary" type="sumbit">
                    Log In
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
