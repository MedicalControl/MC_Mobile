import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { ThreeButton } from '../../components/shared/ThreeButton'




export const DrugsScreen = () => {
    return (
        <View>
            <View style = {{justifyContent:'center', alignItems: 'center'}}>
                <ThreeButton
                    label='Acetaminofen'
                    label_2='Clotrimazol'
                    label_3='Frecuencia: Cada 8 horas'
                   name='balloon-outline'
                   size={20}
                   color='black'
                   name_2='alarm-outline'
                   size_2 ={20}
                   color_2='black'
                    
                />
            </View>
        </View>
    )
}
