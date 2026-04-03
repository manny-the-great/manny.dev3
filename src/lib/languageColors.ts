export const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  "C#": "#178600",
  "C++": "#f34b7d",
  Java: "#b07219",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Ruby: "#701516",
  Rust: "#dea584",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Solidity: "#AA6746",
  Shell: "#89e051",
  Vue: "#41b883",
  React: "#61dafb",
  Next: "#000000",
  Tailwind: "#06b6d4"
};

export function getLanguageColor(language: string): string {
  return languageColors[language] || "#8b8b8b";
}
