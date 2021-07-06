import { BaseComponent } from "../BaseComponent.js";

class RemoveUser extends BaseComponent {
    constructor() {
        super();
        this.state = {
            errors: {
                email: "",
                password: "",
            },
            data: {
                email: "",
                password: "",
            },
        }
    }
    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/styles_home.css">
        <link rel="stylesheet" href="../css/auth.css">
        
        <div class="main__wrap">
        <main>
            <div class="container">
                <div class="block block__auth">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="auth">
                                <div class="auth__title text-center">
                                    Remove User
                                </div>
                                <div class="auth__form">
                                    <form novalidate id="form-login">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="Email Remove">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <button class="btn auth__btn auth__login" type="submit">Romove</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
        `;
        this._shadowRoot.innerHTML = template;
        this.$formLogin = this._shadowRoot.querySelector("#form-login");
        this.$formLogin.onsubmit = async (event) => {
            event.preventDefault();

            let email = this._shadowRoot.querySelector("#email").value;
            let isFlash = true;
            if (email == "") {

                isFlash = false;
                this.state.errors.email = "Invalid email";
                alert("Moi bạn nhập email");
            }
            else {
                this.state.errors.email = "";
                this.state.data.email = email;
            }
            if (isFlash) {
                
                let result = await firebase.firestore().collection('user1').get();
                console.log("1");
                result.docs.forEach((doc) => {
                    if (doc.data().email === email) {   
                        firebase.firestore().collection('user1').doc(doc.id).delete();
                        alert("Bạn đã xóa thành công!")
                    }
                   

                });
            }
        }
    }
}
window.customElements.define('custom-remove', RemoveUser);