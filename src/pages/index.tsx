import { Flex, Grid, HStack, useBreakpointValue } from "@chakra-ui/react";

import { BannerHome } from "../components/BannerHome";
import { TripTypeIcon } from "../components/TripTypeIcon";

import { tripTypes } from "../utils/tripTypes";

export default function Home() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex h="100vh - 24" w="100%" mb="14" direction="column">
      <BannerHome />

      <Grid
        mt={["6", "6", "16"]}
        mx={["10", "24"]}
        templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        gap={["3", "10"]}
        justifyContent="center"
      >
        {tripTypes.map(tripType => (
          <TripTypeIcon
            key={tripType.title}
            title={tripType.title}
            icon={tripType.icon}
            showFullIcon={!isMobileVersion}
          />
        ))}

        <TripTypeIcon
          title="e mais..."
          icon="assets/earth.png"
          showFullIcon={!isMobileVersion}
        />
      </Grid>
    </Flex>
  );
}
