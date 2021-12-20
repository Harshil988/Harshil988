export const newcontect = (contect) => {
    console.log("action==>", contect);
    return {
        type: "CREATE_DATA",
        payload: contect
    }
}

export const getcontect = (id) => ({
    type: "GET_CONTECT",
    payload: id,
})

export const update = (contect) => ({
    type: "UPDATE_CONTECT",
    payload: contect,

}
)


export const remove = (id) => ({
    type: "REMOVE",
    payload:id,
})

