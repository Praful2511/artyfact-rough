import Link from "next/link"

export const metadata = {
  title: 'Marketplace',
  description: 'Artyfact Marketplace',
}
const MarketplaceLayout = ({ children }) => {
  return (<>
    <div className="container flex flex-col">
      <div className='flex'>
        <div className="mr-3"><Link href="/marketplace/browse/avatar">Browse</Link></div>
        <div className="mr-3"><Link href="/marketplace/my-items">items</Link></div>
        <div className="mr-3"><Link href="/marketplace/bookmark">Bookmark</Link></div>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  </>)
}

export default MarketplaceLayout