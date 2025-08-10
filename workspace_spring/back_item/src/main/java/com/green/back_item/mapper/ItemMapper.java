package com.green.back_item.mapper;

import com.green.back_item.dto.ItemDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {
  List<ItemDTO> getItemList();
  int regItem(ItemDTO itemDTO);
  ItemDTO getItem(int itemNum);
  int deleteItem(int itemNum);
  int changeItem(ItemDTO itemDTO);
}
