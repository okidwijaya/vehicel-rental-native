import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {getAllVehicle} from '../../modules/utils/vehicles';

import axios from 'axios';
export default function Home({navigation}) {
  const [search, onSearch] = useState('');
  const [cars, setCars] = useState([]);
  const [motorbikes, setMotorbikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVehicleType = () => {
    getAllVehicle()
      .then(
        axios.spread((...res) => {
          setIsLoading(true);
          setCars(res[0].data.result.data);
          setMotorbikes(res[1].data.result.data);
          setBikes(res[2].data.result.data);
        }),
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getVehicleType();
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/homebg.png')}
        style={styles.tinyLogo}
      />
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Cars</Text>
        <Text
          style={styles.more}
          onPress={() => {
            const param = {
              type: 'Cars',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {cars.length > 0 && isLoading ? (
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/default-placeholder.png')}
                  style={styles.card}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/loadingimg.gif')}
          style={styles.loading}
        />
      )}
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Motorbike</Text>
        <Text
          style={styles.more}
          onPress={() => {
            const param = {
              type: 'Cars',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {cars.length > 0 && isLoading ? (
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/default-placeholder.png')}
                  style={styles.card}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/loadingimg.gif')}
          style={styles.loading}
        />
      )}
      <View style={styles.imageWrapper}>
        <Text style={styles.title}>Bike</Text>
        <Text
          style={styles.more}
          onPress={() => {
            const param = {
              type: 'Cars',
            };
            navigation.navigate('Category', param);
          }}>
          View More >
        </Text>
      </View>
      {cars.length > 0 && isLoading ? (
        <FlatList
          data={cars}
          horizontal={true}
          renderItem={({item: vehicles}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  const param = {
                    id: vehicles.id,
                  };
                  navigation.navigate('Detail', param);
                }}>
                <Image
                  source={require('../../assets/default-placeholder.png')}
                  style={styles.card}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={vehicles => vehicles.id}
        />
      ) : (
        <Image
          source={require('../../assets/loadingimg.gif')}
          style={styles.loading}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 425,
    height: 250,
  },
  di: {
    width: 225,
    height: 150,
  },
  headerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginTop: 15,
    padding: 8,
    color: '#000',
  },
  itemHeader: {
    flex: 1,
    // backgroundColor: 'lightblue',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  more: {
    flex: 1,
    // backgroundColor: 'grey',
    textAlign: 'right',
    color: '#000',
  },
  imageWrapper: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#393939',
    marginTop: '4%',
    marginLeft: '5%',
    flex: 1,
  },
  // more: {
  //   fontSize: 14,
  //   fontWeight: '700',
  //   color: '#393939',
  //   marginVertical: '6%',
  //   marginRight: '5%',
  // },
  card: {
    width: 250,
    height: 150,
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  loading: {
    width: 250,
    height: 150,
    marginLeft: 50,
  },
});
