import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={38} />
        <h3>Demo inquiry recorded.</h3>
        <p>This testing form currently works in the browser only. A live email service can be connected later.</p>
        <button type="button" className="button button--green" onClick={() => setSubmitted(false)}>Send another</button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Full name<input required name="name" autoComplete="name" /></label>
      <label>Company<input name="company" autoComplete="organization" /></label>
      <label>Email<input required type="email" name="email" autoComplete="email" /></label>
      <label>Phone<input name="phone" autoComplete="tel" /></label>
      <label className="field-wide">Inquiry type
        <select required name="type" defaultValue="">
          <option value="" disabled>Select an inquiry</option>
          <option>Coffee export inquiry</option>
          <option>Agrochemical product inquiry</option>
          <option>Oilseed and pulse inquiry</option>
          <option>General company inquiry</option>
        </select>
      </label>
      <label className="field-wide">Message<textarea required name="message" rows={6} /></label>
      <button className="button button--orange field-wide" type="submit">Submit demo inquiry</button>
    </form>
  )
}
