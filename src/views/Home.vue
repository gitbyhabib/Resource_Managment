<template>
  <div class="home  noScrlbar">
    <div class="container">
        <h2 class="text-center">Post List with Badges</h2>
        <div class="list-group noScrlbar">
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis sunt, a unde, recusandae cupiditate corporis id laboriosam possimus at ullam quos delectus totam ad facilis debitis nisi magni itaque.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae porro deserunt tempore voluptas corporis natus omnis beatae autem, ex animi? Doloremque cum tempora nisi libero nihil harum sequi quod modi!</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, nostrum amet obcaecati ratione similique itaque unde adipisci magnam porro odit dolore iste ipsa sunt placeat ad tempora omnis facilis.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maxime, libero dignissimos rem consectetur itaque nesciunt cumque, sint nostrum error labore incidunt placeat ullam enim. Reiciendis exercitationem aperiam animi illo.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis sunt, a unde, recusandae cupiditate corporis id laboriosam possimus at ullam quos delectus totam ad facilis debitis nisi magni itaque.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae porro deserunt tempore voluptas corporis natus omnis beatae autem, ex animi? Doloremque cum tempora nisi libero nihil harum sequi quod modi!</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, nostrum amet obcaecati ratione similique itaque unde adipisci magnam porro odit dolore iste ipsa sunt placeat ad tempora omnis facilis.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maxime, libero dignissimos rem consectetur itaque nesciunt cumque, sint nostrum error labore incidunt placeat ullam enim. Reiciendis exercitationem aperiam animi illo.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis sunt, a unde, recusandae cupiditate corporis id laboriosam possimus at ullam quos delectus totam ad facilis debitis nisi magni itaque.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae porro deserunt tempore voluptas corporis natus omnis beatae autem, ex animi? Doloremque cum tempora nisi libero nihil harum sequi quod modi!</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, nostrum amet obcaecati ratione similique itaque unde adipisci magnam porro odit dolore iste ipsa sunt placeat ad tempora omnis facilis.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
          <div href="#" class="list-group-item border rounded itemShadow py-4 bg-second m-2"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maxime, libero dignissimos rem consectetur itaque nesciunt cumque, sint nostrum error labore incidunt placeat ullam enim. Reiciendis exercitationem aperiam animi illo.</p> <div class="btn btn-danger" onclick="downloadFile()">Download Now</div></div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default {
  name: 'Home',
  components: {
 
  },
  methods: {
  onClick() {
              axios({
                    url: 'http://localhost:8000/my.pdf',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.pdf');
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          }
  },
}
</script>
