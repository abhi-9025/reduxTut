const initialState=[
    {
      id:0,
      name:"Abhishek bahrti",
      number:1324913422,
    },
    {
        id:1,
        name:"Abhishek ",
        number:1123241234,
      },
]

const contactReducer=(state=initialState ,action)=>{
    switch(action.type){
        default:return state;
    }
}

export default contactReducer;