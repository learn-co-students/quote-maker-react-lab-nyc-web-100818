import React from 'react'

const QuoteCard = ({ quote, removeQuote, upvoteQuote, downvoteQuote }) => {
  const { id, author, content, votes } = quote
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p key={id}>{content}</p>
            <footer>
              - author <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={() => upvoteQuote(id)}
              type="button"
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              onClick={() => downvoteQuote(id)}
              type="button"
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              onClick={() => removeQuote(id)}
              type="button"
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  )
}
export default QuoteCard
