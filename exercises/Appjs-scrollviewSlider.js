import React, { useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, } from 'react-native';
import LottieView from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';


export default function App() {
  const [activeIndex, setactiveIndex] = useState(0)
  const [carouselItems, setcarouselItems] = useState([
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
  ])

  const animation = useRef(null);

  useEffect( () => {
    animation.current.play()
  })

  const onPress = () => {
    animation.current.play();
  }

  const  _renderItem = ({item,index}) => {
    return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 20,
          marginRight: 20, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
  }

  return (
    <View style={styles.container}>
    <View>
      <LottieView style={styles.lottie} ref={animation} source={require('../assets/test.json')} />
      {/* <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{'PLAY'}</Text>
      </TouchableOpacity> */}
    </View>
      <View style={{ flexDirection:'row', justifyContent: 'center', marginTop: -250, marginLeft: 20, width: '100%'}}>
          <Carousel
            layout={"default"}
            ref={ref => carousel = ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem = { index => setactiveIndex(activeIndex => index) } />
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 140,
    backgroundColor: '#ecf0f1',
    width: '100%',
  },
  lottie: {
    width: '100%', 
    height: 800
  },
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  }
});