import {CommonActions} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef();

export const navigate = (routename, params) =>
  navigationRef.current.navigate(routename, params);

export const goBack = () => navigationRef.current.goBack();

export const resetStackNavigation = (routename, params) => {
  return navigationRef.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: routename,
          params: {params},
        },
      ],
    }),
  );
};
