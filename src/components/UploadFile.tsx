import { Button, Input, InputGroup, Spinner, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { readFileAsText } from "../utils/read-file";
import { extractMembers } from "../utils/whatsapp";
import { useContacts } from "../context/contacts";

export function UploadFile() {
  const toast = useToast();
  const [isDisabled, setIsDisabled] = useState(false);
  const { setContacts } = useContacts();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const file = files[0];

    if (!file.name.match(/.txt$/i) || file.type != "text/plain") {
      toast({
        title: "Formato no aceptado.",
        description: "El archivo debe de ser un .txt",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      const content = await readFileAsText(file);
      const contacts = extractMembers(content);
      setIsDisabled(true);
      setContacts(contacts.map((n) => ({ name: n })));
    } catch (error) {
      toast({
        title: "Error al procesar archivo.",
        description:
          "Hubo un error al momento del analizar el archivo, intente de nuevo.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    } finally {
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    }
  };

  return (
    <>
      <InputGroup display="flex" justifyContent="center">
        <Input
          type="file"
          accept=".txt"
          width="auto"
          id="file"
          display="none"
          isDisabled={isDisabled}
          onChange={handleChange}
        />
        <Button
          as="label"
          bgColor="#49796B"
          color="whitesmoke"
          minW="70%"
          htmlFor="file"
          role="button"
          isDisabled={isDisabled}
          _hover={{ cursor: isDisabled ? "error" : "hover" }}
          _active={{ transform: "scale(0.9)" }}
        >
          {isDisabled ? <Spinner alignSelf="center" /> : "Analizar archivo"}
        </Button>
      </InputGroup>
    </>
  );
}
