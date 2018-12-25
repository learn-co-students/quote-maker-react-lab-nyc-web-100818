export default (state = [], action) => {

  switch (action.type) {

    case 'ADD_QUOTE':
    return [...state, action.quote]

    case 'REMOVE_QUOTE':
      let index = state.indexOf(state.find(quote => action.quoteId === quote.id))
      let removeState = [...state]; removeState.splice(index, 1)
      return removeState

    case 'UPVOTE_QUOTE':
      let upvoteQuote = state.find(quote=> quote.id === action.quoteId); upvoteQuote.votes += 1
      let upvoteState = Object.assign([], state.map(quote => quote.id === action.quoteId ? upvoteQuote : quote))
      return upvoteState

    case 'DOWNVOTE_QUOTE':
      let downvoteQuote = state.find(quote => quote.id === action.quoteId); downvoteQuote.votes < 1 ? downvoteQuote : downvoteQuote.votes -= 1
      let downvoteState = Object.assign([], state.map(quote => quote.id === action.quoteId ? downvoteQuote: quote))
      return downvoteState
    default:
    
      return state;
  }
}
