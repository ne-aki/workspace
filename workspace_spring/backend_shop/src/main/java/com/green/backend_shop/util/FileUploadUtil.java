package com.green.backend_shop.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

//파일 업로드 기능을 제공하는 클래스
public class FileUploadUtil {
  //단일 파일 업로드 기능
  public static void fileUpload (MultipartFile img) {
    // 1) 파일 업로드 경로 지정
    //자바에서 특수문자를 문자 취급 하려면 "\+특수기호"로 넣어야 함
    String uploadPath = "D:\\01-STUDY\\dev\\workspace\\workspace_spring\\backend_shop\\src\\main\\resources\\upload\\";
    // 2) 파일명 중복 방지를 위해 업로드 파일명을 세팅
    // ex> 원본 파일명 : java.jpg -> sdlfajsdlfjaw.jpg
    // ex> 원본 파일명 : java.txt -> sdfwgdfhdhtj.txt
    String attachedFileName = UUID.randomUUID().toString();

//    String testName = "abc.def.jpg";
//    testName.substring(testName.lastIndexOf(".")); //.jpg
//    testName.indexOf("."); //특정 문자의 가장 첫번째에 있는 index를 파악
//    testName.lastIndexOf("."); //특정 문자의 가장 마지막에 있는 index를 파악

    //원본 파일의 확장자 추출
    // "abc.jpg -> 3
    int index = img.getOriginalFilename().lastIndexOf(".");
    String extension = img.getOriginalFilename().substring(index);

    //완성된 업로드할 파일명
    attachedFileName = attachedFileName + extension;

    // 3) 파일 업로드
    //java.io.File
    //파일이 생성될 경로와 파일명을 세팅(ex> D:\\study\\...\\upload\\파일명)
    File f = new File(uploadPath + attachedFileName);

    //세팅된 경로와 파일명을 실제 파일로 변환
    try {
      img.transferTo(f);
    } catch (Exception e) {
      System.out.println(e);
    }
  }
  //파일 다중 업로드 기능
  public static void multipleFileUpload () {}
}
