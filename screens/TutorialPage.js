import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import {Image} from "react-native";


const TutorialPage = ({navigation}) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorial_page_1.png')} />,
          title: 'Onboarding1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/tutorial_page_2.png')} />,
          title: 'Onboarding2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },      
      ]}
    />

  );

};

export default TutorialPage;
