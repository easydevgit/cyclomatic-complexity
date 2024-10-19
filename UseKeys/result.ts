function processCommand(command: string): string {
  const commandActions: { [key: string]: string } = {
    start: "Starting the process...",
    stop: "Stopping the process...",
    pause: "Pausing the process...",
    resume: "Resuming the process...",
  };

  return commandActions[command] || "Unknown command";
}

// Function to get a random number between 10 and 25
function getRandomNumber(): number {
  return Math.floor(Math.random() * (25 - 10 + 1)) + 10;
}

console.log(processCommand("start")); // Output: Starting the process...
console.log(processCommand("stop")); // Output: Stopping the process...
console.log(processCommand("pause")); // Output: Pausing the process...
console.log(processCommand("resume")); // Output: Resuming the process...
console.log(processCommand("unknown")); // Output: Unknown command

// Example usage of getRandomNumber function
console.log(getRandomNumber()); // Output: Random number between 10 and 25
