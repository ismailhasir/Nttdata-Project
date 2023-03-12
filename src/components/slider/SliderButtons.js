/* eslint-disable import/no-anonymous-default-export */
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const SliderButtons = (props) => {
  const { active, setActive } = props;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 1,
    }}>
      {
        Array.from(Array(4), (_, x) => x)
          .map((_, index) => (
            <Box
              sx={{
                border: '1px solid #fff',
                backgroundColor: active === index ? '#000' : '#fff',
                width: 10,
                height: 10,
                borderRadius: 3,
                cursor: 'pointer'
              }}
              onClick={() => {
                setActive(index)
              }}
            />
          ))
      }
    </Box>
  );
};

export default SliderButtons;

SliderButtons.propTypes = {
  active: PropTypes.any,
  setActive: PropTypes.func
};