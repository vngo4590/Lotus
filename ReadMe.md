# **Lotus**

### **What is Lotus?**

The Lotus application is a companion app that goes collectively with the Lotus physical device. The application prompts users to have meaningful conversations with their elderly through an asynchronous manner.

### **Lotus App Development**

This project is a high fidelity prototype of the Lotus app. Currently, the frontend section of the application has been completed however the backend is not implemented due to time constraint. The application was build with the React Native framework and is currently design specifically for Andriod users.

## **Installation**

**Installation on mobile device**

If you have an Android mobile phone, you can download the latest version in [here](https://www.notion.so/a90aff25c24340c39b78bda78e92b50b). The file will be in an APK format and you can open it through their files directory folder under downloads. Currently, there is no deployed version of the application for the iOS system.

**Installation on local computer**

To run the following project on your local computer, you will need these tools and frameworks:

- NodeJS to install React Native
- React Native
- Visual Studio Code
- Github account
- NPM to install Expo Go

Once these are installed, you can follow the following steps.

1. User will need to install the Expo Go on their local terminal. Expo Go is a necessary framework because it is specifically built for development, deploying, iterating and running React Native projects. More information on installation for Expo Go can be found in the following [link](https://docs.expo.dev/). 
2. Once all of these are installed, user will need to download an Android or iOS emulator. These emulators are mobile phone simulators that allow our app to run on the computer.
    1. If the user opt in running the application in an Android emulator then they will need to download Android Studio. More documentation can be found [here](https://developer.android.com/studio/run/emulator).
    2. On the other hand, for iOS, users will need to download XCode from the App Store. They will need to click on the "XCode" tab on the top left bar and then select "Open Developer Tool" and a "Simulator" option will be shown.
3. User will need to fork the following Lotus Github repository
4. Once, user has fork the project to their local computer, they will need to open Visual Studio code to open the files.
5. The user will then need to open the terminal inside Visual Studio code and run the following command.
   
    ```
    npm install
    ```
    
    The command is to download all the necessary packages and plugins for the app to run (e.g. Settings page uses a package from react-native-picker for dropdown menu because React Native has deprecated the following feature on their latest version)
    
6. Afterwards, the user will need to type
   
   
    ```
    npm start
    ```
    
    into the terminal once all the packages have been installed.
    
7. The terminal will redirect you to your browser and open a new tab that signifies that the app is running. However, you can directly go back to your terminal and type `i` if you have an iOS emulator or `a` for an Android emulator. This will automatically open and run your installed emulator.
8. The following step is optional however you are also able to run from their own physical device as well after running the command `npm start`.
    1. Users will need to open the Expo Go application on their phone. The application can be downloaded from the App Store which is available for both Android and iOS.
    2. Open the Expo Go application and scan the QR code that was shown in the web browser or terminal.