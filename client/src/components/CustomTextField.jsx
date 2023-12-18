import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const CustomBorderTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        
        border-radius: 100px;
        fieldset {
            border-color: var(--main-bg-color); 
        }
        &:hover fieldset {
            border-color: ${(props) => props.$secondaryColor ? 'var(--secondary-bg-color)':'var(--main-bg-color)'}
        }
        &.Mui-focused fieldset {
            border-color: ${(props) => props.$secondaryColor ? 'var(--secondary-bg-color)':'var(--main-bg-color)'}
        }
    }
    label {
        color: var(--main-bg-color);
    }
    &:hover label {
        color:${(props) => props.$secondaryColor ? 'var(--secondary-bg-color)':'var(--main-bg-color)'}
    }
    label.Mui-focused{
        color: ${(props) => props.$secondaryColor ? 'var(--secondary-bg-color)':'var(--main-bg-color)'}
    }
    
`;