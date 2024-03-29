import { createGlobalStyle } from 'styled-components';

interface ThemeInterface {
  theme: {
    body: string;
    text: string;
    pickerToolBarText: string;
    pickClockText: string;
  };
}

export const MuiCustomStyle = createGlobalStyle<ThemeInterface>`
    
    .MuiTab-root {
        color: inherit;
        transition: all 0s ease-in-out;
    }
    .MuiClockPointer-thumb {
        border: 16px solid #f50057 !important;
    }
    
    .MuiClockPointer-root {
        background-color : #f50057 !important;
    }
    .MuiClock-pin {
        background-color : #f50057 !important;
    }
    .css-1t4i7pk-MuiButtonBase-root-MuiButton-root{
        background-color: #f50057 !important;
        &:hover {
        background-color: #b33662 !important;
        }
    }
    .css-4jkopv-MuiIconButton-label {
        color: ${({ theme }) => theme.text};
    }
    .css-1h08vn0-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #f50057 !important;
    }
    .css-1f3wfo0-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #f50057 !important;
    }
    .MuiPickersStaticWrapper-root {
        background: ${({ theme }) => theme.body} !important;
        transition: color,background 0.25s ease-in;        

        flex-direction: initial !important;
    }
    .MuiClockNumber-root {
        color: ${({ theme }) => theme.pickClockText};

    }
    .MuiClockNumber-root.Mui-selected {
        color: #fff !important;

    }
    .MuiPickersToolbarText-root.Mui-selected {
        color: ${({ theme }) => theme.text};
    }
    .MuiPickersToolbarText-root {
        color: ${({ theme }) => theme.pickerToolBarText};
        
    }
    .css-1hbyad5-MuiTypography-root {
        color: #7c7c7c !important;
        font-size: 0.65rem !important;
    }

    .MuiTypography-root {
    }
    
    .css-gepadz-MuiTypography-root {
        font-size: 2.5rem !important;
    }
    
    .MuiTimePickerToolbar-ampmLabel {
        
    }
    .MuiPickersToolbar-toolbarLandscape {
        width: 47% ;

        @media only screen and (max-width: 385px) {
          width: 42% ;

      }  

      padding: 0 !important;
    }
    .css-1qd6l8g{
      @media only screen and (max-width: 768px) {
        padding: 0rem !important;
    }

      padding: 1rem 2rem !important;
    }
    
    .css-1ddk3v3-MuiGrid-root {
      width: 75% !important;

      @media only screen and (max-width: 768px) {
        width: 70% !important;
    }
    }
    
    .MuiContainer {
      @media only screen and (max-width: 768px) {
        padding: 1.5rem 0.5rem !important;
      }
      
      .MuiPickerView-root{
        @media only screen and (max-width: 768px) {
            width: 215px;
        }
      }
      
      .MuiTabs-root {
        @media only screen and (max-width: 768px) {
            padding-bottom:1.5rem;
        }
      }
    }


    .MuiPickersToolbarButton-root {

      padding: 0 !important;
      @media only screen and (max-width: 768px) {
      min-width:16px !important;
      text-transform: none !important;
    }    
  }

  .css-1b7xzdf-MuiInputBase-root-MuiInput-root:before {
    border-bottom: 1px solid  ${({ theme }) => theme.text};

  }
  .MuiInput-input{
    color: ${({ theme }) => theme.text};

  }
  .MuiFormHelperText-root {
    color: ${({ theme }) => theme.text};
  }
`;
