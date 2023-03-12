import PropTypes from 'prop-types';
import { Box, ClickAwayListener, Fade, Paper, Popper, Typography } from '@mui/material';


export default function MenuExpand(props) {
  const { open, anchorEl, handleClose } = props;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Popper
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        transition
        popperOptions={{
          strategy: 'absolute',
          placement: 'bottom-start'
        }}
        sx={{
          width: '80vw',
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              component={Paper}
              sx={{
                minHeight: '30vh',
                maxHeight: '30vh',
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                gap: 1,
                p: 2,
              }}
            >
              <Box sx={{ flex: '15%' }}>
                <Typography fontWeight={600} sx={{ mb: 1 }}>Header</Typography>
                {
                  Array.from(Array(8), (_, x) => x)
                    .map((_, index) => (
                      <Typography>{`Subheader ${index + 1}`}</Typography>
                    ))
                }
              </Box>
              <Box sx={{ flex: '15%' }}>
                <Typography fontWeight={600} sx={{ mb: 1 }}>Header</Typography>
                {
                  Array.from(Array(8), (_, x) => x)
                    .map((_, index) => (
                      <Typography>{`Subheader ${index + 1}`}</Typography>
                    ))
                }
              </Box>
              <Box
                sx={{
                  flex: '70%',
                  p: 1,
                  backgroundImage: 'url("/assets/img/sub-menu-bg.png")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              >
              </Box>
            </Box>
          </Fade>
        )}
      </Popper >
    </ClickAwayListener>
  );
};

MenuExpand.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  anchorEl: PropTypes.any,
}
