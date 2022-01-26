import React from 'react';
import styled from 'styled-components';

export interface typeProps {
  color?: string;
  scrollHeight?: boolean;
}

const ViewContainer = styled.div<typeProps>`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;
  height: ${(props) => (props.scrollHeight ? '700px' : 'auto')};
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f50057;
    border-radius: 50px;
    width: 0px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    overflow: hidden;
    height: auto;

    h1 {
      padding: 0.5rem 0;
    }
    p {
      padding: 0.5rem 0;
    }
  }

  h1:nth-child(3) {
    padding-top: 1rem;
  }
`;
const GuidInfo: React.FC<typeProps> = ({ children, ...props }) => {
  return <ViewContainer {...props}>{children}</ViewContainer>;
};

export default GuidInfo;