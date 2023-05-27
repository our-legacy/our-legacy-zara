<template>
  <div>
    <div class="slider">
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997"
          alt="First slide"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489"
          alt="Second slide"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276"
          alt="Third slide"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.relative {
  position: relative;
}

.slider {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.slide {
  flex: 0 0 100%;
  animation: slideAnimation 13s infinite;
}

.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(-100%);
  }
  40% {
    transform: translateX(-200%);
  }
  60% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
