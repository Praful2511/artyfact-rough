import MarketplaceSideBar from "@/components/sidebar_marketplace/marketplaceSideBar"

export const metadata = {
    title: 'Marketplace',
    description: 'Artyfact Marketplace',
}
const BrowseLayout = ({ children }) => {
    return (<>
        <div className="grid grid-cols-12">
            <div className='col-span-2'><MarketplaceSideBar /></div>
            <div className='col-span-10'>{children}</div>
        </div>
    </>)
}

export default BrowseLayout