import axios from "axios";
import header from "./header";
import sideBar from "./sideBar";
import { adds } from "../../api/post";

const add = {
    render() {
        return /* html */`
        ${header.render()}
         <div class="row d-flex">
         ${sideBar.render()}
         <div class="col-9">
         <form class=" d-flex row m-5" method="post"  style="width: 100%;" id="form">
         <div class="col-9 ">
             <input type="hidden" name="ma_tai_khoan" >
             <div class="form-label-group">
                 <label for="inputEmail mb-5">Tên sản phẩm</label>
                 <input type="text" id="title" name="ho_ten"  class="form-control my-2 bg-light" placeholder="" autofocus="">
             </div>
             <div class="form-label-group">
                 <label for="inputPassword ">Giá</label>
                 <input type="text" id="price" name="ten_dang_nhap" class="form-control my-2 bg-light" placeholder="" >
             </div>
             <div class="form-label-group">
                 <label for="inputPassword ">mô tả</label>
                 <input type="text" name="email"  id="mota" class="form-control my-2 bg-light" placeholder="">
                 <div id="error1"></div>
                                             <span></span>
                                     </div>
             <div class="form-label-group">
                 <label for="inputPassword ">Số lượng</label>
                 <input type="text" id="quantyti" name="sdt"  class="form-control my-2 bg-light" placeholder="">
                 <div id="error2"></div>
                                             <span></span>
                                     </div>
             
             <button class="btn  btn-success btn-md my-4" type="submit" name="profile">Thêm sản phẩm</button>
             <p class="mt-5 mb-3 text-muted text-center">© Assignment_longtvph13442</p>
         </div>
         <div class="col-2 text-center mt-3 ms-5 ">
            
            <div class="upload-btn-wrapper">
                 <input type="file" name="hinh_anh" id="img" class="btn btn-success btn-sm mt-3 " style="width: 95%;">
             </div>
         </div>
     </form></div>

</div>
        `;
    },
    afterrender() {
        const form = document.querySelector("form");
        const cloud = "longtvph13442";
        const apiurl = "https://api.cloudinary.com/v1_1/vulong/image/upload";

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#img").files[0];
            // lấy giá trị file và gán vào object formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", cloud);
            // call api
            const { data } = await axios.post(apiurl, formData, {
                header: {
                    "content-Type": "application/formData",
                },
            });
            console.log(data.url);

            adds(
                {
                    title: document.querySelector("#title").value,
                    price: document.querySelector("#price").value,
                    img: data.url,
                },
            );
        });
    },
};
export default add;
