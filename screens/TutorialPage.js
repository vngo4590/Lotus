import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import {Image} from "react-native";


const TutorialPage = ({navigation}) => {
  return (
    <Onboarding
      titleStyles={{fontWeight: 'bold', color: '#fff'}}
      textStyle={{ color: '#fff', marginTop: 0, fontWeight: 'bold' }}
      imageContainerStyles={{paddingBottom:0}}
      pages={[
        {
          backgroundColor: '#F4456F',
          image: <Image source={require('../assets/tutorialscreen/screen1.png')} />,
          title: 'Device Connection',
          subtitle: 'Enter code given by elder with physical device',
        },
        {
          backgroundColor: '#F4456F',
          image: <Image source={require('../assets/tutorialscreen/screen2.png')} />,
          title: 'Colour of the Day',
          subtitle: 'This page will light up with the colour of the day',
        },
        {
          backgroundColor: '#F4456F',
          image: <Image source={require('../assets/tutorialscreen/screen3.png')} />,
          title: 'Connected Accounts',
          subtitle: 'View your family members on your account page',
        },
        {
          backgroundColor: '#F4456F',
          image: <Image source={require('../assets/tutorialscreen/screen4.png')} />,
          title: 'Colour Picker',
          subtitle: 'This page and icon will appear when it is your turn to choose',
        },      
      ]}
    />

  );

};

export default TutorialPage;
