import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//이미지 import
//@ -> 최상위 경로에서부터 찾아가겠다(react-native에서만 가능).
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'

const Task = ({data}) => {
  return (
    <View style={styles.task_back}>
      <Text style={styles.todo}>{data.todoTitle}</Text>
      <Image
        source={edit_img}
        style={styles.img}
      />
      <Image
        source={del_img}
        style={styles.img}
      />
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  task_back : {
    backgroundColor : '#eeeeee',
    padding : 14,
    flexDirection : 'row',
    gap : 4
  },
  todo : {
    fontSize : 20,
    width : '80%'
  },
  img : {
    width : '10%',
    height : 30
  }
})