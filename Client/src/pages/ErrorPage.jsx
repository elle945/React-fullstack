import { Routes, Route, Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <>
    <div>
            <p>There was an error loading this page.</p>
            <Link to={"/"}>Go back to home</Link>
            </div>
    </>
  )
}

export default ErrorPage;

