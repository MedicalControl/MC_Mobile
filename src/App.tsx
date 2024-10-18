import { NavigationContainer } from '@react-navigation/native'
import { SideMenu } from './presentation/routes/SideMenuNavigator';



export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack_Navigator />*/} 
      {/*<ButtonTabs_Navigator />*/}
      <SideMenu />
    </NavigationContainer>
  )
}

