import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const SLIDER_NODE_STEP_SIZE = 1;
const DEFAULT_SLIDER_VALUE = 0;
const SLIDER_VALUE_ZERO_STEPS = 1;

const StepSlider = (props) => {
    const {steps} = props;

    const CustomSlider = styled(Slider)(({ theme }) => ({
        color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
        height: 2,
        '& .MuiSlider-thumb': {
          height: steps !== 0? 18: 0,
          width: steps !== 0? 18: 0,
          backgroundColor: '#fff'
        },
        '& .MuiSlider-valueLabel': {
          fontSize: 12,
          fontWeight: 'normal',
          top: -5,
          backgroundColor: 'unset',
          color: theme.palette.text.primary,
          '&:before': {
            display: 'none',
          },
          '& *': {
            background: 'transpsarent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
          },
        },
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-rail': {
          opacity: 1,
          backgroundColor: '#bfbfbf',
        },
        '& .MuiSlider-mark': {
          backgroundColor: '#bfbfbf',
          height: 8,
          width: 1,
          '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
          },
        },
      }));

    return (
        <CustomSlider
        defaultValue={steps !== 0? DEFAULT_SLIDER_VALUE: SLIDER_VALUE_ZERO_STEPS} 
        step={SLIDER_NODE_STEP_SIZE} 
        marks={steps > 0? true: false}
        min={0} 
        max={steps !== 0? steps: SLIDER_VALUE_ZERO_STEPS}
        valueLabelDisplay={(steps !== null && steps !== 0)? "on": "off"}
        disabled={steps === null? true: false}
      />
    );
}

export default StepSlider;