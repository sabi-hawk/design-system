import { useState } from 'react';
import { externalTokens } from '../configs/external-tokens';
import { baseTokens } from '../configs/base-tokens.js';
import './App.css';
import Button from './components/button';
import {ThemeProvider} from "../utils/theme-provider"

const MissionControl = ({ setStyle }) => {
  return (
    <>
      <h1>Mission Control</h1>

      <div
        style={{
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '12px'
        }}
      >
        <button 
          onClick={() => setStyle(baseTokens)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f8f9fa',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Apply Base Style
        </button>
        <button 
          onClick={() => setStyle(externalTokens)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f8f9fa',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Apply Company Specific Style
        </button>
      </div>
      <div
        style={{
          height: '1px',
          width: '100%',
          backgroundColor: '#e7e7e7',
          margin: '24px 0px 48px 0px'
        }}
      ></div>
    </>
  );
};

function App() {
  const [style, setStyle] = useState(baseTokens);

  return (
    <ThemeProvider tokens={style}>
      <MissionControl setStyle={setStyle} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Button />
        <Button>Custom Text Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
