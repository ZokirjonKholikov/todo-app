import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
// import {ScrollView} from 'react-native-gesture-handler'
const colors = {
  themecolor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};
const tasks = [
  {
    task: "Morning Walk",
    icon: "hiking",
    theme: "#008b8b",
    stamp: "Today 8pm",
  },
  {
    task: "Meet with HR",
    icon: "account-tie",
    theme: "#37003c",
    stamp: "Today 10pm",
  },
  {
    task: "Shopping",
    icon: "cart",
    theme: "#fed132",
    stamp: "Tomorrow 8pm",
  },
  {
    task: "Time for Gym",
    icon: "weight",
    theme: "#008b8b",
    stamp: "saturday 4pm",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme }}
        />
        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.themecolor }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themecolor} />
      <View style={{ backgroundColor: colors.themecolor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            size={30}
            name="text"
            style={{ color: colors.white }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              size={30}
              name="bell-outline"
              style={{ color: colors.white }}
            />
            <AntDesign size={30} name="user" style={{ color: colors.white }} />
          </View>
        </View>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
            paddingTop: 12,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Hello, \nZokirjon"}
          </Text>
          <View
            style={{
              paddingHorizontal: 18,
              paddingVertical: 18,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 18,
              marginVertical: 16,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              size={30}
              name="magnify"
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                size={30}
                name="microphone"
                style={{ color: colors.white }}
              />
              <MaterialCommunityIcons
                size={30}
                name="tune"
                style={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <MaterialCommunityIcons
          size={35}
          name="plus"
          style={{
            borderRadius: 20,
            marginHorizontal: 8,
            color: colors.themecolor,
            backgroundColor: colors.white,
          }}
        />
      </View>
      <ScrollView style={{ backgroundColor: colors.background }}>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
