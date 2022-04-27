import { useState } from "react";
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
  Loading,
} from "@nextui-org/react";
import axios from "axios";

//Layout
import Footer from "../layout/Footer";
//Utils
import { useMediaQuery } from "../utils/useMediaQuery";

const NOTIFICATIONS_SERVER = "http://localhost:8080/message";

const Home: NextPage = () => {
  const isMd = useMediaQuery(768);
  const [pnTitle, setPnTitle] = useState("");
  const [pnMessage, setPnMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendNotification = async (e: any) => {
    e.preventDefault();

    const title = pnTitle;
    const body = pnMessage;
    if (title === "" || pnMessage === "") {
      alert("El título y el mensaje son obligatorios");
      return;
    }

    setLoading(true);
    const req = await axios.post(NOTIFICATIONS_SERVER, {
      title,
      body,
    });

    setPnTitle("");
    setPnMessage("");
    setLoading(false);
  };

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
        <Spacer y={3} />
        <Container css={{ width: isMd ? "100%" : "624px" }}>
          <form onSubmit={sendNotification} id="PNform">
            <Grid.Container justify="center" direction="column">
              <Input
                required
                clearable
                bordered
                labelPlaceholder="Titulo"
                color="primary"
                onChange={(e) => setPnTitle(e.target.value)}
              />
              <Spacer y={2.5} />
              <Textarea
                required
                bordered
                labelPlaceholder="Mensaje"
                color="primary"
                onChange={(e) => setPnMessage(e.target.value)}
              />
            </Grid.Container>
            <Spacer y={2.5} />
            <Row justify="center">
              <Button type="submit" shadow size="lg" color="gradient" rounded>
                {loading ? (
                  <Loading type="points" color="currentColor" size="sm" />
                ) : (
                  <span>Enviar Notificación</span>
                )}
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
