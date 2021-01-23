import React from 'react';
import {
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import {StyleSheet, Linking} from 'react-native';

const Profile = () => {

  return (
    <Container style={styles.container}>
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail large source={{
                uri: 'https://avatars0.githubusercontent.com/u/35662792',
              }} />
            </Left>
            <Right>
              <Text>Ville Pystynen</Text>
              <Text>Siilitie 18 a 23</Text>
              <Text>00800 Helsinki</Text>
              <Text>041 363 4908</Text>
              <Text>pystynen@gmail.com</Text>


            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>
              A few lines about me:
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              I recently came up with the conclusion that I can code. For five years I have studied rigorously and finally
              can set aside my impostor syndrome. I have developed an appetite for learning new tricks everyday. At the moment
              I know a bit about everything, but haven't had the chance to deepen my skills. I'm still looking for the field I
              want to concentrate in.
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              I'm passionate about security and privacy. I'd like to be able to develop services that help people and help Earth
              to stay habitable. If it pays well, I'm not gonna be unhappy about it.
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>My professional site and blog: </Text>
            <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://www.xpyx.fi')}>
              www.xpyx.fi
              </Text>
          </CardItem>
          <CardItem>
            <Text>My Github: </Text>
            <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://www.github.com/xpyx')}>
              www.github.com/xpyx
              </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postCardItem: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    paddingBottom: 5,
  },

});

export default Profile;
