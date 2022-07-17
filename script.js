/* Fill your code*/
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    addSkeleton() {
        console.log(this.title);

        let str = `
<div class="card">
  <img src="./assets/javascript.png" alt="Avatar" id="as">
  <div class="container">
    <h4 ><b>${this.title}</b></h4> 
    <p>${this.detail.slice(0, this.detail.length)}</p> 
  </div>
</div>
        `;
        {
            /* <p>${this.detail.slice(0, this.detail.length / 5)} ...</p>  */
        }

        // console.log(str);
        document.getElementById('cont').innerHTML += str;
    }
    addTitle() {}
    addDescription() {}
}

var isVisisble = false;
const handle = () => {
    isVisisble = !isVisisble;

    if (isVisisble) {
        document.getElementById('popupContact').style.display = 'block';
    } else {
        document.getElementById('popupContact').style.display = 'none';
    }
};

const getValue = () => {
    handle();
    let title = document.getElementById('title').value;
    let detail = document.getElementById('detail').value;
    // console.log(title, detail);

    obj = new Blog(title, detail);
    obj.addSkeleton();
    // obj.addTitle();
    // obj.addDescription();
    document.getElementById('title').value = '';
    document.getElementById('detail').value = '';
};