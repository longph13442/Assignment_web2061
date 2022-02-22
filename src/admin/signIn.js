import { signin } from "../../api/user";

const signIn = {
    render() {
        return /* html */`
        <main class="form-signin py-5">
        <form class="w-25 mx-auto text-center" id="form">
          <a href="/admin"><img class="mb-4" src="http://res.cloudinary.com/vulong/image/upload/v1645256085/uploadimg/a90aeccr90kbgcbmaepc.png" alt="" width="72" height="72"></a> 
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      
          <div class="form-floating my-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="checkbox  my-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit" >Sign up</button>
          <p class="mt-5 mb-3 text-muted">© assignment_longtvph13442</p>
        </form>
      </main>
        `;
    },
    afterrender() {
        const form = document.querySelector("form");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin(
                    {
                        email: document.querySelector("#email").value,
                        password: document.querySelector("#password").value,
                    },
                );
                console.log(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.id === "1") {
                    document.location.href = "/admin";
                } else {
                    document.location.href = "/";
                }
                // document.location.href = "/";
                // console.log("data", data);
            } catch (error) {
                alert("Đăng nhập thất bại !");
                document.querySelector("form").reset();
            }
            // lỗi ở phần sign up nha
        });
    },
};
export default signIn;
