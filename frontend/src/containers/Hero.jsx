const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">
                    Welcome to Saiyan Prints
                </h1>
                <p className="py-6">
                    Send files to <span className="text-accent">print@saiyanprints.com</span> for a free quote!
                </p>
                <button className="btn btn-accent">Visit Shop</button>
            </div>
        </div>
    </div>
  )
}

export default Hero