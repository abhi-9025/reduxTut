const initialState=[
    {
      id:0,
      name:"Abhishek bahrti",
      email:"aa@gmail.com",
      number:1324913422,
    },
    {
        id:1,
        name:"Abhishek ",
        email:"bb@gmail.com",
        number:1123241234,
      },
]

const contactReducer=(state=initialState ,action)=>{
    switch(action.type){
      case "ADD_CONTACT":
        state=[...state,action.payload]
        return state
        default:return state;
    }
}

export default contactReducer;