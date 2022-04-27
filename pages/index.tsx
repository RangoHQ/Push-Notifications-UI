import type { NextPage } from "next";
import { Grid, Spacer, Button, Input, Text, Textarea } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Grid.Container
      css={{ height: "100vh" }}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Text
        h2
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
      >
        Kluu - Push Notifications
      </Text>
      <Spacer y={2} />
      <form>
        <Grid.Container justify="center" direction="column">
          <Input
            clearable
            bordered
            label="Titulo"
            labelPlaceholder="Title"
            color="primary"
          />
          <Spacer y={2} />
          <Textarea bordered labelPlaceholder="Descripcion" color="primary" />
        </Grid.Container>
        <Spacer y={2.5} />
        <Button shadow color="gradient" rounded>
          Enviar
        </Button>
      </form>
    </Grid.Container>
  );
};

export default Home;
