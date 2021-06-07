/*
  Invoke API Reverse Text
*/

export const getReverseText = async( word ) => {

    const url = `${process.env.REACT_APP_URL_API}/iecho?text=${word}`;
    const resp = await fetch( url );
    const data  = await resp.json();

    return data;

}