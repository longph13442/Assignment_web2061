import data from "./data";
import footer from "./footer";
import header from "./header";

const product = {
    render() {
        return /* html */ `
        ${header.render()}
        <div class="row m-5">
        ${data.map((post) =>/* html */`

        <div class="col">
        <div class="card shadow-sm">
        <a href="/product_detail"><img src="${post.img}" alt="" width=100% ></a>
        <div class="card-body">
            <p class="card-text">${post.title}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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
  ${footer.render()}
        `;
    },
};
export default product;
