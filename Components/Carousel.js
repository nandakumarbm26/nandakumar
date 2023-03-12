import { Box, HStack } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

function CustCarouselControl(props) {
  return (
    <HStack gap="sm" mt="10px">
      {props.children}
    </HStack>
  );
}
export function Slide(props) {
  const [dragPos, setDragPos] = useState(0);
  const control = useContext(CarouselContext);

  return (
    <Box
      minWidth="100%"
      cursor="grabing"
      onDragStart={(e) => {
        // e.preventDefault()
        console.log(e.screenX);
        setDragPos(e.screenX);
      }}
      onTouchStart={(e) => {
        // e.preventDefault()
        console.log(e);
        setDragPos(e.touches[0]?.screenX);
      }}
      onDragEnd={(e) => {
        // e.preventDefault()
        console.log(e.screenX);
        var endPos = e.screenX;
        var dragWidth = endPos - dragPos;
        if (Math.abs(dragWidth) > window.innerWidth * 0.3) {
          if (dragWidth > 0) {
            control.setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
          } else {
            control.setSlideIndex((slideIndex + 1) % 4);
          }
        }
      }}
      onTouchEnd={(e) => {
        // e.preventDefault()
        console.log(e);
        var endPos = e.changedTouches[0]?.screenX;
        var dragWidth = endPos - dragPos;
        if (Math.abs(dragWidth) > window.innerWidth * 0.3) {
          if (dragWidth > 0) {
            control.setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
          } else {
            control.setSlideIndex((slideIndex + 1) % 4);
          }
        }
      }}
    >
      {props.children}
    </Box>
  );
}
export function CustCarouselControlItem(props) {
  const control = useContext(CarouselContext);

  return (
    <Box
      sx={{
        height: "40px",
        color: props.id - 1 == control.slideIndex ? "fanta" : "white",
        width: "40px",
        fontWeight: 400,
        borderWidth: "0.65px",
        borderColor: props.id - 1 == control.slideIndex ? "fanta" : "white",
        borderStyle: "solid",
        // borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 2s ease 0s",
      }}
      onClick={() => control.setSlideIndex(props.id - 1)}
    >
      {props.children}
    </Box>
  );
}
export const CarouselContext = createContext();

export default function Carousel(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <CarouselContext.Provider value={{ slideIndex, setSlideIndex }}>
      <Box
        sx={{
          overflow: "clip",
          position: `relative`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",

            translate: `-${100 * slideIndex}%`,
            transition: "all 1s ease-in-out 0s",
          }}
        >
          {props.children}
        </Box>

        <CustCarouselControl>
          {[...Array(props.count).keys()].map((d, i) => {
            return (
              <CustCarouselControlItem id={i + 1}>
                {i + 1}
              </CustCarouselControlItem>
            );
          })}
        </CustCarouselControl>
      </Box>
    </CarouselContext.Provider>
  );
}
