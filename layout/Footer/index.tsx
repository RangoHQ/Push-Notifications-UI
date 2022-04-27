import { Row, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer>
      <Row css={{ paddingBottom: 12 }} justify="center">
        <Text
          size={16}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
        >
          Kluu.mx ©2022
        </Text>
      </Row>
    </footer>
  );
};

export default Footer;
