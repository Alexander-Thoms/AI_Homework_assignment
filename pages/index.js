import { useState, useEffect } from 'react'

export default function HomePage() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const MAX_LENGTH = 30

  useEffect(() => {
    try {
      const saved = localStorage.getItem('store-items')
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('store-items', JSON.stringify(items))
    } catch {}
  }, [items])

  function addItem(event) {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    if (trimmed.length > MAX_LENGTH) {
      setError(`Item name must be ${MAX_LENGTH} characters or fewer.`)
      return
    }
    setError('')
    setItems((current) => [
      ...current,
      { id: Date.now(), name: trimmed },
    ])
    setName('')
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  return (
    <>
      <img
        src="/background.jpg"
        alt="Colorful abstract background"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <main className="container">
      <header>
        <hgroup>
          <h1>🛒 Store Items</h1>
          <p>Add items to your list and remove them when done.</p>
        </hgroup>
      </header>

      <p>
        <small>
          {items.length === 0
            ? 'No items yet'
            : `${items.length} item${items.length > 1 ? 's' : ''} in your list`}
        </small>
      </p>

      <form
        onSubmit={addItem}
        style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}
      >
        <label htmlFor="item-name" style={{ flex: '1 1 240px', marginBottom: 0 }}>
          Item name
          <input
            type="text"
            id="item-name"
            name="item-name"
            placeholder="e.g. Apples"
            value={name}
            maxLength={MAX_LENGTH}
            onChange={(event) => {
              setError('')
              setName(event.target.value)
            }}
            required
          />
        </label>
        <button type="submit">Add item</button>
      </form>

      {error ? (
        <p style={{ color: 'var(--pico-del-color, #d30000)' }}>
          <small>{error}</small>
        </p>
      ) : null}

      {items.length === 0 ? (
        <article>
          <p>
            <small>Your list is empty. Add an item above to get started.</small>
          </p>
        </article>
      ) : (
        <ul role="list">
          {items.map((item, index) => (
            <li key={item.id}>
              <article>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <span>
                    {index + 1}. {item.name}
                  </span>
                  <button
                    type="button"
                    className="secondary outline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}

      <footer>
        <small>Built with Next.js + Pico CSS</small>
      </footer>
      </main>
    </>
  )
}
