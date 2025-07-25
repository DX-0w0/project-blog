import { useEffect, useState } from 'react'
import styles from './contact-form.module.css'
import Notification from '../ui/notification'

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState()
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  async function sendMessageHandler(event) {
    event.preventDefault()

    //add client-side validation

    setRequestStatus('pending')

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })

      setRequestStatus('success')
      setEnteredEmail('')
      setEnteredMessage('')
      setEnteredName('')
    } catch (error) {
      setRequestStatus('error')
      setRequestError(error.message)
    }
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    }
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message Sent',
      message: 'Your message was send',
    }
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError,
    }
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && <Notification {...notification} />}
    </section>
  )
}
