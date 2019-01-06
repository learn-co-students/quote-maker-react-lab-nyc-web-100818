export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE': {
      console.log('Adding quote')
      return [...state, action.quote]
    }
    case 'UPVOTE': {
      const upvotedQuote = {...action.quote, votes: action.quote.votes + 1}
      console.log(upvotedQuote)
      return state.map(quote => quote.id === upvotedQuote.id ? upvotedQuote : quote)
    }
    case 'DOWNVOTE': {
      const downvotedQuote = {...action.quote, votes: action.quote.votes - 1}
      console.log(downvotedQuote)
      return state.map(quote => quote.id === downvotedQuote.id ? downvotedQuote : quote)
    }
    case 'REMOVE_QUOTE': {
      const index = state.indexOf(action.quote)
      const newState = [...state]
      newState.splice(index, 1)
      return newState
    }
    default: {
      return state
    }
  }
}
