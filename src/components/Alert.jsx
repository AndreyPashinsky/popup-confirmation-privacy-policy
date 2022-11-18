import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/alert";

export const AlertMessage = () => (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
  >
    <AlertIcon boxSize="40px" mr={0} mb={10} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Действие выполнено.
    </AlertTitle>
    <AlertDescription maxWidth="sm">Спасибо!</AlertDescription>
  </Alert>
);
