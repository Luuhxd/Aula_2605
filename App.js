
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import SearchBar from './src/components/SearchBar';
import BannerMovies from './src/components/BannerMovies';
import Filmes from './src/components/data/filmes';
import CardMovies from './src/components/CardMovies';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerMovies></BannerMovies>
      

      <View style={{width:'90%'}}>
      <FlatList 
      showsHorizontalScrollIndicator = {false}
      horizontal ={true}
        data ={Filmes}
        keyExtractor = {(item) => item.id}
        renderItem = { ({item}) =>(

          <CardMovies
          titulo = {item.nome}
          imagem = {item.imagem}
          nota = {item.nota}
          
          >

          </CardMovies>

        )}

        
      />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});
