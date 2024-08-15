// Source: https://www.youtube.com/watch?v=CjqG277Hmgg

import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  config,
});

export default theme;
