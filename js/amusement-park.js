// https://exercism.org/tracks/javascript/exercises/amusement-park/solutions/dotnil

export function createVisitor(name, age, ticketId) {
  return { name, age, ticketId }
}

export function revokeTicket(visitor) {
  visitor.ticketId = null
 
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  const id = tickets[ticketId]
 
  if (id === undefined) return 'unknown ticket id'
  if (id === null) return 'not sold'
  return `sold to ${id}`
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version
}
