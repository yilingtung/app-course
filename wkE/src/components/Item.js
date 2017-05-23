import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  TouchableWithoutFeedback,
  UIManager,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';


// Make a component
class Item extends Component {
  constructor(props){
    super(props);
    const position = new Animated.ValueXY();
    this.state = {
      switchOpen: false,
      dragDelete: false,
      position,
      deleteBtn_dx: 84,
      dragLeftMax_dx: 100-Dimensions.get('window').width,
      dragRightMax_dx: 20,
      width: 0,
      Dimensions_width: Dimensions.get('window').width,
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      //onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: (this.onShouldDrag),
      onPanResponderGrant: this.dragStart,
      onPanResponderMove: this.onDrag,
      onPanResponderRelease: this.onReleaseItem,
      onPanResponderTerminate: this.onReleaseItem,
    });
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  dragStart = (event, gesture) => {
    console.log('drag start!');
  }

  onDrag = (event, gesture) => {
    const { deleteBtn_dx, dragRightMax_dx } = this.state;
    if(this.state.switchOpen==false){
      console.log('drag: ' + gesture.dx);
      if(gesture.dx>dragRightMax_dx){
        this.state.position.setValue({ x: dragRightMax_dx });
      }else{
        this.state.position.setValue({ x: gesture.dx });
        this.setWidth(event, gesture);
      }
    }else{
      const _gesture = gesture.dx-deleteBtn_dx;
      console.log('_drag: ' + _gesture);
      this.state.position.setValue({ x: _gesture });
      this.setWidth(event, gesture);
    }
  }

  setWidth = (event, gesture) => {
    const { deleteBtn_dx, dragLeftMax_dx } = this.state;
    LayoutAnimation.spring();
    if(this.state.switchOpen==false){
      if(gesture.dx > 0){
        this.setState({
            width: 0,
            dragDelete: false,
        });
      }else if (gesture.dx < dragLeftMax_dx) {
        this.setState({
            width: Math.abs(gesture.dx),
            dragDelete: true,
        });
      }else{
        this.setState({
            width: Math.abs(gesture.dx),
            dragDelete: false,
        });
      }
    }else{
      const _gesture = gesture.dx-deleteBtn_dx;
      if(_gesture > 0){
        this.setState({
            width: 0,
            dragDelete: false,
        });
      }else if (_gesture < dragLeftMax_dx) {
        this.setState({
            width: Math.abs(_gesture),
            dragDelete: true,
        });
      }else{
        this.setState({
            width: Math.abs(_gesture),
            dragDelete: false,
        });
      }
    }
  }

  onShouldDrag = (event, gesture) => {
    const { dx } = gesture;
    return Math.abs(dx) > 2;
  }

  onReleaseItem = (event, gesture) => {
    const { deleteBtn_dx, dragLeftMax_dx } = this.state;
    LayoutAnimation.spring();
    if(this.state.switchOpen==false){
      if(gesture.dx>0){
        let config = {
          toValue: { x: 0, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: 0,
          switchOpen: false,
          dragDelete: false,
        });
      }else if (gesture.dx<dragLeftMax_dx) {
        let config = {
          toValue: { x: - this.state.Dimensions_width, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: this.state.Dimensions_width,
          switchOpen: true,
        });
        this.props.onDelete(this.props.uid);
      }else{
        let config = {
          toValue: { x: -deleteBtn_dx, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: deleteBtn_dx,
          switchOpen: true,
          dragDelete: false,
        });
      }
    }else{
      const _gesture = gesture.dx-deleteBtn_dx;
      if(_gesture>-deleteBtn_dx){
        let config = {
          toValue: { x: 0, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: 0,
          switchOpen: false,
          dragDelete: false,
        });
      }else if (_gesture<dragLeftMax_dx) {
        let config = {
          toValue: { x: -this.state.Dimensions_width, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: this.state.Dimensions_width,
          switchOpen: true,
        });
        this.props.onDelete(this.props.uid);
      }else{
        let config = {
          toValue: { x: -deleteBtn_dx, y: 0 },
          duration: 500,
        };
        Animated.spring(
          this.state.position,
          config,
        ).start();
        this.setState({
          width: deleteBtn_dx,
          switchOpen: true,
        });
      }
    }
  }
  deleteAnimate =  () => {
    LayoutAnimation.spring();
    this.setState({
      width: this.state.Dimensions_width,
      switchOpen: true,
    },
      this.props.onDelete(this.props.uid)
    );

  }

  render() {
    const { album, uid } = this.props;
    const { position, width, dragDelete } = this.state;
    return (
      <View style={{width: this.state.Dimensions_width, backgroundColor:'rgb(255,255,255)'}}>
        <Animated.View
          style={position.getLayout()}
          {...this.panResponder.panHandlers}
        >
          <ListItem
            roundAvatar
            avatar={{ uri: album.image }}
            title={album.title}
            uid={uid}
            subtitle={album.artist}
            onPress={()=>this.props.goToPageTwo(album)}
            // hideChevron
            // rightTitle='More...'
          />
        </Animated.View>
        <TouchableWithoutFeedback onPress={()=>this.deleteAnimate()}>
          <View style={[styles.subView,{ width }]}>
            <Text style={styles.subViewText}>
              {dragDelete ? `Drag to delete` : `Delete`}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  subView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgb(247,78,78)',
    width: 84,
    height: 58,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  subViewText: {
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    width: 120,
    textAlign: 'center',
  },
}

export default Item;
