import Header from "../components/Header";





export default function About(){
    return (
        <>
        
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
    <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card">
      <img src="/image/vid.jpeg"/>
        <div class="card-body">
          <h5 class="card-title">John Doe</h5>
          <p class="card-text">Software Engineer</p>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
      <img src="/image/vid.jpeg"/>
        <div class="card-body">
          <h5 class="card-title">Jane Doe</h5>
          <p class="card-text">Marketing Manager</p>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
      <img src="/image/vid.jpeg"/>
        <div class="card-body">
          <h5 class="card-title">Bob Smith</h5>
          <p class="card-text">Data Analyst</p>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                
                    <p>&copy; 2024 Tech Africa. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

       
        </>
    )
}