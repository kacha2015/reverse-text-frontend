export const getReverseTrext = async( word ) => {

    const url = `${process.env.URL_API}/iecho?text=${word}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    return data;

}