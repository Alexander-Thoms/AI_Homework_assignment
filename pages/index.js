import { useState, useEffect } from 'react'
import Head from 'next/head'
import AddItemForm from '../components/AddItemForm'
import ItemList from '../components/ItemList'

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

  function clearAll() {
    if (items.length === 0) return
    if (window.confirm('Remove all items from your list?')) {
      setItems([])
    }
  }

  function printList() {
    window.print()
  }

  return (
    <>
      <Head>
        <title>Store List</title>
      </Head>
      <img
        src="/background.jpg"
        alt="Colorful abstract background"
        className="background-image"
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

      <AddItemForm
        name={name}
        error={error}
        maxLength={MAX_LENGTH}
        onNameChange={(value) => {
          setError('')
          setName(value)
        }}
        onSubmit={addItem}
      />

      {items.length > 0 ? (
        <div className="list-actions">
          <button type="button" className="secondary" onClick={printList}>
            Print list
          </button>
          <button type="button" className="contrast outline" onClick={clearAll}>
            Clear all
          </button>
        </div>
      ) : null}

      <ItemList items={items} onRemove={removeItem} />

      <footer>
        <small>Built with Next.js + Pico CSS</small>
      </footer>
      </main>
    </>
  )
}
