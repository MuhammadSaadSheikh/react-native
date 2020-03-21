import React from 'react'

import { TouchableOpacity, Text } from 'react-native'

export default function About(props) {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
            <Text>About Screen</Text>
        </TouchableOpacity>
    )
}