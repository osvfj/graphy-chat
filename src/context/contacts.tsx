import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface Contact {
  name: string;
  audios: number;
  stickers: number;
  msgs: number;
  seeOneTime?: number;
  images?: number;
  videosAndGifs?: number;
  edits?: number;
  enlaces?: number;
}

const ContactsContext = createContext<{
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Contact[]>>;
} | null>(null);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const ctx = useContext(ContactsContext);
  if (!ctx) {
    throw new Error("useContacts must be used within a ContactsProviders");
  }
  return ctx;
}
