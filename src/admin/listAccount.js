import { getUser, removeUser } from "../../api/user";
import header from "./header";
import reRender from "../page/utils/reRender";
import sideBar from "./sideBar";

const listAccount = {
    async render() {
        const { data } = await getUser();
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
                  <th scope="col">#</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  
                  <th scope="col">Chức năng</th>
                </tr>
              </thead>
              <tbody>
              ${data.map((post) => /* html */`
              <tr>
                  <th scope="row">${post.id}</th>
                  <td>${post.email}</td>
                  <td>${post.password}</td>
                  <td><button data-id="${post.id}" class="btn btn-danger" id="btn"> Xoá</button></td>
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
                // xóa
                const confirm = window.confirm("Bạn có muốn xóa không ?");
                if (confirm) {
                    removeUser(ids).then(() => {
                        reRender(listAccount, "#app");
                    });
                }
            });
        });
    },

};
export default listAccount;
