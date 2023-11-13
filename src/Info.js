function Info(){
    return(
        <>
       <div className="img">
        <img src="profilepicture.png" width=" 300px" alt="" />
       </div>
       <div className="name">
        <h2>Tanishq Vyas</h2>
        <h3>Software engineer, Barclays, Pune</h3>
       </div>
       <div className="btn">
        <a href="mailto:tanishqvofficial@gmail.com"><button className="btn1"><img src="email.png" width="20px"   alt="" />Email</button></a>
        <a href="https://www.linkedin.com/in/tanishq-vyas-74a260220/ " target="_blank"><button className="btn2"><img src="linkedin-logo.png" width="20px" alt="" />Linkedin</button></a>
       </div>
        </>
    )
}

export default Info