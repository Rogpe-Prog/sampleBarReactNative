import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const App = () => {
  const [icon, setIcon] = useState('menu')

  const onChangeIcon = () => {
    icon === "menu" ? setIcon("close") : setIcon("menu")
  }

  const onShared = () => {
    Share.share({
      title: 'Share',
      message: 'Share with a friends!!!',
      url: 'data:image/jpeg;base64,some-encoded-stuff',
    })
  }


  return(
    <View style={styles.container}>

      <View style={styles.topBar}>

        <TouchableOpacity onPress={onChangeIcon}>
          <Icon name={icon} size={30} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.adjustIcons}>

          <TouchableOpacity>
            <Icon name="notifications" size={30} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconShare} onPress={onShared} >
            <Icon name="share" size={30} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="search" size={30} color="#FFF" />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button}>
          <Icon name="add" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.others}>
        <Icon name="star" size={60} color="#FFF" />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#34495e',
    paddingVertical: 30,
    padding: 8,
  },
  adjustIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 8,
  },
  iconShare: {
    marginHorizontal: 15,
  },
  btnView: {
    //backgroundColor: 'white',
  },
  button:{
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    marginTop: -20,

    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
 
  },
  others: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
})

export default App