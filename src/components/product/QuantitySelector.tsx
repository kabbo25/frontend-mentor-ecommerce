interface QuantitySelectorProps {
  quantity?: number
  onDecrement?: () => void
  onIncrement?: () => void
}

function QuantitySelector({
  quantity = 0,
  onDecrement = () => {},
  onIncrement = () => {}
}: QuantitySelectorProps) {
  return (
    <div>
      <button
        type="button"
        aria-label="Decrease quantity"
      >
        -
      </button>
      
      <span>{quantity}</span>
      
      <button
        type="button"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export { QuantitySelector }