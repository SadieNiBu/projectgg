import Showcase_Item from "./showcase_item"
import '~/styles/profile.css'

const Showcase = () => {
    return (
        <div className="rectangle ml-[180px] mt-[100px]">
        <div className="grid grid-cols-7 mt-3 pl-5">
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
        </div>
        <div className="grid grid-cols-7 mt-20 pl-5">
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
            <Showcase_Item />
        </div>
        </div>
    )
}

export default Showcase