import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Task from '../components/Task'
import axios from 'axios'

const HomeScreen = () => {
  //조회한 할 일 목록 데이터를 저장할 state 변수
  const [todoList, setTodoList] = useState([]);

  //입력한 제목 데이터를 저장할 state 변수
  const [todoTitle, setTodoTitle] = useState('');

  //목록 조회 재실행을 위한 의존성 배열 데이터
  const [reloading, setReloading] = useState(0);

  //마운트되면 목록 조회
  useEffect(() => {
    axios.get('http://192.168.30.77:8080/todo')
    .then(res => {
      console.log(res.data);
      setTodoList(res.data);
    })
    .catch(e => console.log(e))
  }, [reloading]);

  //할 일 등록
  const addTodo = () => {
    axios.post('http://192.168.30.77:8080/todo', {todoTitle})
    .then(res => {
      alert('등록성공');
      setReloading(reloading + 1);
      //목록 재조회, 입력한 글자 초기화
      setTodoTitle('');
    })
    .catch(e => {
      //오류 상태코드
      const errorCode = e.status;
      if (errorCode === 400 || errorCode === 500) {
        alert(`오류코드 : ${errorCode}\n오류 메시지 : ${e.response.data}`)
      } else {
        console.log(e);
      }
    });
  }

  return (
    //빈 화면 터치 시 키보드 숨김 기능을 구현할 때 사용
    //onPress props에 키보드 숨김 기능을 구현
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>To Do List</Text>
        </View>
        <View style={styles.input_view}>
          <TextInput
            style={styles.input}
            placeholder='+ Add a Task'
            onChangeText={text => setTodoTitle(text)}
            //폰 키보드에서 확인, ok, confirm 등의 키 터치시 발생
            onSubmitEditing={() => {addTodo()}}
            value={todoTitle}
            //인풋 태그가 focus를 잃었을 때 실행
            onBlur={() => setTodoTitle('')}
          />
        </View>
        <View style={styles.list_view}>
          <FlatList
            //전체 데이터
            data={todoList}
            //데이터로 그림 그리기, 매개변수 : 데이터 하나하나
            renderItem={({item}) => <Task data={item} />}
            //map 의 key={i} 내용과 동일
            keyExtractor={item => item.todoNum}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    flex : 1, //최상위 태그의 높이를 폰 화면에 꽉 차게 변경
    padding : 20,
    // paddingHorizontal : 10, 좌우 패딩
    // paddingVertical : 10 상하 패딩
  },
  input : {
    borderWidth : 1,
    borderColor : '#cccccc',
    borderStyle : 'solid'
  },
  title : {
    fontSize : 36,
    fontWeight : 'bold'
  },
  input_view : {
    marginVertical : 20
  },
  list_view : {
    backgroundColor : '#cccccc',
    padding : 10,
    gap : 10,
    height : 700
  }
})