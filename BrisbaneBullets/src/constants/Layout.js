import { Dimensions } from "react-native";

export function scaleFontSize(fontSize) {
    const window = Dimensions.get("window");
    //dynamically adjust font sizes based on the screen size of the device
    return Math.round((fontSize / 375) * Math.min(window.width, window.height));
}
