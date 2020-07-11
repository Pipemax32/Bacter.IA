import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#097154",

    marginVertical: 4,
  },
  paragraph: {
    marginVertical: 4,
    lineHeight: 20,
    color: "#097154",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5E5E5",
    //alignItems: "center",
    //justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5E5E5",
    //alignItems: "center",
    //justifyContent: "center",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  modalClose: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  header: {
    backgroundColor: "#3AB795",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
