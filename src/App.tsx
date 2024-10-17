import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState, useRef } from 'react'
import { SideMenu } from './presentation/routes/SideMenuNavigator';
import AlarmClock from './alarm';
import * as Notifications from "expo-notifications";


export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack_Navigator />*/} 
      {/*<ButtonTabs_Navigator />*/}
      <AlarmClock />
    </NavigationContainer>
  )
}

//ahora