function processCommand(command: string): string {
  if (command === "start") {
    return "Starting the process...";
  } else if (command === "stop") {
    return "Stopping the process...";
  } else if (command === "pause") {
    return "Pausing the process...";
  } else if (command === "resume") {
    return "Resuming the process...";
  } else {
    return "Unknown command";
  }
}

console.log(processCommand("start"));

console.log(processCommand("start")); // Output: Starting the process...
console.log(processCommand("stop")); // Output: Stopping the process...
console.log(processCommand("pause")); // Output: Pausing the process...
console.log(processCommand("resume")); // Output: Resuming the process...
console.log(processCommand("unknown")); // Output: Unknown command
