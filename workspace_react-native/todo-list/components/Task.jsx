import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '@/constants/appConst'

//이미지 import
//@ -> 최상위 경로에서부터 찾아가겠다(react-native에서만 가능).
import del_img from '@/assets/icon/delete.png'
import edit_img from '@/assets/icon/edit.png'
import axios from 'axios'
import { Alert } from 'react-native'

/*
앱에서 alert 또는 confirm을 사용하는 방법
Alert.alert('제목', '내용', 버튼정보)
ex>
Alert.alert(
  'Confirm',
  '정말 삭제할까요?',
  [
    {
      text : '확인',
      style : 'default',
      onPress : () => {}
    }, {}
  ]
);
*/

//props로 전달되는 데이터를 state 변수의 초기값으로 바로 세팅하는 것은 지양
//props로 넘어오는 데이터가 바뀌지 않으면 props로 넘어온 데이터를 초기값을 줄 수 있음.
const Task = ({ data, changeReloading }) => {
  //수정 상태를 저장할 state 변수
  const [isUpdating, setIsUpdating] = useState(false);

  //수정 내용을 저장할 state 변수
  const [updateTitle, setUpdateTitle] = useState('');

  //updateTitle 변수의 값을 props로 받아온 데이터로 세팅
  //의존성 배열에는 data.todoTitle 값이 바뀌는 경우로 해서 넣는다.
  useEffect(() => {
    setUpdateTitle(data.todoTitle);
  }, [data.todoTitle]);

  //삭제 버튼 터치 함수
  const deleteTodo = () => {
    Alert.alert(
      '확인',
      '정말 삭제할까요?',
      [
        {
          text : '삭제',
          style : 'default',
          onPress : () => confrimDelete()
        },
        {
          text : '취소',
          style : 'cancel'
        }
      ]
    );

    
  }

  //삭제 함수
  const confrimDelete = () => {
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

  //할 일 수정 함수
  const updateTodo = () => {
    axios.put(
      `${SERVER_URL}/todo/${data.todoNum}`,
      {todoTitle : updateTitle}
    )
    .then(res => changeReloading())
    .catch(e => console.log(e))
  }

  return (
    <View style={styles.task_back}>
      {
        isUpdating
        ?
        <TextInput
          style={styles.input}
          value={updateTitle}
          onBlur={() => setIsUpdating(false)}
          autoFocus={true} //인풋 태그에 자동 포커스
          onChangeText={text => setUpdateTitle(text)}
          onSubmitEditing={() => updateTodo()}
        />
        :
        <Text style={styles.todo}>{data.todoTitle}</Text>
      }
      
      <Pressable onPress={() => setIsUpdating(true)}>
        <Image
          source={edit_img}
          style={styles.img}
        />
      </Pressable>
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
    
  },
  input : {
    width : '80%',
    borderWidth : 1,
    borderColor : 'black',
    borderStyle : 'solid',
    backgroundColor : 'white'
  }
})