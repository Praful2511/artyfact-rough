import Link from "next/link"

export const metadata = {
  title: 'Marketplace',
  description: 'Artyfact Marketplace',
}
const MarketplaceLayout = ({ children }) => {
  return (<>
    <div className="container flex flex-col ">
      <div className='flex justify-center'>
        <div className="mr-3 border-b-2 border-accent"><Link href="/marketplace/browse/avatar">Browse</Link></div>
        <div className="mr-3"><Link href="/marketplace/my-items">Items</Link></div>
        <div className="mr-3"><Link href="/marketplace/bookmark">Bookmarks</Link></div>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  </>)
}

export default MarketplaceLayout