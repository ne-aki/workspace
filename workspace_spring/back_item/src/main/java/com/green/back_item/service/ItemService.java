package com.green.back_item.service;

import com.green.back_item.dto.ItemDTO;
import com.green.back_item.mapper.ItemMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
  private ItemMapper itemMapper;
  public ItemService(ItemMapper itemMapper) {
    this.itemMapper = itemMapper;
  }

  public List<ItemDTO> getItemList() {
    return itemMapper.getItemList();
  }

  public int regItem(ItemDTO itemDTO) {
    return itemMapper.regItem(itemDTO);
  }

  public ItemDTO getItem(int itemNum) {
    return itemMapper.getItem(itemNum);
  }

  public int deleteItem(int itemNum) {
    return itemMapper.deleteItem(itemNum);
  }
}
