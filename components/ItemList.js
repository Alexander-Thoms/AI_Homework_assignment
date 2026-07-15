export default function ItemList({ items, onRemove }) {
  if (items.length === 0) {
    return (
      <article>
        <p>
          <small>Your list is empty. Add an item above to get started.</small>
        </p>
      </article>
    )
  }

  return (
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
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
