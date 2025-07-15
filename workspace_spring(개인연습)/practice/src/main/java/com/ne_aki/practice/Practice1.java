package com.ne_aki.practice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Practice1 {
  @GetMapping("/t1")
  public String test1() {
    return "メソッド実行";
  }

  @GetMapping("/me")
  public LeeGeunHyeong practice2() {
    LeeGeunHyeong leeGeunHyeong = new LeeGeunHyeong("lee", 25, "piano");
    return leeGeunHyeong;
  }

  @GetMapping("/familyName")
  public String[] practice3() {
    String[] arr = {"김", "이", "박"};
    return arr;
  }

  @GetMapping("/num1")
  public int practice4() {
    return 1;
  }

  @GetMapping("/doodle")
  public String doole() {
    return "こんにちは、私の名前は李根炯と申します。蔚山から来ました。最近元気ですか？" + "私は早く就職したいです。";
  }
}
