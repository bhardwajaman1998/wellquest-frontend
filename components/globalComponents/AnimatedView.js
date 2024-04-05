import React, {useRef, useEffect} from 'react'
import { Animated } from 'react-native'

const AnimatedView = (props) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect (()=>{
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000
        }).start();
    }, []);

    return (
        <Animated.View style={{...props.style, opacity: animation}}>
            {props.children}
        </Animated.View>
    )
}

export default AnimatedView;