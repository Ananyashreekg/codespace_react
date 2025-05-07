// App.jsx
import React from "react";
import ParentComponent from "./ParentComponent";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in the application.</h2>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "30px" }}>
      <h1 style={{ color: "#333" }}>React.memo Optimization</h1>
      <ErrorBoundary>
        <ParentComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
