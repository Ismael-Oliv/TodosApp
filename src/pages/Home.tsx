import React, { useState } from "react";
import { View } from "react-native";
import { useThemes } from "../hooks/useThemes";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { currentTheme } = useThemes();

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    if (!task) return;
    task.done = !task.done;

    setTasks((prevTasks) => [
      ...prevTasks.filter((task) => task.id !== id),
      task,
    ]);
  }

  function handleRemoveTask(id: number) {
    const ToDos = [...tasks];

    const newToDos = ToDos.filter((todo) => todo.id !== id);

    setTasks(newToDos);
  }

  return (
    <View style={currentTheme.mode}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}
