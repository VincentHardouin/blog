import { initTheme } from './handle-theme';

initTheme();

function handleImagesClick() {
  const images = document.getElementsByTagName('img');
  if (!images) {
    return;
  }

  const dialog = document.createElement('dialog');
  dialog.addEventListener('click', (e) => {
    dialog.close();
  });

  for (const img of images) {
    img.addEventListener('click', (e) => {
      dialog.innerHTML = `
        <div class='image-dialog'>
          <img src='${img.src}' />
        </div>
      `;
      document.body.appendChild(dialog);
      dialog.showModal();
    });
  }

}

handleImagesClick();
