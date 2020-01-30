import React, {Componet} from 'react';
import { Container, Header, Content, Left, Button, Icon, Body, Footer, Title, FooterTab, Text, Card, CardItem, Thumbnail } from 'native-base';

export default class Main extends Component{
    render() {
        // Container : 자동 flex:1 스타일이 적용된 View
        <Container style={{backgroundColor:"green"}}>
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
                        <Thumbnail source={{url:{https://i.ytimg.com/vi/wCSz1ApV9-k/maxresdefault.jpg}}></Thumbnail>
                        <Text>Native base</Text>
                    </CardItem>
                    <CardItem button onPress={()=>alert('click')}>
                        <Body>
                            <Text>clic on any carditem</Text>
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
    }
}