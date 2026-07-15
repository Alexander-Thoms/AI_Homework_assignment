export default function AddItemForm({ name, error, maxLength, onNameChange, onSubmit }) {
  return (
    <>
      <form
        onSubmit={onSubmit}
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
            maxLength={maxLength}
            onChange={(event) => onNameChange(event.target.value)}
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
    </>
  )
}
