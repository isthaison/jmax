import { ThemeContext } from "../context/theme";
import { TouchableOpacity } from "react-native";

class Buton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <TouchableOpacity>
        <button {...props} style={{ backgroundColor: theme.background }} />
      </TouchableOpacity>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
