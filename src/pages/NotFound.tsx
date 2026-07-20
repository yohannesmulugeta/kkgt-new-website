import { Link } from 'react-router-dom'
export function NotFound() { return <main className="not-found"><span>404</span><h1>Page not found.</h1><p>The page may have moved while this testing website is being developed.</p><Link className="button button--green" to="/">Return home</Link></main> }
