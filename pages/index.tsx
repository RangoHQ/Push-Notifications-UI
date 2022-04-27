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

//Layout
import Footer from "../layout/Footer";
//Utils
import { useMediaQuery } from "../utils/useMediaQuery";

const NOTIFICATIONS_SERVER: string =
  "https://kluu-push-notifications.herokuapp.com/message";

const Home: NextPage = () => {
  const isMd = useMediaQuery(768);
  const [fields, setFields] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const handleFields = (e: any) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const sendNotification = async (e: any) => {
    e.preventDefault();
    const title = fields.title;
    const body = fields.body;
    if (title === "" || body === "") {
      alert("title/body cannot be empty");
      return;
    }

    setLoading(true);
    const req = await fetch(NOTIFICATIONS_SERVER, {
      method: "POST",
      body: JSON.stringify({ title, body }),
    });
    setFields({ title: "", body: "" });
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
        <Spacer y={2.5} />
        <Container css={{ width: isMd ? "100%" : "624px" }}>
          <form onSubmit={sendNotification} id="PNform">
            <Grid.Container justify="center" direction="column">
              <Input
                required
                clearable
                bordered
                label="Titulo"
                labelPlaceholder="Title"
                color="primary"
                onChange={handleFields}
              />
              <Spacer y={2} />
              <Textarea
                required
                bordered
                labelPlaceholder="Descripcion"
                color="primary"
                onChange={handleFields}
              />
            </Grid.Container>
            <Spacer y={2.5} />
            <Row justify="center">
              <Button type="submit" shadow size="lg" color="gradient" rounded>
                {loading ? (
                  <Loading type="points" color="currentColor" size="sm" />
                ) : (
                  <Text> Enviar Notificación</Text>
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
