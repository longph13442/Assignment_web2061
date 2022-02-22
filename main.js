import Navigo from "navigo";
import home from "./src/page/home";
import product from "./src/page/product";
import news from "./src/page/news";
import detail from "./src/page/new_detail";
import productDetail from "./src/page/product_detail";
import admin from "./src/admin";
import add from "./src/admin/add";
import signup from "./src/admin/signup";
import ListAccount from "./src/admin/listAccount";
import signIn from "./src/admin/signIn";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);

    if (content.afterrender) content.afterrender();
};

// const userId = JSON.parse(localStorage.getItem("user")).id;

// router.on("/admin/*/", () => {
//     console.log("truy cập đường dẫn admin");
// }, {
//     // eslint-disable-next-line no-unused-vars
//     before(done, match) {
//         if (userId === 1) {
//             done();
//         } else {
//             document.location.href = "/";
//         }
//     },
// });

router.on({
    "/": () => {
        print(home);
    },
    "/product": () => {
        print(product);
    },
    "/news": () => {
        print(news);
    },
    "/new_detail/:id": ({ data: { id } }) => {
        print(detail, id);
    },
    "/productDetail/:id": ({ data: { id } }) => {
        print(productDetail, id);
    },
    "/admin": () => {
        print(admin);
    },
    "/add": () => {
        print(add);
    },
    "/signup": () => {
        print(signup);
    },
    "/ListAccount": () => {
        print(ListAccount);
    },
    "/signIn": () => {
        print(signIn);
    },
});
router.resolve();
