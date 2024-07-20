import { Flex, Box, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import { UploadFile } from "./components/UploadFile";
import { PopOver } from "./components/PopOver";
import { Bar, Pie } from "react-chartjs-2";
import { useContacts } from "./context/contacts";

export default function App() {
  const { contacts } = useContacts();

  return (
    <Box>
      <Heading size="xl" textAlign="center" mb="2.4rem">
        <Highlight
          query="estadísticas"
          styles={{
            px: "2",
            py: "2",
            rounded: "full",
            bg: "#1B4D3E",
            color: "white",
          }}
        >
          Obten estadísticas de tus conversaciones
        </Highlight>
      </Heading>
      <Flex flexDirection="column" justifyContent="center" mb="2rem">
        <UploadFile />
        <Stack mt="2.5rem" spacing={2.5} textAlign="center">
          <Text size="md">Sube el archivo de tu conversación.</Text>
          <PopOver
            trigger="Nadie puede leer tus conversaciones."
            query="nadie"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "##ADFF2F",
            }}
            header="¡Privacidad al máximo!"
          >
            Ninguna de tus conversaciones son analizadas, ni se comparten con
            nadie. <strong>Todo se queda en tu dispositivo.</strong>
          </PopOver>
        </Stack>
      </Flex>
      {contacts.length > 0 && (
        <>
          <Bar
            datasetIdKey="bar-stats"
            data={{
              labels: contacts.map((c) => c.name),
              datasets: [
                {
                  label: "# de mensajes",
                  data: contacts.map((c) => c.msgs),
                  backgroundColor: "green",
                },
                {
                  label: "# de audios",
                  data: contacts.map((c) => c.audios),
                  backgroundColor: "blue",
                },
                {
                  label: "# de stickers",
                  data: contacts.map((c) => c.stickers),
                  backgroundColor: "yellow",
                },
              ],
            }}
          />
          <hr />
          <Pie
            datasetIdKey="pie-stats"
            data={{
              labels: ["# de mensajes", "# de audios", "# de stickers"],
              datasets: [
                {
                  label: "Total",
                  data: [
                    contacts.reduce((p, c) => p.msgs + c.msgs),
                    contacts.reduce((p, c) => p.audios + c.audios),
                    contacts.reduce((p, c) => p.stickers + c.stickers),
                  ],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
            }}
          />
        </>
      )}
    </Box>
  );
}
