
import React from "react";
import { View } from "react-native";
import ChildView from "./newComponent";

const ParentView = () => {
  return (
    <View>
        <ChildView text={'hej'} />
    </View>
  )
}

export default function App() {
  return (
    <View>
      <ParentView/>
    </View>
  );
}


