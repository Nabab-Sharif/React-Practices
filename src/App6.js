import React from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


const App = () => {


  const DownloadImg = () => {

    let node = document.getElementById('tableList');

    htmlToImage.toPng(node)
      .then((dataURL) => {
        let img = new Image();
        img.src = dataURL;
        document.body.appendChild(img);

      })

      .catch((err) => {
        console.log(err);
      })


  }






  return (
    <div>
      <div id='tableList' className='container'>
        <div className='row'>
          <div className='col-12'>
            <table>
              <tr>
                <td>Nabab</td>
                <td>Dhaka</td>
              </tr>

              <tr>
                <td>Nabab</td>
                <td>Dhaka</td>
              </tr>
              <tr>
                <td>Nabab</td>
                <td>Dhaka</td>
              </tr>

            </table>
          </div>
        </div>
      </div>

      <button onClick={DownloadImg} className='btn btn-success m-5'>Download Image</button>
    </div>
  )


}

export default App;