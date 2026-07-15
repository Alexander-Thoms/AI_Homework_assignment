export default function Header() {
  return (
    <header className="container">
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/" aria-current="page">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}