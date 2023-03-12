/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import SliderButtons from "./SliderButtons";

export default () => {
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        height: '450px',
        position: 'relative',
      }}
    >
      <Box
        component="img"
        src={`/assets/img/slider-${active ? (active + 1) : 1}.png`}
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}

      />
      <Box
        sx={{
          height: '58px',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4.5px)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 3
        }}
      >
        <SliderButtons active={active} setActive={setActive} />
      </Box>
    </Box>
  )
};