interface HeaderProps {
  onCartClick?: () => void
  onProfileClick?: () => void
}

function Header({
  onCartClick = () => {},
  onProfileClick = () => {}
}: HeaderProps) {
  return (
    <header>
      <div>
        <div>
          <a href="/">sneakers</a>
        </div>
        
        <nav>
          <ul>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <div>
        <button 
          type="button" 
          aria-label="Cart"
          onClick={onCartClick}
        >
          Cart
        </button>
        
        <button
          type="button"
          aria-label="Profile"
          onClick={onProfileClick}
        >
          Profile
        </button>
      </div>
    </header>
  )
}

export { Header }