/* eslint-disable import/no-anonymous-default-export */
import { Box, Link } from "@mui/material";

export default (props) => {
  return (
    <Box {...props}>
      <Link fontWeight={600} sx={{ mb: 1, cursor: 'pointer' }} color="#fff">
        Title
      </Link>
      {
        Array.from(Array(4), (_, x) => x)
          .map((_, index) => (
            <Link color="#fff" sx={{ display: 'block', cursor: 'pointer', mt: 1, }}>{`Subtitle ${index + 1}`}</Link>
          ))
      }
    </Box>
  )

};