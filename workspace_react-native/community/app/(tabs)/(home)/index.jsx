import { FlatList, Keyboard, Pressable, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { colors } from '../../../constants/colorConstant'
import FeedItem from '../../../components/home/FeedItem'
import { dummyData } from '../../../constants/dummy'

//프로젝트 app 폴더 안의 index.jsx 파일을 최초로 실행

// app/(tabs)/(home)/index.jsx
// sns 목록 페이지
const HomeScreen = () => {
  const router = useRouter();

  //게새글 목록
  const feedList = dummyData;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={styles.container}
      >

        <Pressable onPress={() => router.push('/profile')}>

        </Pressable>

        <FlatList
          //반복할 데이터
          data={feedList}
          //데이터 하나하나 실행할 코드, 매개변수는 데이터 각각을 의미
          renderItem={({item}) => <FeedItem item={item} />}
          //반복돌릴 아이템의 key값, 매개변수는 데이터 각각을 의미
          keyExtractor={item => item.id}
          //리스트 영역의 디자인
          contentContainerStyle={styles.listContainer}
        />
        
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor : colors.WHITE,
    flex : 1 //높이 값을 폰의 세로 크기에 맞춤
  }, listContainer : {
    gap : 10,
    backgroundColor : colors.GRAY_200,
    paddingVertical : 8,
    paddingHorizontal : 6
  }
})