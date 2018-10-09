import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { HomeTabNavigation } from './HomeTabNavigation';
import CameraScreen from 'src/screens/CameraScreen';
import PeopleScreen from 'src/screens/PeopleScreen';
import GamesScreen from 'src/screens/GamesScreen';
import PopularScreen from 'src/screens/PopularScreen';

import TabIcon from 'src/components/TabIcon';
import AppStyles from 'src/config/styles';

const HomeTabIcon = ({ tintColor }) => (
    <TabIcon name="home" tintColor={tintColor} />
);
const PeopleTabIcon = ({ tintColor }) => (
    <TabIcon name="supervisor-account" tintColor={tintColor} />
);
const CameraTabIcon = ({ tintColor }) => (
    <TabIcon name="photo-camera" tintColor={tintColor} type="rounded" />
);
const GamesTabIcon = ({ tintColor }) => (
    <TabIcon name="game-controller" tintColor={tintColor} type="entypo" />
);
const PopularTabIcon = ({ tintColor }) => (
    <TabIcon name="toys" tintColor={tintColor} />
);

export const BottomTabNavigation = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeTabNavigation,
            navigationOptions: {
                header: null,
                tabBarIcon: HomeTabIcon
            }
        },

        PeopleScreen: {
            screen: PeopleScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: PeopleTabIcon
            }
        },
        CameraTabScreen: {
            screen: CameraScreen,
            navigationOptions: ({ navigation }) => ({
                header: null,
                tabBarIcon: CameraTabIcon,
                tabBarOnPress: ({ navigation }) => {
                    navigation.navigate('CameraScreen');
                }
            })
        },
        GamesScreen: {
            screen: GamesScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: GamesTabIcon
            }
        },
        PopularScreen: {
            screen: PopularScreen,
            navigationOptions: {
                header: null,
                tabBarIcon: PopularTabIcon
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#0084ff',
            inactiveTintColor: AppStyles.colors.inactiveGreyColor,
            pressColor: '#7f8c8d'
        }
    }
);
