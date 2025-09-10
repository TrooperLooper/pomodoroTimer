import React from "react";

export default function MinutesCircle({
  totalSeconds,
  secondsLeft,
  isRunning,
  timerType,
}) {
  const numDots = 25;
  const radius = 100;
  const center = 200;
  const rotationOffset = -Math.PI / 2; // Top dot at index 0

  // Helper: get logical index for each timer type
  function getLogicalIndex(i) {
    if (timerType === "long") {
      // Left-to-right, ending at top dot
      return (i + 24) % numDots; // Start at index 24 (left of top), then 0, 1, ..., 23
    } else if (timerType === "short") {
      // 5 rightmost dots, ending at top dot
      return i + 20; // Indices 20, 21, 22, 23, 24 (top)
    } else if (timerType === "medium") {
      // 20 rightmost dots, ending at top dot
      return i + 5; // Indices 5, 6, ..., 24 (top)
    }
    return i;
  }

  return (
    <div
      className="minute-dots"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {Array.from({ length: numDots }).map((_, i) => {
        const logicalIndex = getLogicalIndex(i) % numDots;
        const angle = (2 * Math.PI * logicalIndex) / numDots + rotationOffset;
        const x = center + radius * Math.cos(angle) - 9;
        const y = center + radius * Math.sin(angle) - 9;

        // Only show blue for the first N dots
        const isActiveDot = i < totalSeconds;
        const expired = isActiveDot && i < totalSeconds - secondsLeft;
        const current = isActiveDot && i === totalSeconds - secondsLeft;

        let dotSrc = "/images/minute_expired.svg";
        let zIndex = 1;

        if (isActiveDot) dotSrc = "/images/minute_left.svg";
        if (expired) dotSrc = "/images/minute_expired.svg";
        if (current && isRunning) {
          dotSrc = "/images/minute_current.svg";
          zIndex = 99;
        }

        return (
          <img
            key={i}
            src={dotSrc}
            alt="minute dot"
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 18,
              height: 18,
              zIndex: zIndex,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </div>
  );
}

function App() {
  const currentTimer = { minutes: 60 }; // Example timer
  const timeLeft = 30; // Example time left
  const isRunning = true; // Example running state

  return (
    <MinutesCircle
      totalSeconds={currentTimer.minutes}
      secondsLeft={timeLeft}
      isRunning={isRunning}
    />
  );
}
