import { signups } from "../../api/user";

const signup = {
    render() {
        return /* html */`
        <main class="form-signin py-5">
        <form class="w-25 mx-auto text-center" id="form">
          <a href="/admin"><img class="mb-4" src="http://res.cloudinary.com/vulong/image/upload/v1645256085/uploadimg/a90aeccr90kbgcbmaepc.png" alt="" width="72" height="72"></a> 
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
      
          <div class="form-floating my-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      
          
          <button class="w-100 btn btn-lg btn-primary my-3" type="submit" >Sign up</button>
          <p class="mt-5 mb-3 text-muted">© assignment_longtvph13442</p>
        </form>
      </main>
        `;
    },
    afterrender() {
        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(document.querySelector("#email").value);
            console.log(document.querySelector("#password").value);
            // lỗi ở phần sign up nha
            signups(
                {
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                },
            );
        });
    },
};
export default signup;
