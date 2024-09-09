import { NavigationContainer } from '@react-navigation/native'

import { Stack_Navigator } from './presentation/routes/StackNavigator';
import { useState } from 'react'
import { ButtonTabs_Navigator } from './presentation/routes/ButtonTabs';
import { SideMenu } from './presentation/routes/SideMenuNavigator';


export default function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {/*<Stack_Navigator />*/}
      {/*<ButtonTabs_Navigator />*/}
      <SideMenu />
    </NavigationContainer>
  )
}
