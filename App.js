import { Text,StyleSheet, View } from "react-native";
import { Profile } from "./components/Profile/Profile"
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
import  {style}  from "./App.style"
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <Text style={style.title}>Hello Guys</Text>
      <View style={style.square}>
        <Text style={style.innerText}>Box</Text>
        </View>
      </SafeAreaView>   
    </SafeAreaProvider>

  )

}


