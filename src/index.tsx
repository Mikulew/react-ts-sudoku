import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './core/report-web-vitals';
import { Content, Title, Card, Grid } from './components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Title>React Sudoku App!</Title>
        <Card>
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
