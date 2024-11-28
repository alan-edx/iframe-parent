import React from 'react';
import '../components/Home.css'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="home-content">
        <p>
          <strong>This is a demo app built to showcase the workflow and integration process of bStamp as an iframe within another React application. The goal of this app is to provide a clear understanding of how the bStamp platform works in the context of an embedded iframe, and to demonstrate the flow between the parent React application and the iframe.</strong>
        </p>
        <h2>What is bStamp?</h2>
        <p>
          bStamp is a digital platform designed for managing user authentication, document verification, and secure workflows, making it easier for organizations to handle sensitive data and processes. By embedding bStamp as an iframe inside another React application, you can seamlessly integrate bStamp's features into your own app.
        </p>

        <h2>Workflow Demonstration:</h2>
        <p>
          The core feature of this demo app is to illustrate how a parent React app can communicate with bStamp embedded as an iframe, sending essential data (like clientId and deviceId) and handling responses from the iframe.
        </p>

        <h3>Integration Flow:</h3>
        <ul>
          <li><strong>Parent App:</strong> The parent app includes the bStamp iframe and sends necessary data (such as clientId and deviceId) to the iframe via <code>postMessage</code>.</li>
          <li><strong>Iframe:</strong> The iframe receives this data, processes it, and may trigger additional actions (such as login, authentication, or document management). It may also send messages back to the parent app, like setting cookies or providing user-specific details.</li>
          <li><strong>Communication:</strong> The app uses <code>window.postMessage</code> to facilitate secure and seamless communication between the parent app and the iframe. This allows the iframe to respond with information like authentication tokens or status updates, which can be used in the parent app to adjust the UI or state.</li>
        </ul>

        <h2>User Experience:</h2>
        <ul>
          <li>The parent app provides an interactive, floating button that opens the iframe in a popup modal. This modal contains the bStamp iframe, ensuring a smooth user experience by allowing users to view and interact with the iframe while keeping the main app interface intact.</li>
          <li>The iframe is styled as a modal with a blurred background, making it appear like a floating overlay, and it can be easily opened or closed based on user interaction.</li>
        </ul>

        <h2>Why Use an Iframe?</h2>
        <ul>
          <li><strong>Isolation:</strong> The iframe keeps the functionality of the bStamp platform separate from the parent app, preventing any direct interference with the app's internal logic or styles.</li>
          <li><strong>Security:</strong> Since the iframe operates in a different context, sensitive data is handled within the iframe, reducing the risk of cross-site scripting (XSS) or other vulnerabilities in the parent app.</li>
          <li><strong>Easy Integration:</strong> Embedding an iframe allows the parent app to reuse bStamp's functionalities without having to fully integrate or rewrite the logic, providing a quick and clean solution for embedding third-party services.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
