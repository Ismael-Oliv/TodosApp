import { StatusBar } from "react-native";

export const headerContainer = {
  paddingTop: StatusBar.currentHeight || 0,
  paddingBottom: 44,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
export const headerTextContainer = {
  fontSize: 24,
  fontFamily: "Poppins-Regular",
};
export const taskHeaderContainer = {
  fontSize: 24,
  fontFamily: "Poppins-SemiBold",
};
export const taskButton = {
  flex: 1,
  paddingHorizontal: 10,
  paddingVertical: 12,
  marginBottom: 4,
  borderRadius: 4,
  flexDirection: "row",
  alignItems: "center",
};
export const taskMarker = {
  height: 16,
  width: 16,
  borderRadius: 8,
  borderWidth: 1,
  marginRight: 10,
};
export const taskText = {};
export const taskButtonDone = {
  flex: 1,
  paddingHorizontal: 10,
  paddingVertical: 12,
  marginBottom: 4,
  borderRadius: 4,
  flexDirection: "row",
  alignItems: "center",
};
export const taskMarkerDone = {
  height: 16,
  width: 16,
  borderRadius: 8,
  marginRight: 10,
};
export const taskTextDone = {
  textDecorationLine: "line-through",
};
export const inputContainer = {
  borderRadius: 5,
  marginTop: -25,
  marginHorizontal: 40,
  height: 50,
  flexDirection: "row",
  alignItems: "center",
};
export const input = {
  flex: 1,
  paddingLeft: 12,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
};
export const inputIOSShadow = {
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
};
export const inputAndroidShadow = {
  elevation: 5,
};
export const inputAddButton = {
  height: 50,
  paddingHorizontal: 16,
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
};
