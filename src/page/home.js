import footer from "./footer";
import header from "./header";
// import data from "./data";
import { getAll } from "../../api/post";

const home = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        ${header.render()}
        
        <main>

  <section class="containe">
    <div class="row ">
      <div class="col-lg-12 col-md-8 ">
      <img src="https://sss-dashboard.leanservices.work/upload/1-2022/1641286082983.jpeg" alt="" width=100%>
      </div>
    </div>
  </section>

  <div class="album bg-light">
    <div class="container">

      <div class="row">
        ${data.map((post) =>/* html */`

        <div class="col my-5">
        <div class="card shadow-sm">
         <a href="/productDetail/${post.id}"><img src="${post.img}" alt="" width=100% ></a>
          <div class="card-body">
            <p class="card-text">${post.title}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">ADD</button>
              </div>
              <small class="text-muted">${post.price}</small>
            </div>
          </div>
        </div>
      </div>
        `)}
        
      </div>
    </div>
  </div>
        
      </div>
    </div>
  </div>
  
</main>
   ${footer.render()}
        `;
    },
};
export default home;
