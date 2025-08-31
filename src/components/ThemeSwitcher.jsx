import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.dark ? "#222" : "#fff")};
    color: ${(props) => (props.dark ? "#fff" : "#000")};
    font-family: Arial, sans-serif;
    transition: all 0.3s ease;
  }
`;

// Remove the Container or make it small
const ToggleButton = styled.button`
    padding: 8px 16px;
    cursor: pointer;
    background: ${(props) => (props.dark ? "#fff" : "#222")};
    color: ${(props) => (props.dark ? "#000" : "#fff")};
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <GlobalStyle dark={isDark} />
            <ToggleButton dark={isDark} onClick={() => setIsDark(!isDark)}>
                {isDark ? "☀️ Light" : "🌙 Dark"}
            </ToggleButton>
        </>
    );
}

export default ThemeSwitcher;