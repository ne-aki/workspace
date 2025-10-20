import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../components/common/Button'
import { useRouter } from 'expo-router'
import Input from '../../../components/common/Input'

//프로젝트 app 폴더 안의 index.jsx 파일을 최초로 실행

// app/(tabs)/(home)/index.jsx
// sns 목록 페이지
const HomeScreen = () => {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={styles.container}
      >
        <Text>sns 목록 페이지</Text>
        <Button
          title='sns 상세페이지로 이동'
          size='normal'
          onPress={() => router.push('/detail')}
        />
        <Input
          label='아이디'
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'white',
    flex : 1 //높이 값을 폰의 세로 크기에 맞춤
  }
})