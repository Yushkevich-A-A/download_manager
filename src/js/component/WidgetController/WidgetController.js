/* eslint-disable no-mixed-operators */
/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

import file1 from '../content/StorageStandard.pdf';
import file2 from '../content/StreamsStandard.pdf';
import file3 from '../content/XMLHttpRequestStandard.pdf';

export default class WidgetController {
  constructor(widget) {
    this.widget = widget;
    this.amountDownloaded = document.querySelector('.amount-download');
    this.arrayItem = document.querySelectorAll('.item');
    this.arrayLinks = document.querySelectorAll('.link');
    this.arrFiles = [file1, file2, file3];
    this.init();
    this.amountDownload = 0;
  }

  init() {
    this.addListeners();
    this.drawLinks();
    this.drawAmountDownload();
  }

  drawLinks() {
    for (let i = 0; i < this.arrayLinks.length; i++) {
      this.arrayLinks[i].dataset.src = this.arrFiles[i];
    }

    for (const i of [...this.arrayItem]) {
      this.drawSpanAmount(i);
    }
  }

  addListeners() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.link')) {
        const link = event.target.closest('.link');
        const item = link.closest('.item');
        const title = item.querySelector('.name').textContent;
        this.cross_download(link.dataset.src, title, item);
      }
    });
  }

  drawAmountDownload() {
    let counter = 0;
    for (const i of [...this.arrayItem]) {
      counter += parseInt(i.dataset.amount);
    }
    const valueInMb = Math.round(counter / 1024 / 1024 * 100) / 100;
    this.amountDownloaded.dataset.amount = valueInMb;
    this.amountDownloaded.querySelector('.downloaded').textContent = this.amountDownloaded.dataset.amount;
  }

  cross_download(url, fileName, element) {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';
    req.onload = () => {
      const blob = req.response;

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.download = fileName;
      link.href = window.URL.createObjectURL(blob);
      link.click();
      document.body.removeChild(link);
      this.setAmountDownloadItem(element, blob.size);
    };

    req.send();
  }

  setAmountDownloadItem(element, size) {
    const currentAmount = +element.dataset.amount;
    element.dataset.amount = size + currentAmount;
    this.drawSpanAmount(element);
    this.drawAmountDownload();
  }

  drawSpanAmount(element) {
    const currentElement = element;
    const amount = parseInt(currentElement.dataset.amount);
    const spanElement = currentElement.querySelector('.downloaded-item');
    spanElement.classList.remove('kb', 'mb');

    const amountKB = amount / 1024;
    const amountMB = amountKB / 1024;
    if (amountMB >= 1) {
      spanElement.textContent = amountMB.toFixed(1);
      spanElement.classList.add('mb');
    } else {
      spanElement.textContent = Math.round(amountKB);
      spanElement.classList.add('kb');
    }
  }
}
