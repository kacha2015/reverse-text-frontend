/*
  Custom Hook - Invoke API Reverse Text
*/
import { getReverseText } from '../services/getReverseText';

export const useFetchReverseText = ( value ) => {

  getReverseText(value).
        then( ({ text }) => {
    console.log(text);
          return text;
        });
}

