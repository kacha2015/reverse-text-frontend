/*
  Custom Hook - Invoke API Reverse Text
*/
import { getReverseText } from '../services/getReverseText';

export const useFetchReverseText = ( value ) => {

    const data = getReverseText( value );

    return data;

}

