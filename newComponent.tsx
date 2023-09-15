
import {Text, View } from 'react-native';

interface ChildViewProps {
    text: string;
}

const ChildView = (props: ChildViewProps) =>{
    return(
        <View>
            <text>{props.text}</text>
        </View>
    )
}

export default ChildView
