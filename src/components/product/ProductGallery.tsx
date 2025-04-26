interface ProductGalleryProps {
  images?: string[]
}

function ProductGallery({ images = [] }: ProductGalleryProps) {
  return (
    <div>
      <div>
        {/* Main product image */}
        <div>
          {images.length > 0 && (
            <img alt="Product main image" />
          )}
        </div>
      </div>
      
      {/* Thumbnail images */}
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export { ProductGallery }