export default function AddItemForm({ name, error, maxLength, onNameChange, onSubmit }) {
  return (
    <>
      <form onSubmit={onSubmit} className="add-item-form">
        <label htmlFor="item-name" className="add-item-form__label">
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
        <p className="add-item-form__error">
          <small>{error}</small>
        </p>
      ) : null}
    </>
  )
}
