import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SERVER_URL } from '@/constants/appConst'

//이미지 import
//@ -> 최상위 경로에서부터 찾아가겠다(react-native에서만 가능).
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'
import axios from 'axios'
import { Alert } from 'react-native'

const Task = ({ data, changeReloading }) => {
  //삭제 버튼 터치 함수
  const deleteTodo = () => {

    axios.delete(`${SERVER_URL}/todo/${data.todoNum}`)
    .then(res => {
      changeReloading();
    })
    .catch(e => {
      if (e.status === 40 || e.status === 500) {
        alert(`오류코드 : ${e.status}\n오류메시지 : ${e.response.data}`)
      } else {
        alert('알 수 없는 오류가 발생했습니다.')
        console.log(e);
      }
    });
  }

  return (
    <View style={styles.task_back}>
      <Text style={styles.todo}>{data.todoTitle}</Text>
      <Image
        source={edit_img}
        style={styles.img}
      />
      {/* 터치 기능 구현 시 Pressable 컴포넌트를 사용 */}
      <Pressable
        onPress={() => deleteTodo()}
        style={styles.press_img}
      >
        <Image
          source={del_img}
          style={styles.img}
        />
      </Pressable>
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
  press_img : {
    width : '10%'
  },
  img : {
    
  }
})