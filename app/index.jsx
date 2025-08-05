import { StyleSheet, Text, View, Image  } from 'react-native'
import React from 'react'
import Logo from '../assets/icon.png'

const Home = () => (
  <View style={styles.container}>

 <Image source={Logo} style={styles.img} />

    <Text style={styles.title}>The Number 1</Text>
    <Text style={{marginTop: 10, marginBottom:30}}>Reading List App</Text>

  </View>



)

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  img: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
})