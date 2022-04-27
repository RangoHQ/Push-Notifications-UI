import type { NextPage } from "next";
import {
  Container,
  Grid,
  Row,
  Spacer,
  Button,
  Input,
  Text,
  Textarea,
} from "@nextui-org/react";

//Layout
import Footer from "../layout/Footer";

//Utils
import { useMediaQuery } from "../utils/useMediaQuery";

const Home: NextPage = () => {
  const isMd = useMediaQuery(768);

  return (
    <Container>
      <Grid.Container
        css={{ height: "100vh" }}
        justify="center"
        direction="column"
      >
        <Text
          h2
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          Kluu - Push Notifications
        </Text>
        <Spacer y={2.5} />
        <Container css={{ width: isMd ? "100%" : "624px" }}>
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
              <Textarea
                bordered
                labelPlaceholder="Descripcion"
                color="primary"
              />
            </Grid.Container>
            <Spacer y={2.5} />
            <Row justify="center">
              <Button shadow size="lg" color="gradient" rounded>
                Enviar
              </Button>
            </Row>
          </form>
        </Container>
      </Grid.Container>
      <Footer />
    </Container>
  );
};

export default Home;
