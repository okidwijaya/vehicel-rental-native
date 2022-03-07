import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FinishedPayment({navigation}) {
  return (
    <ScrollView style={styles.bg}>
      <View>W
        <Text style={styles.success}>Payment Success!</Text>
      </View>
      <View>
      <Image source={require('../../assets/detailbg.png')} style={styles.pic}/>
      </View>
      <View style={styles.desc}>
          <Text style={styles.info}>2 Vespa</Text>
          <Text style={styles.info}>Prepayement (no tax)</Text>
          <Text style={styles.info}>4 days</Text>
          <Text style={styles.info}>Jan 18 2021 to Jan 22 2021</Text>
      </View>
      <View style={styles.desc}>
          <Text style={styles.info}>ID : 9087627392624</Text>
          <Text style={styles.info}>Jessica Jane (jjane@mail.com)</Text>
          <Text style={styles.info}>0890876789 <Text style={styles.status}>(active)</Text></Text>
          <Text style={styles.info}>Jakarta, Indonesia</Text>
      </View>
      <TouchableOpacity style={styles.btnPrice} onPress={() => navigation.navigate('GetPayment')}>
        <Text style={styles.priceBtn}>Total : 245.000</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    bg:{
      backgroundColor : 'white',
    },
    step:{
      width : 300,
      height : 100,
      marginTop : '10%',
      marginLeft : '5%',
    },
    pic:{
        width : 380,
        height : 200,
        marginLeft : '4%',
        marginBottom : 20,
        borderRadius : 20,
    },
    success:{
        fontSize : 32,
        fontWeight : 'bolder',
        color: '#087E0D',
        margin : '45%',
    },
    desc :{
     paddingLeft : 20,
    },
    info:{
        fontSize : 16,
        marginBottom: 5,
    },
    status:{
        fontSize : 16,
        marginBottom: 5,
        color: '#087E0D',
    },
    btnPrice: {
        alignItems: 'center',
        backgroundColor: '#FFCD61',
        padding: 10,
        borderRadius: 15,
        height: 60,
        textAlign: 'center',
        width : '80%',
        marginLeft: '8%',
        marginTop : 30,
        // marginBottom: 60,
      },
      priceBtn: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 35,
      },
})