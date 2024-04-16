import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function App(): React.JSX.Element {

  const injectedJavascript = `(function() {
    window.postMessage = function(data) {
      window.ReactNativeWebView.postMessage(data);
    };
  })()`;




  return (
    <View>
      <WebView source={{ uri: 'https://xenhapgiare.com.vn/' }} style={{ flex: 1 }} injectedJavascript={injectedJavascript}/>
    </View>
  );
}


  export default App;


