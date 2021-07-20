export default class DrawWidget {
  constructor() {
    this.drawWidget();
  }

  drawWidget() {
    this.widget = document.createElement('div');
    this.widget.classList.add('widget');
    this.widget.innerHTML = `<div class="download-field">
        <div class="title">
          <h1 class="main-title">
            Availiable Files (without sms and registration)
          </h1>
        </div>
        <div class="block-list">
          <ul class="list">
            <li class="item" data-amount="0">
              <div class="name-file">
                <h2 class="name">Storage Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-item kb"></span>
              </div>
              <div class="block-link">
                <div class="link">download</div>
              </div>
            </li>
            <li class="item" data-amount="0">
              <div class="name-file">
                <h2 class="name">Streams Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-item kb"></span>
              </div>
              <div class="block-link">
                <div class="link">download</div>
              </div>
            </li>
            <li class="item" data-amount="100">
              <div class="name-file">
                <h2 class="name">XMLHttpRequest Standard.pdf</h2>
              </div>
              <div class="download">
                <span class="downloaded-item kb"></span>
              </div>
              <div class="block-link">
                <div class="link">download</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="amount-download" data-downloaded="0">
        You\`ve already downloaded: <span class="downloaded">0</span>
      </div>`;

    document.body.appendChild(this.widget);
  }
}
