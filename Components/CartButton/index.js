import React, { Component } from "react";
import { View } from "react-native";
import { Icon, Right, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
            fontSize: 10,
            height: 15,
            alignSelf: "center",
            paddingRight: 5,
            paddingLeft: 5
          }}
        >
          {this.props.cartItems.length}
        </Text>
        <Right>
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="cart"
            style={{ right: 10, bottom: 10, color: "white" }}
          />
        </Right>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
