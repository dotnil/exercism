// 

export function isValidCommand(command) {
  const allowableCommand = /^chatbot/i

  return allowableCommand.test(command)
}

export function removeEmoji(message) {
  const emoji = new RegExp(/emoji\d+/, 'g')

  return message.replace(emoji, '')
}

export function checkPhoneNumber(number) {
  const correctFormat = /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/g
  const match = correctFormat.exec(number)

  if (match) return 'Thanks! You can now download me to your phone.'
  return `Oops, it seems like I can't reach out to ${number}`
}

export function getURL(userInput) {
  const siteFormat = /\w+\.\w+/g
  const siteList = userInput.match(siteFormat)

  return siteList
}

export function niceToMeetYou(fullName) {
  const user = fullName.replace(/(\w+), (\w+)/g, '$2 $1')

  return `Nice to meet you, ${user}`
}
