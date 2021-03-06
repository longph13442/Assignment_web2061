// import axios from "axios";
import reRender from "../page/utils/reRender";
import { getAll, remove } from "../../api/post";
// import data from "../page/data";
import header from "./header";
import sideBar from "./sideBar";

const admin = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <body>
        ${header.render()}
        <div class="container-fluid">
          <div class="row">
            ${sideBar.render()}        
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                  <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                  </div>
                  <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    This week
                  </button>
                </div>
              </div>
              <div class="mx-5"> 
              <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">T??n</th>
                  <th scope="col">???nh</th>
                  <th scope="col">Gi??</th>
                  <th scope="col" colspan="2">Ch???c n??ng</th>
                </tr>
              </thead>
              <tbody>
              ${data.map((post) => /* html */`
              <tr>
                  <th scope="row">${post.id}</th>
                  <td>${post.title}</td>
                  <td>${post.price}</td>
                  <td>${post.price}</td>
                  <td><button data-id="${post.id}" class="btn btn-success" id="btn"> Edit</button></td>
                  <td><button data-id="${post.id}" class="btn btn-danger" id="btn"> Xo??</button></td>
                </tr>
              `).join("")}
                
               
              </tbody>
            </table>
              </div>
            </main>
          </div>
        </div>
        
        
            <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
              <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>
          
        
        </body>
        `;
    },
    afterrender() {
        const btns = document.querySelectorAll(".btn");

        btns.forEach((btn) => {
            const ids = btn.dataset.id;
            btn.addEventListener("click", async () => {
                // x??a
                const confirm = window.confirm("B???n c?? mu???n x??a kh??ng ?");
                if (confirm) {
                    remove(ids).then(() => {
                        reRender(admin, "#app");
                    });
                }
            });
        });
    },
};
export default admin;
