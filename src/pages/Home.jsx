import Header from "../components/Header";




export default function Home(){
    return (
        <>
        <div>
        <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    
                    <a class="navbar-brand" href="/home">Tech Africa</a>
                </div>
                
        <a href="/contact" className="nav">Contact</a>
        <a href="/about" className="nav">about</a>
            </div>
        </nav>
    </header>
    <main>
    <div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Welcome to Tech Africa</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
    </div>
    <div class="col-md-6">
      <img src="/image/vid.jpeg"/>
    </div>
  </div>
</div>
        </main>
             
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                
                    <p>&copy; 2024 Tech Africa. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
           
        </div>
        </>
    )
}