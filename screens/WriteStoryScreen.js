import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Story Hub</Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={(head) => {
            this.setState({
              title: head,
            });
          }}
          value={this.state.title}
        />
        <TextInput
          style={styles.input}
          placeholder="Author's Name"
          onChangeText={(name) => {
            this.setState({
              author: name,
            });
          }}
          value={this.state.author}
        />
        <TextInput
          style={styles.storyInput}
          placeholder="Write Your Story Here"
          onChangeText={(line) => {
            this.setState({
              story: line,
            });
          }}
          multiline={true}
          value={this.state.story}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  header: {
    backgroundColor: 'navy',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: -25,
    fontFamily: 'snap itc',
    color: 'violet',
  },
  input: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: 'white',
  },
  storyInput: {
    width: '80%',
    marginTop: 30,
    alignSelf: 'center',
    height: 150,
    textAlign: 'center',
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: 'lightgreen',
    fontFamily: 'Comic Sans MS',
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 50,
    backgroundColor: 'lime',
    width: '60%',
    borderRadius: 50,
    textAlign: 'center',
    height: 40,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'navy',
  },
});
