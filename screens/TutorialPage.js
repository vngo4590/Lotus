import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import {View, Image} from "react-native";

const Dots =({selected})=>{
  let backgroundColor;

  backgroundColor = selected ? '#F4456F' : '#FCE6E1';

  return(
    <View
      style={{
        width: 10,
        height: 10, 
        marginHorizontal: 8,
        borderRadius: 25, 
        backgroundColor
      }}
    />

  );
}


const TutorialPage = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("RegisterScreen")}
      onDone={() => navigation.navigate("RegisterScreen")}
      titleStyles={{fontWeight: 'bold'}}
      textStyle={{marginTop: 0, fontWeight: 'bold' }}
      imageContainerStyles={{paddingBottom:0}}
      containerStyles={{padding: 70}}
      DotComponent={Dots}
      bottomBarColor={'#fff'}
      bottomBarHeight={140}

      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorialscreen/screen1.png')} />,
          title: 'Device Connection',
          subtitle: 'Enter code given by elder with physical device',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorialscreen/screen2.png')} />,
          title: 'Colour of the Day',
          subtitle: 'This page will light up with the colour of the day',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorialscreen/screen3.png')} />,
          title: 'Connected Accounts',
          subtitle: 'View your family members on your account page',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorialscreen/screen4.png')} />,
          title: 'Colour Picker',
          subtitle: 'This page and icon will appear when it is your turn to choose',
        },      
      ]}
    />

  );

};

export default TutorialPage;
