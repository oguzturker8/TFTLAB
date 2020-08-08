import { StyleSheet } from "react-native";

export const pageTheme = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  champBioWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  fdWrapper: {
    flexDirection: "row",
  },
  fdWrapperAIC: {
    flexDirection: "row",
    alignItems: "center",
  },
  traitsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  champAvatarWrapper: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    zIndex: 5,
  },
  avatarBig: {
    height: 80,
    width: 80,
  },
  centeredFlex: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  avatarMed: {
    height: 52,
    width: 52,
  },
  section: {
    marginVertical: 25,
  },
  title: {
    fontSize: 30,
    fontFamily: "RobotoBold",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 2,
    marginTop: 25,
  },
  header: {
    fontSize: 28,
    fontFamily: "RobotoMedium",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginBottom: 15,
  },
  textBig: {
    fontSize: 26,
    color: "#E8ECEE",
    fontFamily: "RobotoRegular",
    letterSpacing: 1,
    textTransform: "capitalize",
  },
  smallText: {
    fontSize: 14,
    color: "#D0D9DC",
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  textDetail: {
    fontSize: 16,
    color: "#88a0a7",
    fontFamily: "RobotoMedium",
  },
  regularText: {
    fontSize: 20,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
    marginTop: 5,
  },
  darkBGMedium: {
    backgroundColor: "#1B475F",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  darkBGSmall: {
    backgroundColor: "#1B475F",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  pointer: {
    marginRight: 5,
    fontSize: 10,
    fontFamily: "RobotoRegular",
    paddingTop: 7,
    color: "#f48024",
    marginRight: 10,
  },
  flexWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  avatarSmall: {
    width: 30,
    height: 30,
  },
  avatarVerySmall: {
    width: 22,
    height: 22,
  },
  fdCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});