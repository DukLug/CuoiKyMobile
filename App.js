import React, {useState, useEffect} from 'react';

import { Text, SafeAreaView, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Image, FlatList } from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
const DetailScreen =({navigation})=> {
  return (
    <SafeAreaView style={{backgroundColor:'white', width: '100%', flexDirection: 'column', flex: 1}}>
      <View style={{width: '100%', backgroundColor: 'white', justifyContent: 'center', height: 300}}>
         <Image style={{width: '100%', height: '100%', resizeMode:'contain'}} source={require('./assets/3.png')} />
      </View>
      <View style={{width: '100%', backgroundColor: 'white', justifyContent: 'center', height: 100, flexDirection:'row' }}>
        <Image style={{width: 100, height: 100, resizeMode:'contain'}} source={require('./assets/3.png')} />
        <Image style={{width: 100, height: 100, resizeMode:'contain'}} source={require('./assets/2.png')} />
      </View>
      <View style={{width: '100%', backgroundColor: 'white', justifyContent: 'flex-start', height: 30, flexDirection:'row', alignItems: 'center', paddingLeft: 20}}>
        <Image style={{width: 20, height: 20, resizeMode:'contain', marginRight: 10}} source={require('./assets/star.png')} />
        <Text style={{fontSize: 18, color: 'orange'}}>4.8</Text>
        <TouchableOpacity style={{backgroundColor: 'gray', height: 30, width: 100, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
        
        <Text style={{}}>145 reviews</Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', backgroundColor: 'white', justifyContent: 'center', height: 100, flexDirection:'column', padding: 5}}>
        <Text  style={{fontSize: 30, fontWeight: 'bold'}}>Leset Galant</Text>
        <Text>The inspration of the design of this chair comes from</Text>
      </View>
      <View style={{alignItems: 'center',
          justifyContent: 'space-between',
          padding: 24,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>$64.00</Text>
          <TouchableOpacity style={{backgroundColor: 'black', height: 50, width: 150, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>

          <Text style={{color: 'white'}}>Add to cart </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const ShowScreen = ({route, navigation}) =>{
  return(
    <SafeAreaView style={{backgroundColor:'white'}}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{color: 'black', alignSelf: 'center', fontSize: 24, fontWeight: 'bold'}}>
        Discovery Products
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 5}}>
        <TouchableOpacity style={{backgroundColor: 'gray', height: 30, width: 70, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text style={{}}>Sofas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'gray', height: 30, width: 70, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text style={{}}>Chairs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'gray', height: 30, width: 70, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text style={{}}>Tables</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'gray', height: 30, width: 70, borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text style={{}}>Kitchen</Text>
      </TouchableOpacity>
      </View>
      

      <View>
        <FlatList
          renderItem={(item) => {
            <View>
              <Text>
                Soft
              </Text>
            </View>
          }}
          style = {{width: 100, backgroundColor: 'black'}}
        />


      </View>
      <View>

      </View>


    </SafeAreaView>
  );

  
};

const StartScreen =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Renovate your interior
      </Text>
      <Button title='Go to catalog' style={{width: 20}}/>
      <View style={{alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          
          backgroundColor: 'white'}}>
      <View  style={{flexDirection: 'row', width: 300, justifyContent: 'space-between', alignItems: 'center'}} >
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Popular products
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          View all
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: 300, justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
        <Image style={styles.logo} source={require('./assets/1.png')} />
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Chester Chair</Text>
        <Text style={{fontSize: 10, color: 'gray'}}>$6100</Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <Image style={styles.logo} source={require('./assets/2.png')} />
        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Lesot Galant</Text>
        <Text style={{fontSize: 10, color: 'gray'}}>$6400</Text>
        </View>
      </View>

    </View>
    </SafeAreaView>
  );

}


export default function App() {
  return(
    <DetailScreen/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
