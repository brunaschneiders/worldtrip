import { Flex } from "@chakra-ui/react";
import { BannerHome } from "../components/BannerHome";

export default function Home() {
  return (
    <Flex h="100vh - 24" w="100%" mb="14" direction="column">
      <BannerHome />
    </Flex>
  );
}
