export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map(q => q.id === action.quoteId ? {...q, votes: q.votes + 1} : q)
    case "DOWNVOTE_QUOTE":
      const quote = state.find(q => q.id === action.quoteId)
      if (quote.votes === 0) return state
      return state.map(q => q.id === action.quoteId ? {...q, votes: q.votes - 1} : q)
    default:
      return state
  }
}
