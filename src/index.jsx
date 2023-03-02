import { createRoot } from 'react-dom/client';

// Import statement to indicate that you need to bundle './index.scss'
import "./index.scss";

// Main component (will eventually use all others)
const flickFilesApplication = () => {
  return (
    <div className="flick-files">
      <div>Good morning</div>
    </div>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the Root DOM element
root.render(<flickFilesApplication/>);