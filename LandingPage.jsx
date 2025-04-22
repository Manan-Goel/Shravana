const LandingPage = ({ onSelect }) => {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Glowing background */}
        <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
  
        <h1 className="text-5xl font-bold mb-6">Welcome to Shravana</h1>
        <p className="mb-8 text-center max-w-md">
          Choose your role to continue to the platform.
        </p>
  
        <div className="flex gap-6 flex-wrap justify-center">
          <button className="glow-button" onClick={() => onSelect("parent")}>
            I’m a Parent
          </button>
          <button className="glow-button" onClick={() => onSelect("caregiver")}>
            I’m a Caregiver
          </button>
        </div>
      </div>
    );
  };
  
  export default LandingPage;
  