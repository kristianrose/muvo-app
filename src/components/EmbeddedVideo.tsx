import { View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
interface EmbeddedVideoProps {
  embedURL: string;
}
const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ embedURL }) => {
  return (
    <View>
      <WebView
        source={{
          html: `<iframe src="${embedURL}" style="position: absolute; inset:0; width: 100%; height: 93%;" frameborder="0" allowfullscreen scrolling="no" seamless allow="autoplay" referrerpolicy="no-referrer"></iframe>`,
        }}
        className="bg-black aspect-[18/9]"
        onShouldStartLoadWithRequest={() => {
          return false;
        }}
        setSupportMultipleWindows={false}
      />
    </View>
  );
};

export default EmbeddedVideo;
