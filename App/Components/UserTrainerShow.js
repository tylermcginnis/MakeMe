var React = require('react-native');

var {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBarIOS,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  tester: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexWrap: 'wrap'
  },
  coverImage: {
    width: 375,
    height: 200,
    justifyContent: 'flex-end' 
  },
  profileImage: {
    width: 95,
    height: 95,
    alignSelf: 'flex-start',
    marginLeft: 13,
    position: 'absolute',
    bottom: 13
  },
  trainerName: {
    fontFamily: 'Raleway',
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  location: {
    fontFamily: 'Raleway',
    color: '#b3b3b3',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 20,
    marginTop: 5,
    letterSpacing: 1
  }
});

var TRAINER_MOCK_DATABASE = [
                            {
                              id:"",
                              name:"Ilaria Montague",
                              numFavorites:"",
                              numComments: "",    
                              bio:"",
                              profilePic:"",
                              coverPic:"",
                              routines: ["routineId1", "routineId2"],
                              activeSince: "",
                              contact:"",
                              location:"",
                              specialties: ["martial arts", "boxing"]
                            },
                            {

                            }
                            ];

 var ROUTINE_MOCK_DATABASE = [{},{}];

  var profileImages = {
    "Ilaria Montague": require('image!ilaria_profile'),
    "Valentina Pherson": require('image!ilaria_profile'),
  };

    var coverImages = {
    "Ilaria Montague": require('image!ilaria_cover'),
    "Valentina Pherson": require('image!ilaria_cover'),
  };

var UserTrainerShow = React.createClass({
	componentWillMount() {
		StatusBarIOS.setStyle(1);
	},


	render(){

    var profile = TRAINER_MOCK_DATABASE[0];

    var profileImage = profileImages[profile.name];
    var coverImage = coverImages[profile.name];

		return (
			<View style={styles.tester}>
        <Image source={coverImage} style={styles.coverImage}>
          <Image source={profileImage} style={styles.profileImage}/>
          <Text style={styles.trainerName}>Ilaria Montague</Text>
          <Text style={styles.location}>New York, NY</Text>
        </Image>

        <Text style={styles.text}>I AM THE TRAINER SHOW PAGE</Text>
				<Text style={styles.text}>{this.props.trainerName}</Text>
			</View>
		)
	}
});

module.exports = UserTrainerShow