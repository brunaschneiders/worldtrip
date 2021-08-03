import { Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { BannerContinent } from "../../components/BannerContinent";

import { continents } from "../../utils/continents";

interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    description: string;
    imageUrl: string;
  };
}

export default function Continent({ continent }: ContinentProps) {
  const { name, description, imageUrl } = continent;
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex w="100%" mb="14" direction="column">
      <BannerContinent imageUrl={imageUrl} continent={name} />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continentData = continents.find(continent => continent.slug === slug);
  console.log(continentData);
  return {
    props: {
      continent: continentData,
    },
    revalidate: 1,
  };
};
