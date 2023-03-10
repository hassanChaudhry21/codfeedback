import FeedbackItem from "./FeedbackItem"

function FeedbackDisplay({ feedback, handleRemove }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback has been provided yet.</p>
  }

  return (
    <div className="feedback-display">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleRemove}
        />
      ))}
    </div>
  )
}

export default FeedbackDisplay

