import React from "react";


const CustomForm:React.FC = () => {


    return (
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id={'email'}/>
            </div>
           <div>
               <label htmlFor="password">Login</label>
               <input type="text" id={'password'}/>

           </div>
            <button>Login</button>


        </form>
    )
}
export default CustomForm;