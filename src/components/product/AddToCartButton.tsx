interface AddToCartButtonProps {
  onClick?: () => void
  disabled?: boolean
}

function AddToCartButton({
  onClick = () => {},
  disabled = false
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Add to cart
    </button>
  )
}

export { AddToCartButton }