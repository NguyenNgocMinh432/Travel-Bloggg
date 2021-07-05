import { BaseComponent } from "../BaseComponent.js";
import { getDataFromDoc } from "../utils.js";
class NavLogin extends BaseComponent {
    constructor() {
        super();

        this.state = {
            name: ''
        }

        this.props = {
            "id": '',
            "owner": '',
            
            
        };
    }

    static get observedAttributes() {
        return ['id','owner'];
    }
    render() {
        const template = /*html*/ `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        
        <link rel="stylesheet" href="../css/styles_home.css">
            <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="./home.html" class="text-gray">Blooger</a>
            </div>
            <div>
                <ul class="nav-items">
                    <a href="../html/home.html">
                        <li class="nav-link active">
                            Home
                        </li>
                    </a>
                    <a href="../html/travel.html">
                        <li class="nav-link">
                            Travel
                        </li>
                    </a>
                    <a href="../html/eat.html">
                        <li class="nav-link">
                            Eat
                        </li>
                    </a>
                    <a href="../html/relax.html">
                        <li class="nav-link">
                            Relax
                        </li>
                    </a>
                    <a href="../Videos/index.html">
                        <li class="nav-link">
                            Video
                        </li>
                    </a>
                </ul>
            </div>
            <div class="social text-gray">
            <div class="owner">${this.state.name}</div>
            </div>

            <!-- Nav mobile ----->
            <div class="toggle-collapse">
                <div class="toggle-icons">
                    <i class="fas fa-bars" id="openNav"></i>
                </div>
            </div>

            <div class="nav-overlay" id="overlay"></div>

            <div class="nav__mobile" id="navMobile">
                <div class="nav__mobile-close" id="closeNav"><i class="fas fa-times"></i></div>
                <ul class="nav__mobile-items">
                    <li class="nav__mobile-link">
                        <a href="./home.html">Home</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./travel.html">Travel</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./eat.html">Eat</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="./relax.html">Relax</a>
                    </li>
                    <li class="nav__mobile-link">
                        <a href="../Videos/index.html">Videos</a>
                    </li>
                </ul>
                <div class="social__mobile text-gray">
                    
                    <a href="./login.html"></a>
                    <a href="./sign-up.html"></a>
                </div>
            </div>
        </div>

    </nav>
    `;
    this._shadowRoot.innerHTML = template;
      
    }
     async componentDidUpdate(){
        if (this.props.id) {
            let response = await firebase.firestore().collection('user1') .doc(this.props.id).get();
            let owner = getDataFromDoc(response);
            this.setState({
                name: owner.name,
            });
    }
  }
}
window.customElements.define('nav-login', NavLogin);