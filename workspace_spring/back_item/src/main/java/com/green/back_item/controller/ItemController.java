package com.green.back_item.controller;

import com.green.back_item.dto.ItemDTO;
import com.green.back_item.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {
  private ItemService itemService;
  public ItemController(ItemService itemService) {
    this.itemService = itemService;
  }

  @GetMapping("")
  public List<ItemDTO> getItemList() {
    return itemService.getItemList();
  }

  @PostMapping("")
  public int regItem(
          @RequestBody ItemDTO itemDTO
  ) {
    System.out.println(itemDTO);
    return itemService.regItem(itemDTO);
  }

  @GetMapping("/{itemNum}")
  public ItemDTO getItem(
          @PathVariable("itemNum") int itemNum
  ) {
    return itemService.getItem(itemNum);
  }

  @DeleteMapping("/{itemNum}")
  public int deleteItem(
          @PathVariable("itemNum") int itemNum
  ) {
    return itemService.deleteItem(itemNum);
  }

  @PutMapping("/{itemNum}")
  public int changeItem(
          @RequestBody ItemDTO itemDTO,
          @PathVariable("itemNum") int itemNum
  ) {
    itemDTO.setItemNum(itemNum);
    return itemService.changeItem(itemDTO);
  }
}
