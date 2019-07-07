import React, { Component } from 'react';
import { StatusBar, View, TextInput, Picker } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import ItemsCategory from '../Data/itemsCategory';

console.disableYellowBox=true;

export default class AddNote extends Component {  

    constructor() {
        super();
        this.state = {
            category: ''
        }
    }

    updateCategory = (value) => {
      this.setState({ category: value })
    }

    items = () => {
      let item  = []
      for(let i = 0; i<ItemsCategory.length; i++){
        item.push(
          <Picker.item key={i} label={ItemsCategory[i].category} value={ItemsCategory[i].category} />
        )
      }
      return item
    }

    render() {
        return (
          <Container>
            <Header style={{ backgroundColor: '#FFFFFF'}}>
              <Left style={{flex:1}}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrowleft" style={{ fontSize:20, color: "#000000" }}/>
                </Button>
              </Left>
              <Body>
                <Title style={{alignSelf:'center', color:'#000000'}}>ADD NOTE</Title>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => this.props.navigation.goBack()}>
                  <Icon name="checkcircleo" style={{ fontSize:20 }}/>
                </Button>
              </Right>
            </Header>
            <Content>
              <View style={{margin:27, height:50, top:40, borderBottomWidth:1}}>
                <TextInput placeholder="ADD TITLE ..." multiline={true} style={{fontSize:20}}></TextInput>
              </View>
              <View style={{margin:27, height:250}}>
                <TextInput placeholder="ADD DESCRIPTION ..." multiline={true} style={{fontSize:20}}></TextInput>
              </View>
              <View style={{margin:30, maxWidth:'45%', marginTop:30, marginBottom:0}} >
                <Text style={{fontSize:18, fontWeight: 'bold'}}>CATEGORY</Text>
              </View>
              <View style={{margin:30, maxWidth:'45%', marginTop:5}} >
                <Picker
                  style={{elevation:2}}
                  selectedValue={this.state.category}
                  onValueChange = {this.updateCategory}
                >
                  <Picker.Item label="ADD NEW CATEGORY" value="" />
                  {this.items()}
                </Picker>
              </View>
            </Content>
          </Container>
        ); 
    }
}