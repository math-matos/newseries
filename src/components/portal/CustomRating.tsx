import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import FireIcon from '@mui/icons-material/Whatshot';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <FireIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <FireIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <FireIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <FireIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <FireIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function CustomRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
