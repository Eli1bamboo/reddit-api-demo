export const getDataTable = (results) => {
    let data = [];

    results.forEach(result => {
        data.push([result.author])
    });

    return data
}