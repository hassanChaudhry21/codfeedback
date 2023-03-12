import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import Header from "./components/Header.jsx"
import FeedbackList from "./components/FeedbackList.jsx"
import FeedbackData from "./data/Feedbackdata"
import FeedbackStats from "./components/FeedbackStats.jsx"
import Feedbackform from "./components/Feedbackform.jsx"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header text='CODFATHER' />
      <div className="container">
        <Feedbackform handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App

