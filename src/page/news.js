import footer from "./footer";
import header from "./header";
import data2 from "./data_new";

const news = {
    render() {
        return /* html */ `
        ${header.render()}
        <main class="container m-5">
        <div class="p-4 p-md-5 mb-4 text-white rounded ">
            <img src="https://sss-dashboard.leanservices.work/upload/2-2022/1644586716816.jpeg" alt="" width=100%>

          
        </div>
      
        <div class="row">
        
          ${data2.map((post) => /* html */`
          <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success">blog</strong>
              <h3 class="mb-0">${post.title}</h3>
              <p class="mb-auto">${post.desc}</p>
              <a href="/new_detail/${post.id}" class="stretched-link">Xem thêm</a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <a href="/new_detail/${post.id}"><img src="${post.img}" alt="" width="250" height="250"> </a>
            </div>
          </div>
        </div>
          `).join("")}
          
        </div>
      
        
      </main>
      ${footer.render()}
        `;
    },
};
export default news;
