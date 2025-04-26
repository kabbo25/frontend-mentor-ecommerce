interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

interface CartProps {
  items?: CartItem[]
  isOpen?: boolean
  onClose?: () => void
  onCheckout?: () => void
  onRemoveItem?: (id: string) => void
}

function Cart({
  items = [],
  isOpen = false,
  onClose = () => {},
  onCheckout = () => {},
  onRemoveItem = () => {}
}: CartProps) {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  
  if (!isOpen) return null
  
  return (
    <div>
      <div>
        <h3>Cart</h3>
        <button type="button" onClick={onClose} aria-label="Close cart">
          Close
        </button>
      </div>
      
      <div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <div>
                    {item.image && <img alt={item.name} />}
                    <div>
                      <p>{item.name}</p>
                      <p>
                        ${item.price.toFixed(2)} x {item.quantity} <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </p>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" onClick={onCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export { Cart }
export type { CartItem }