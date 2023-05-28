<template>
  <div>
    <div class="slider">
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-21//w/1920/IMAGE-landscape-fill-8d9e274f-93da-4343-af1d-1e546f4d902f-default_0.jpg?ts=1684940939176"
          alt="First slide"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-knitwear/subhome-xmedia-21//w/1920/IMAGE-landscape-default-fill-1d6493d7-81d1-4652-9974-e6869a28fa51-default_0.jpg?ts=1684943940944"
          alt="Second slide"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-accesories/subhome-xmedia-21-2//w/1920/IMAGE-landscape-fill-79ca3793-4421-43d7-9450-87a544a3465c-default_0.jpg?ts=1684941996804"
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
