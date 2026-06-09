import { useState } from 'react'
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Carlos Cata', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Atque velit' },
    { id: 2, name: 'Diego Cueva', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Atque velit' },
    { id: 3, name: 'Jose', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Atque velit' },
  ])

  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleSend = () => {
    if (name.trim() === '' || text.trim() === '') return
    const newReview = {
      id: Date.now(),
      name: name,
      text: text,
    }
    setReviews([...reviews, newReview])
    setName('')
    setText('')
  }

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id))
  }

  return (
    <footer className="reviews" id="reviews">
      <h2 className="reviews__title">Custommer Reviews</h2>
      <div className="reviews__container">
        <div className="reviews__form">
          <input
            className="reviews__input"
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="reviews__textarea"
            placeholder="Reviews..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="reviews__btn" onClick={handleSend}>Send</button>
        </div>
        <div className="reviews__cards">
          {reviews.map((review) => (
            <div className="reviews__card" key={review.id}>
              <button className="reviews__delete" onClick={() => handleDelete(review.id)}>✕</button>
              <div className="reviews__stars">★★★★★</div>
              <p className="reviews__text">{review.text}</p>
              <span className="reviews__name">{review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Reviews