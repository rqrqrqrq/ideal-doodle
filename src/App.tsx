import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 w-24 transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="animate-spin-slow h-24 w-24 transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mt-8 text-5xl font-bold">Vite + React</h1>
      <div className="mt-8 rounded-lg bg-gray-800 p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent bg-gray-700 px-5 py-3 font-medium transition-colors hover:border-blue-500 focus:ring-4 focus:ring-blue-500/50 focus:outline-none"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="text-blue-400">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-sm text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
