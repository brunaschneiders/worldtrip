import { Grid, Image, IconButton, Icon } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

interface HeaderProps {
  showBackButton?: boolean;
  onBackButtonClicked?: () => void;
}

export function Header({
  showBackButton = true,
  onBackButtonClicked,
}: HeaderProps) {
  return (
    <Grid
      w="100%"
      maxW={1480}
      h={["50px", "100px"]}
      px={["6", "12"]}
      bg="white"
      justifyContent="center"
      alignItems="center"
      templateColumns="repeat(3, 1fr)"
    >
      {showBackButton && (
        <IconButton
          aria-label="Back"
          icon={<Icon as={BsChevronLeft} />}
          fontSize="24"
          variant="unstyled"
          onClick={onBackButtonClicked}
          gridColumn="1"
          justifySelf="flex-start"
        />
      )}
      <Image
        w={["81px", "184px"]}
        src="assets/logo.png"
        alt="Logo worldtrip com avião voando ao final."
        gridColumn="2"
        justifySelf="center"
      />
    </Grid>
  );
}
