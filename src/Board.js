import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Board = ({ board, onPress }) => {
    return (
        <View style={styles.board}>
            {board.map((row, ri) => (
                <View key={ri} style={styles.row}>
                    {row.map((cell, ci) => (
                        <TouchableOpacity
                            key={ci}
                            style={styles.cell}
                            onPress={() => onPress(ri, ci)}
                        >
                            <Text style={styles.cellText}>
                                {cell}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    )
}

export default Board

const styles = StyleSheet.create({
    board: { 
        marginTop: 20 
    },
    row: { 
        flexDirection: 'row' 
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cellText: { 
        fontSize: 36 
    }
})