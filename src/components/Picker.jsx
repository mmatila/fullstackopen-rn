import { useState } from 'react';
import { View } from "react-native";
import { Menu, Button } from 'react-native-paper';
import { useSort } from '../contexts/OrderContext';
import { theme } from '../theme';

const PickerAnchor = ({ onPress, label }) => {
  return (
    <Button
      onPress={onPress}
      mode="contained"
      color={theme.colors.primary}
      contentStyle={{ padding: 10 }}
    >
      {label}
    </Button>
  );
};

const Picker = () => {
  const { dispatch } = useSort();
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState('Latest repositories');

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<PickerAnchor onPress={openMenu} label={label} />}
      >
        <Menu.Item
          title="Latest repositories"
          onPress={() => {
            setLabel('Latest repositories');
            closeMenu();
            dispatch({ type: 'SORT_BY_LATEST' });
          }}
        />
        <Menu.Item
          title="Highest rated repositories"
          onPress={() => {
            setLabel('Highest rated repositories');
            closeMenu();
            dispatch({ type: 'SORT_BY_RATING_HIGHEST' });
          }}
        />
        <Menu.Item
          title="Lowest rated repositories"
          onPress={() => {
            setLabel('Lowest rated repositories');
            closeMenu();
            dispatch({ type: 'SORT_BY_RATING_LOWEST' });
          }}
        />
      </Menu>
    </View>
  );
}

export default Picker;
