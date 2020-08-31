import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Camera } from 'react-native-camera'
import * as FaceDetector from 'expo-face-detector';

//style
import { styles } from './style'

export default function Home(props) {
    const [permission, setPermission] = useState(null)
    const [face, handleFace] = useState([])
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(()=>{
        async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setPermission(status === 'granted')
        }
    })

    if(hasPermission == null) return <View/>
    if(!hasPermission) return <Text>No access to camera!</Text>

    return <View style={styles.mainWrapper} >
        <Camera
            onFacesDetected={this.handleFacesDetected}
            faceDetectorSettings={{
                mode: FaceDetector.Constants.Mode.fast,
                detectLandmarks: FaceDetector.Constants.Landmarks.none,
                runClassifications: FaceDetector.Constants.Classifications.none,
                minDetectionInterval: 100,
                tracking: true,
            }}
        />;
    </View>
}