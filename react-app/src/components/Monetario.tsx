import { TextProps } from "react-native";
import Texto, { TextoProps } from "./Texto";

export default function Monetario({style={}, children, tipo='normal'}: TextProps & TextoProps){

    function currencyFormat(num: number) {

        let formantando = 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        
        return formantando.replace(',',"-").replace('.',",").replace('-',".").replace('R$ .','R$ -' );
     }  

    return <Texto style={style} tipo={tipo}>{currencyFormat(Number(children))}</Texto>
};
