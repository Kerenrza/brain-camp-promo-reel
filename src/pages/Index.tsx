import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const scenes = [
    {
      title: "You've tried everything...",
      content: "Meditating. Manifesting. Mood boards.",
      character: "😴",
      popup: "Day 1: Just notice how unhinged your brain is."
    },
    {
      title: "Meet your inner critic",
      content: "That voice telling you you're failing at life",
      character: "👺",
      popup: "Spoiler: You're not broken, just outnumbered."
    },
    {
      title: "Your mood tracker",
      content: "Spinning like a broken compass",
      character: "🧭",
      popup: "Fix your vibe, not your whole life."
    },
    {
      title: "Brain Camp",
      content: "30 Days to Rewire Your Internal Chaos",
      character: "🧠",
      popup: "We don't do cringey affirmations here. You're welcome."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
      setShowPopup(false);
      setTimeout(() => setShowPopup(true), 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(popupTimer);
  }, [currentScene]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-sm font-bold text-foreground opacity-70">
          positive<span className="text-accent">-ISH</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* Domino Stack Logo */}
        <div className="mb-8 relative">
          <div className="flex space-x-1 wobbly-text">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-6 h-12 bg-primary rounded-sm transform transition-all duration-300 ${
                  i === 2 ? 'scale-110' : ''
                }`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: `rotate(${i * 2 - 4}deg)`
                }}
              />
            ))}
          </div>
          <div className="absolute -top-2 -right-2 text-accent text-2xl pop-in">⚡</div>
        </div>

        {/* Scene Display */}
        <Card className="w-full max-w-md p-8 text-center bg-card border-2 border-primary relative">
          <div className="space-y-6">
            {/* Character */}
            <div className="text-6xl floating-element">
              {scenes[currentScene].character}
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-foreground wobbly-text">
              {scenes[currentScene].title}
            </h1>

            {/* Content */}
            <p className="text-muted-foreground">
              {scenes[currentScene].content}
            </p>

            {/* Scene Navigation */}
            <div className="flex justify-center space-x-2">
              {scenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScene(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentScene
                      ? 'bg-secondary'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Popup */}
          {showPopup && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-lg pop-in text-sm font-medium whitespace-nowrap">
              {scenes[currentScene].popup}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-accent"></div>
            </div>
          )}
        </Card>

        {/* CTA */}
        <div className="mt-8 text-center space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            🧠 Brain Camp: 30 Days to Rewire Your Internal Chaos
          </h2>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg">
            Start the challenge. Or don't. But like... probably do.
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 text-2xl floating-element opacity-60">
          📝
        </div>
        <div className="absolute bottom-32 left-20 text-2xl floating-element opacity-60" style={{ animationDelay: '1s' }}>
          🎯
        </div>
        <div className="absolute top-1/2 left-10 text-2xl floating-element opacity-60" style={{ animationDelay: '2s' }}>
          💭
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-muted-foreground text-sm">
          No toxic positivity. No sparkly fake smiles. Just real talk.
        </p>
      </div>
    </div>
  );
};

export default Index;
