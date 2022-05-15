
export const saveEmail=(email)=>{
    return function(dispatch){
        dispatch({type:"save_email", payload:email});
    };
};

export const savePassword = (password)=>{
    return function(dispatch){
        dispatch({type:"save_password", payload:password});
    };
};

export const saveUser = (user) => {
    props.saveEmail(user.email)
    props.savePassword(user.password)
}

saveUser(user.result);
