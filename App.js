import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListarProduto from './src/paginas/ListarProduto'
import IncluirProduto from './src/paginas/IncluirProduto'
import AlterarProduto from './src/paginas/AlterarProduto'

import Tempo from './src/paginas/PrevisaoTempo/Tempo'
import Mapa from './src/paginas/Mapa/Mapa'

import Login from './src/Login/index'
import LoginEmpresa from './src/paginas/LoginEmpresa'
const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#007bff",
            title: "Tela Loguin"
          }}
        />


      <Stack.Screen
          name="Tempo"
          component={Tempo}
          options={{
            headerTintColor: "#007bff",
            title: "Temperatura"
          }}
        />

<Stack.Screen
          name="LoginEmpresa"
          component={LoginEmpresa}
          options={{
            headerShown: false
          }}
        />

<Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{
            headerTintColor: "#007bff",
            title: "Mapa"
          }}
        />

        <Stack.Screen
          name="ListarProduto"
          component={ListarProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Listar Locais"
          }}
        />

        <Stack.Screen
          name="IncluirProduto"
          component={IncluirProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Incluir Locais"
          }}
        />

        {<Stack.Screen
          name="AlterarProduto"
          component={AlterarProduto}
          options={{
            headerTintColor: "#007bff",
            title: "Alterar Locais"
          }}
        />

        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
