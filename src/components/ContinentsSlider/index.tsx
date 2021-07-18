import { Box, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFlip,
} from "swiper/core";
import { continents } from "../../utils/continents";

SwiperCore.use([
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Autoplay,
  EffectFlip,
]);

type Continent = {
  name: string;
  imageUrl: string;
};

interface ContinentsSliderProps {
  continents: Continent[];
}

export function ContinentsSlider({}: ContinentsSliderProps) {
  return (
    <Box w="100%" maxWidth={1240} h={["250px", "450px"]} px={["6", "20"]}>
      <Swiper
        style={{ width: "100%", flex: 1 }}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {continents.map(continent => (
          <SwiperSlide
            key={continent.name}
            style={{ marginRight: 0 }}
            color="#999999"
          >
            <Flex
              backgroundImage={continent.imageUrl}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition="center"
              w="100%"
              h={["250px", "450px"]}
            ></Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
