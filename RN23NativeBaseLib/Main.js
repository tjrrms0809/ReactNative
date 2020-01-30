import React, {Component} from 'react';
import {Container, Header, Content, Footer,Left, Button, Icon, Body, Title, Right, FooterTab,Text, Card, CardItem, Thumbnail} from 'native-base';
import {Image} from 'react-native';

export default class Main extends Component{
    render(){
        return (
            // Container : 자동 flex:1 스타일이 적용된 View
            <Container>
                {/* 크게 3개영역으로 화면 구성 */}
                <Header>
                    <Left>
                        <Button>
                            <Icon name="menu"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Native Base</Title>
                    </Body>
                    <Right>                        
                    </Right>
                </Header>

                <Content style={{padding:16}}>
                    <Button warning><Text>button</Text></Button>
                    <Button info bordered><Text>button</Text></Button>
                    <Button dark rounded><Text>button</Text></Button>
                    <Button block danger><Text>button</Text></Button>
                    <Button>
                        <Icon name="home"></Icon>
                        <Text>HOME</Text>
                    </Button>

                    <Card>
                        <CardItem>
                            <Text>Navtive base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>alert('clicked')}>
                            <Body>
                                <Text>click on any carditem</Text>
                            </Body>                            
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Thumbnail source={{uri: 'https://i.ytimg.com/vi/wCSz1ApV9-k/maxresdefault.jpg'}}></Thumbnail>
                            <Text>Navtive base</Text>
                        </CardItem>
                        <CardItem button onPress={()=>alert('clicked')}>
                            <Body>
                                <Text>click on any carditem</Text>
                            </Body>                            
                        </CardItem>
                    </Card>


                </Content>

                <Footer>
                    {/* Bottom 탭 */}
                    <FooterTab>
                        <Button>
                            <Text>TAB1</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
                        <Button>
                            <Text>TAB2</Text>
                        </Button>
                    </FooterTab>

                </Footer>
                
            </Container>
        );
    }
}