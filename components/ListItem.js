import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ListItem = ({item,deleteItem}) => {
  return (
    <View style={styles.listItem}> 
     <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{item.text}</Text>
      {/* on press events should be in touchable things*/}
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Text>❌</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
 listItem: {
  padding:15,
  backgroundColor: '#f8f8f8',
  borderBottomWidth: 1,
  borderColor: '#eee',
 },
 listItemView: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
 },
 listItemText: {
  fontSize: 18
 }
});

export default ListItem;