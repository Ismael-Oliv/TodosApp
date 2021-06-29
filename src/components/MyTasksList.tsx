import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";
import { useThemes } from "../hooks/useThemes";

function FlatListHeaderComponent() {
  const { currentTheme } = useThemes();
  return (
    <View>
      <Text style={currentTheme.taskHeader}>Minhas tasks</Text>
    </View>
  );
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { currentTheme } = useThemes();

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done ? currentTheme.taskButtonDone : currentTheme.taskButton
            }
          >
            <View
              testID={`marker-${index}`}
              style={
                item.done
                  ? currentTheme.taskMarkerDone
                  : currentTheme.taskMarker
              }
            />
            <Text
              style={
                item.done ? currentTheme.taskTextDone : currentTheme.taskText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
        height: 700,
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    color: "#3D3D4D",
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3D3D4D",
    marginRight: 10,
  },
  taskText: {
    color: "#3D3D4D",
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: "rgba(25, 61, 223, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#273FAD",
    marginRight: 10,
  },
  taskTextDone: {
    color: "#A09CB1",
    textDecorationLine: "line-through",
  },
});
