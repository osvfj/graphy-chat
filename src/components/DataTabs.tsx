import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { useContacts } from "../context/contacts";

export function DataTabs() {
  const { contacts: data } = useContacts();
  return (
    <Tabs isLazy isFitted mt="2rem">
      <TabList>
        {data.map((tab, index) => (
          <Tab key={index}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels></TabPanels>
    </Tabs>
  );
}
