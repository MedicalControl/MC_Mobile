import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
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
