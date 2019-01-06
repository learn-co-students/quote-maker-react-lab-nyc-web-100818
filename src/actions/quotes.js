export function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}

export function upvoteQuote(quote) {
  return {
    type: 'UPVOTE',
    quote: quote
  }
}

export function downvoteQuote(quote) {
  return {
    type: 'DOWNVOTE',
    quote: quote
  }
}

export function removeQuote(quote) {
  return {
    type: 'REMOVE_QUOTE',
    quote: quote
  }
}
