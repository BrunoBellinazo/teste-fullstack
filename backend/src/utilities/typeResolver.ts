export default function resolveType(temp: number, isRaining: boolean): string {
  if (isRaining) return 'electric';
  if (temp < 5) return 'ice';
  if (temp >= 5 && temp < 10) return 'water';
  if (temp >= 12 && temp < 15) return 'grass';
  if (temp >= 15 && temp < 21) return 'ground';
  if (temp >= 23 && temp < 27) return 'bug';
  if (temp >= 27 && temp <= 33) return 'rock';
  if (temp > 33) return 'fire';
  return 'normal';
}