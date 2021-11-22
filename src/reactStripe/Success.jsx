import React from 'react'

const Success = () => {
    return (
        <div style={{
            display:"flex",
            height:"100vh",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIK9sjX5un1L83nejQwH5EGNKrDsEAfWSJPg&usqp=CAU" alt="img" style={{ height:"150px" }} />
            <h2 style={{
                color:"white",
                fontWeight:"700",
                background:"teal",
                padding:"10px 15px",
                borderRadius:"10px",
                fontSize:"35px",
                letterSpacing:"3px"
            }}>Successfull.</h2>
            <span style={{
                fontSize:"20px",
                fontStyle:"italic",
                width:"350px",
                textAlign:"center"
            }}>Your order is being prepared. Thanks for using XYZ Shop.</span>
        </div>
    )
}

export default Success
