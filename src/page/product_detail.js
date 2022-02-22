// import posts from "./data";
import header from "./header";
import footer from "./footer";
import { get } from "../../api/post";

const detail = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        ${header.render()}
        <div class="row align-items-md-stretch p-5 bg-light mt-5">
        <div class="col-md-6 text-center">
          <img src="${data.img}" alt="" width="50%">
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 ">
            <h2>${data.title}</h2>
            <p>Sản phẩm bán chạy nhất hiện nay</p>
            <h4 class="my-3 Secondary">${data.price} VND</h4>
            Số Lượng <input type="number" name="" id="" class="my-3 " placeholder="1">
            <button class="btn btn-success d-block my-3" type="button">Mua ngay</button>
          </div>
        </div>
      </div>
      ${footer.render()}
        `;
    },
};
export default detail;
