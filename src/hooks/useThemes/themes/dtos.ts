export type ITypes = {
    headers: {
      backgroundColor: string,
      color: string,
    },
    input: {
      backgroundColor:string,
    },
    addButton: {
      backgroundColor: string,
    },
    taskList: {
      header: {
        color: string,
      },
      taskMarker: {
        ...taskMarker,
        borderColor: "#3D3D4D",
      },
      taskText: {
        color: "#3D3D4D",
      },
      taskButtonDone: {
        ...taskButtonDone,
        backgroundColor: "rgba(25, 61, 223, 0.1)",
      },
      taskMarkerDone: {
        ...taskMarkerDone,
        backgroundColor: "#273FAD",
      },
}