import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function App(): React.JSX.Element {

  const [city, setCity] = useState <string>("Seul");
  const [humidity, setHumidity] = useState <string>("15");
  const [condition, setCondition] = useState <string>("Nublado");
  const [rainProbabiliy, setRainProbabiliy] = useState <string>("7");
  const [feelsLike, setFeelsLike] = useState <string>("16");
  const [temperature, setTemperature] = useState <string>("19");
  const [night, setNight] = useState <boolean>(false);

  function isNight(){
    const hour = new Date().getHours();
    console.log(hour);
    if(hour >= 18 || hour < 6){
      setNight(true);
    }else{
      setNight(false);
    }
  }

  useEffect (() => {
    const intervalId = setInterval(()=>{
      isNight();
    },600);
  })

  return(
    <View style={[styles.container, night ==false ? styles.containerBgDay : styles.containerBgNight]}>
      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
      </View>

      <View style={styles.datailsContrainer}>
        <Text style={styles.temperature}>{temperature} °C</Text>
        <Image source={require('./src/assets/images/icon3.png')} style={styles.weatherIcon}></Image>
      </View>

      <View>
        <Text style={styles.weatherCondition}>{condition}</Text>
        <Text style={styles.text}>Sensação térmica: {feelsLike} °C</Text>
        <Text style={styles.text}>Probabilidade de chuva: {rainProbabiliy}%</Text>
        <Text style={styles.text}>Umidade: {humidity}%</Text>
      </View>
        <Image source={require('./src/assets/images/cidade.png')} style={styles.bottomImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomImage: {
    width: '115%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'cover',
    height: '63%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  city: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30
  },
  weatherIcon: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginBottom: 20,
    flexDirection: 'row'
  },
  datailsContrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weatherCondition: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000000'
  },
  temperature: {
    fontSize: 50,
    marginBottom: 20,
    color: '#000000'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5c677d'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 1
  },
  containerBgDay: {
    backgroundColor: "#a2d2ff"
  },
  containerBgNight: {
    backgroundColor: "#33415c"
  }
});

export default App;