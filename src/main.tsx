import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ContactsProvider } from "./context/contacts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
