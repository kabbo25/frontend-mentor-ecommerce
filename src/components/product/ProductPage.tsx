import { ProductGallery } from './ProductGallery'
import { ProductInfo } from './ProductInfo'
import { QuantitySelector } from './QuantitySelector'
import { AddToCartButton } from './AddToCartButton'

function ProductPage() {
  return (
    <div>
      <div>
        <ProductGallery />
      </div>
      <div>
        <ProductInfo />
        <QuantitySelector />
        <AddToCartButton />
      </div>
    </div>
  )
}

export { ProductPage }

interface ProductData {
  id: string
  company: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  images: string[]
}