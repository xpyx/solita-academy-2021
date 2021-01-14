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
              <Text>pystynen@gmail.com</Text>
              <Text>041 363 4908</Text>
              <Text>Siilitie 18 a 23</Text>
              <Text>00800 Helsinki</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>Check out my site: </Text>
            <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://www.xpyx.fi')}>
              www.xpyx.fi
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
