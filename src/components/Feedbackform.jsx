import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(null)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = event => {
    const enteredText = event.target.value

    if (enteredText === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (enteredText.trim().length <= 10) {
      setMessage('Text must be at least 10 characters long')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(enteredText)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (text.trim().length > 10 && rating) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)
      setText('')
      setRating(null)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate CODFATHER?<br />🐡 Your Opinion Matters 🐡</h2>
        <RatingSelect select={selectedRating => setRating(selectedRating)} />
        {rating && <div className="rating-selection">You selected a rating of {rating}</div>}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="🐠 Share your thoughts 🐠"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
