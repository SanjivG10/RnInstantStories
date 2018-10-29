import React from 'react'
import {Text, View, TouchableOpacity, Dimensions} from  'react-native'
import {Screen, Image, Button, ListView, Card} from '@shoutem/ui'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles= {
  cardStyle: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height/2
  },
  profileDetailImageStyle: {
    borderColor:'rgba(0,0,0,0.2)',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:100,
    position: 'absolute',
    top: 10,
    left: 20
  },
  profileDetailUsernameStyle: {
    position: 'absolute',
    top: 20,
    left: 150,
    fontFamily: 'monospace',
    size: 20
  },
  profileDetailFollowStyle: {
    
  }
}

const ImageID = "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/42247263_499791153765567_8151577168774692864_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=3c57b985c3b715ffdeaafbd0c49fd5df&oe=5C3FD2A3"

class UserInfoView extends React.Component
{

  constructor(props)
  {
    super(props);
  }


  render() {
    return(
      <Card userid= {this.props.id}  style= {styles.cardStyle}  >
        <Image
          style= {styles.profileDetailImageStyle}
          source={{ uri: ImageID }}
        />
        <Text style= {styles.profileDetailUsernameStyle}>
          @abhayRaut
        </Text>

        <Text style= {styles.profileDetailFollowStyle}>
          @abhayRaut
        </Text>

      </Card>

    )
  }
}

export default UserInfoView
