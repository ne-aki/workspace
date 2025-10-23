import { Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/common/Button'
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store'

// app/settings/index.jsx
// settings 탭을 터치하면 실행되는 페이지
const SettingsHomeScreen = () => {
  const router = useRouter();

  console.log(1);

  const getData1 = () => {
    axios.get()
    .then(res => console.log(res.data))
    .catch();

    console.log(3);

    //React의 비동기 코드는 그림까지 다 그린 후 가장 마지막에 실행
    //위 코드의 실행결과 출력 -> 1 3 res.data
  }

  //await, async 활용 문법
  //비동기 실행 코드 앞에 await 키워드를 붙이면 비동기 코드가 동기로 실행
  //함수 앞에 async를 붙이면 해당 함수가 비동기로 강제 실행
  //선언된 함수 안에 await가 붙은 코드가 있으면 해당 함수는 반드시 async를 붙여서 비동기 함수로 만들어줘야 함
  async function getData2() {
    console.log(1);
    try {
      const res = await axios.get();
      console.log(res.data);
    } catch(e) {
      console.log(e);
    }
    console.log(3);
  }

  //실무에서는 await async를 씀
  const getData3 = async () => {
    console.log(1);
    try {
      const res = await axios.get();
      console .log(res.data);
    } catch(e) {
      console.log(e);
    }
    console.log(3);
  }

  //함수 실행 결과 출력 -> 11 33 1 res.data 3
  const test5 = () => {
    console.log(11);
    getData3();
    console.log(33);
  }

  const logout = async () => {
    //SecureStore에 저장된 로그인 정보를 삭제
    await SecureStore.deleteItemAsync('loginInfo');

    //첫 페이지로 이동
    if (router.canDismiss()) { //쌓은 스택이 존재하면...
      router.dismissAll(); //모든 stack 제거
    }
    router.replace('/');
  }

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView>
        <Button title='로그아웃' onPress={() => logout()} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SettingsHomeScreen