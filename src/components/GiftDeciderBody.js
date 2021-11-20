import useWindowDimensions from "../WindowDim";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const GiftDeciderBody = () => {
    const ratio = Math.floor(useWindowDimensions())>0?1:0;
    return (
        ratio===1?<MobileView/>:<DesktopView/>
    );
}
export default GiftDeciderBody;