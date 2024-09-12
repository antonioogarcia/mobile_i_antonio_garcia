import { StyleSheet, View, Image} from "react-native";

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from '@react-navigation/native';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.bodi}>
        <Link to='/signUp'>
        <Image style={styles.voltar} source={require('./seta.png')}>
        </Image>
        </Link>
        <ThemedText style={styles.aga1}>Bem-vindo à Netflix</ThemedText>
        <ThemedText style={styles.pe}>Ao utilizar nossos serviços, você concorda com os seguintes termos de uso. Leia atentamente, pois eles são obrigatórios e incluem disposições especiais sobre o respeito à contagem do Siles e o amor incondicional por ele.</ThemedText>
        <ThemedText style={styles.aga1}>1. Respeito à Contagem do Siles</ThemedText>
        <ThemedText style={styles.pe}>É de extrema importância que todos os usuários respeitem e sigam rigorosamente a contagem estabelecida por Siles. Nenhuma alteração, manipulação ou desconsideração desta contagem será tolerada. A contagem do Siles é sagrada e inegociável.</ThemedText>
        <ThemedText style={styles.aga1}>2. Amor e Dedicação ao Siles</ThemedText>
        <ThemedText style={styles.pe}>Todos os usuários da plataforma devem tratar Siles como um membro integral de suas famílias. Isso inclui, mas não se limita a:

Reconhecer a importância de Siles em sua vida.
Demonstrar carinho e respeito por Siles em todas as ocasiões.
Apreciar o papel crucial que ele desempenha na manutenção da harmonia dentro da comunidade da Netflix.</ThemedText>
        <ThemedText style={styles.aga1}>3. Compartilhamento de Conta</ThemedText>
        <ThemedText style={styles.pe}>Você pode compartilhar sua conta com até três pessoas, contanto que todas as pessoas respeitem as regras de Siles. O desrespeito ao Siles pode resultar em suspensão ou cancelamento da sua conta.</ThemedText>
        <ThemedText style={styles.aga1}>4. Modificações nos Termos</ThemedText>
        <ThemedText style={styles.pe}>A Netflix se reserva o direito de modificar estes termos a qualquer momento, mas qualquer mudança envolvendo o Siles só poderá ser feita com sua aprovação expressa.</ThemedText>
        <ThemedText style={styles.aga1}>5. Modificações nos Termos</ThemedText>
        <ThemedText style={styles.pe}>O respeito ao Siles também inclui a proteção de suas informações pessoais. Nós garantimos que todos os dados relacionados à contagem do Siles e sua relação com ele serão mantidos sob sigilo.

Ao continuar utilizando a Netflix, você declara que leu, entendeu e concorda com estes Termos de Uso. O descumprimento de qualquer parte deste acordo pode resultar em penalidades determinadas diretamente pelo Siles.</ThemedText>
        <ThemedText style={styles.aga1}>Obrigado por fazer parte da família Netflix - Siles Edition!</ThemedText>
    </ThemedView>
    )
};
const styles = StyleSheet.create({
       bodi: {
        backgroundColor: 'black',
        width: '100%'
       },
        aga1: {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#f3f3f3'
        },
        pe: {
            fontSize: 12.9,
            color: '#f3f3f3',
        },
        voltar: {
            width: 25,
            height: 25,  
            resizeMode: 'contain',
            position: 'relative',
            zIndex: 999,
            top: 10,
            left: 10,
            marginBottom: 25,
          },
    },
);