import React from 'react'
import {Text, View, TouchableOpacity} from  'react-native'
import {Screen, Image, Button, ListView} from '@shoutem/ui'


import UserInfoView from './UserInfoView'



const styles= {
  profileImageStyle:  {
    borderWidth:1,
         borderColor:'rgba(0,0,0,0.2)',
         alignItems:'center',
         justifyContent:'center',
         width:64,
         height:64,
         backgroundColor:'#fff',
         borderRadius:100,
         marginLeft: 5,
         marginRight: 10,
         marginBottom: 10,
         marginTop: 10
  }
}


class ListViewDay extends React.Component
{

  constructor(props)
  {
    super(props);
    this.renderRow= this.renderRow.bind(this)
    this.state= {
      idClicked: null,
      data: {
        userID1: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID7: {
          username: 'abhayRaut',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/42247263_499791153765567_8151577168774692864_n.jpg?_nc_cat=103&_nc_ht=scontent.fktm3-1.fna&oh=3c57b985c3b715ffdeaafbd0c49fd5df&oe=5C3FD2A3',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/31281475_403391690072181_5237562577084481536_o.jpg?_nc_cat=108&_nc_ht=scontent.fktm3-1.fna&oh=0fc03bbabf5deda663a5c0a646946a74&oe=5C8586AD',
          date: '2018/10/20',
          views: ['Messi', 'Ronaldo', 'Rooney', 'IamZlatan']
        },
        userID8: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID2: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID3: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID4: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID5: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        },
        userID6: {
          username: 'sanjivg10',
          profileImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/27540886_2018752978403801_5231048398945606102_n.jpg?_nc_cat=106&_nc_ht=scontent.fktm3-1.fna&oh=469fcc67ef2d88057f8bf7610fb081a4&oe=5C87567F',
          postedImage: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/19399189_1910375805908186_2288361146269777196_n.jpg?_nc_cat=111&_nc_ht=scontent.fktm3-1.fna&oh=eecf2512cc806e6948adedccfbfae53f&oe=5C7B5AC5',
          date: '2018/10/10',
          views: ['justinKarki', 'diwashRana', 'bigyanG', 'pritamSuwal']
        }

      }
    }

  }



  renderRow(data)
  {
    return(
      <TouchableOpacity>
        <Image style= {styles.profileImageStyle} styleName="small" source= {{  uri:data.profileImage }} />
      </TouchableOpacity>
    )
  }



  render() {
    return(

      <View >
        <ListView  horizontal data= {this.state.data} renderRow= {this.renderRow} >

        </ListView>

        {! this.state.idClicked ?
          <UserInfoView  id = {this.state.idClicked} /> :
          null
        }
      </View>

    )
  }
}

export default ListViewDay
