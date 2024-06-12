import { Flex, Grid, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import { UploadFile } from "./components/UploadFile";
import { PopOver } from "./components/PopOver";

export default function App() {
  return (
    <Grid placeContent="center" bgColor="#ACE1AF" h="100vh">
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
      <Flex flexDirection="column" justifyContent="center">
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
    </Grid>
  );
}
