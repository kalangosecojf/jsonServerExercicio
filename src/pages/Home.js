import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Modalize } from 'react-native-modalize';

const Home = ({ navigation }) => {

    const modalizeRef = useRef(null);
    const openModalize = () => {
        modalizeRef.current?.open();
    };

    const [userData, setUserData] = useState([]);
    const getData = async () => {
        try {
            const response = await AsyncStorage.getItem('userData')
            setUserData(JSON.parse(response));
        }
        catch (error) {
            console.error(error);
        }        
    }

    const handleLogout = () => {
        //AsyncStorage.clear();
        AsyncStorage.removeItem('userData');
        //AsyncStorage.multiRemove(['userData', 'userData2']);
        navigation.popToTop();
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <View>
        <TouchableOpacity
            style={{marginTop: 12, marginRight: 12, textAlign: 'right'}}
            onPress={() => navigation.popToTop()}
            ><Text>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{marginTop: 12, marginRight: 12, textAlign: 'right'}}
            onPress={handleLogout}
            ><Text>Sair</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}> Bem vindo {userData.name}!</Text>
        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 18}}>Netflix Series</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity 
                style={{padding: 8}}
                onPress={openModalize}
            ><Image
                source={require('../images/dark.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{padding: 8}}
                    onPress={() => {}}
            ><Image
                source={require('../images/la_casa_de_papel.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{padding: 8}}
                    onPress={() => {}}
            ><Image
                source={require('../images/round_6.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
        </View>
        <Modalize
            ref={modalizeRef}
            snapPoint={180}
            modalHeight={400}
        >
            <View style={{flex: 1, height: 180, justifyContent: 'space-around', alignItems: 'center', margin: 20}}>
                <Text>Dark ?? uma premiada webs??rie alem?? de drama, suspense e fic????o cient??fica, criada por Baran bo Odar e Jantje Friese e eleita em vota????o popular no site Rotten Tomatoes como a melhor s??rie original Netflix.</Text>
                <Text>A s??rie se passa na cidade fict??cia de Winden, na Alemanha, que sofre o impacto do desaparecimento de uma crian??a, que exp??e os segredos e as conex??es ocultas entre quatro fam??lias locais, enquanto elas lentamente desvendam uma sinistra conspira????o de viagem no tempo que abrange v??rias gera????es.</Text>
                <Text>Ao longo da s??rie, Dark explora as implica????es existenciais do tempo e seus efeitos sobre a natureza humana.</Text>
                <Text>?? a primeira s??rie original alem?? da Netflix, tendo estreado sua primeira temporada completa no dia 1?? de dezembro de 2017.</Text>
                <Text>Ap??s as cr??ticas positivas, a s??rie foi renovada para uma segunda temporada que foi lan??ada no dia 21 de junho de 2019. No trailer de lan??amento da segunda temporada, a s??rie foi anunciada como "uma hist??ria contada em tr??s 'ciclos'" - cujo final ocorreu na sua terceira e ??ltima temporada, que foi lan??ada no dia 27 de junho de 2020.</Text>
                <Text>Apesar de ser inicialmente comparada a Stranger Things - ambas partem do desaparecimento de uma crian??a - a s??rie ganhou fama pela sua trama complexa e temas envolvendo viagens no tempo e conceitos de f??sica. </Text>
                <Text>No ??mbito de uma vota????o realizada pelo site Rotten Tomatoes, Dark foi eleita como a melhor s??rie da Netflix, vencendo a pr??pria Stranger Things e enfrentando a tamb??m aclamada Black Mirror na final.Dark tamb??m ganhou o pr??mio Grimme-Preis, o mais importante da televis??o alem??.</Text>
            </View>
        </Modalize>
    </View>
  );
}
export default Home;