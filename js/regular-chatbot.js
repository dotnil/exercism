export function isValidCommand(command) {
  const regex = /chatbot/i
  return regex.test(command)
}
