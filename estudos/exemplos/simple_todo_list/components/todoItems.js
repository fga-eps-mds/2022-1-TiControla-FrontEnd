import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item})
{
    return(
        <TouchableOpacity>
            <Text style={styles.item}>{item.task}</Text>
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
        }
    }
);