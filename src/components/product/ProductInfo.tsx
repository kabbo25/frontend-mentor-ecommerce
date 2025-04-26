interface ProductInfoProps {
  company?: string
  name?: string
  description?: string
  price?: number
  originalPrice?: number
  discount?: number
}

function ProductInfo({
  company = 'SNEAKER COMPANY',
  name = 'Fall Limited Edition Sneakers',
  description = 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
  price = 125.00,
  originalPrice = 250.00,
  discount = 50
}: ProductInfoProps) {
  return (
    <div>
      <div>
        <h4>{company}</h4>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      
      <div>
        <div>
          <span>${price.toFixed(2)}</span>
          {discount > 0 && <span>{discount}%</span>}
        </div>
        
        {originalPrice > 0 && (
          <div>
            <span>${originalPrice.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export { ProductInfo }