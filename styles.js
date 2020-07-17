import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  headerTop: {
    marginTop: 10,
    fontSize: 14,
    alignItems: "center"
  },
  headerContent: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  headerText: {
    margin: 10,
    fontSize: 16
  },
  searchBox: {
    width: '60%',
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 1,
    position: "absolute",
    marginTop: 250
  },
  searchInput: {
    width: '86%',
    height: 35,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3BAC45',
    padding: 15,
    margin: 10,
    borderRadius: 5
  },
  menuList: {
    flex: 1,
    width: '95%',
    marginLeft: 10,
    padding: 10
  },
  mainMenu: { flexDirection: 'row', padding: 10, alignItems: "center" },
  subMenu: { flexDirection: "row", alignItems: "center", margin: 5 }
});
