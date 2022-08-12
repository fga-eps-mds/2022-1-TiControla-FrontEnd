import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler })
{
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={styles.itemText}>{item.task}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        item:{
            padding:16,
            marginTop:16,
            borderWidth:1,
            borderColor:'#bbb',
            borderStyle:'dashed',
            borderRadius:10,
            flexDirection:'row'
        },
        itemText:{
            marginLeft:10
        }
    }
);