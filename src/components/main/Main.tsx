import React, { useContext } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { ThemeContext } from '../../pages/_app';
import { lightTheme, Theme } from '../../styles/theme';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;
const MainContent = styled.div`
  padding: 7rem 13rem;
  @media only screen and (max-width: 768px) {
    padding: 3rem;
  }

  p {
    padding: 0.5rem 0rem;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 3rem;
  }
  h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

// moon {
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   box-shadow: 15px 15px 0 0 red;
// }

const BackgroundContianer = styled('div')<ThemeProps>`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 600px;
  clip-path: polygon(100% 20%, 0% 100%, 100% 100%);
  background: linear-gradient(to right, #01c9ca 0%, #3886ff 100%);

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to right, #01c9ca 0%, #000 100%);
    transition: all 0.5s ease-in-out;
    opacity: ${({ theme }) => theme.mainBgOpacity};
  }
`;

const StartButton = styled('button')<ThemeProps>`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  font-size: 1rem;
  padding: 0rem;
  margin-top: 2.5rem;
  color: ${({ theme }) => (theme === lightTheme ? theme.mainColor : theme.body)};
  background: ${({ theme }) => theme.startBackground};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  a {
    color: ${({ theme }) => (theme === lightTheme ? theme.mainColor : theme.mainColor)};
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    transition: all 0.1s ease-in-out;
    filter: brightness(${({ theme }) => (theme === lightTheme ? '0.9' : '1.13')});
  }
`;

interface ThemeProps {
  theme: Theme;
}

const Main: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <MainContent>
        <h2>조금 더 편한 아침을 위한</h2>
        <h1>수면계산기</h1>
        <p>아침에 일어날때 항상 피곤하셨나요?</p>
        <p>편하게 일어날 수 있는 시간을 계산해보세요!</p>
        <StartButton theme={theme}>
          <Link href="../calc/">
            <a>Start</a>
          </Link>
        </StartButton>
      </MainContent>
      <BackgroundContianer theme={theme} />
    </Container>
  );
};

export default Main;