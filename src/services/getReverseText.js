export const getReverseText = async( word ) => {

    const url = `http://localhost:4000/iecho?text=${word}`;
    const resp = await fetch( url );
    const data  = await resp.json();
    return data;

}