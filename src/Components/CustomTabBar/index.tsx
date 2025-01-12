import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  let activeItem = 0;
  let deepActiveIndex = 0;

  const navState = navigation.getState();

  if (navState) {
    activeItem = navState.index;
    if (navState.routes[activeItem] && navState.routes[activeItem].state) {
      deepActiveIndex = navState.routes[activeItem].state.index;
    }
  }

  return (
    <View style={[styles.container, {paddingBottom: bottom - 10}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}>
            {isFocused && (
              <View style={styles.row}>
                <View
                  style={styles.bar}
                />
              </View>
            )}
            {options.tabBarIcon({focused: isFocused})}
            <Text
              style={{
                color: isFocused ? '#1C274C' : '#9c9c9c',
                fontSize: 12,
                fontFamily: 'Jersey15-Regular',
                // marginTop: 3,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    backgroundColor:'white'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
    top: -4,
    // gap: 4,
  },
  bar: {
    flex: 1,
    height: 2,
    borderRadius: 3,
    backgroundColor: '#1C274C',
  },
});
