<style src="./MainContent.scss" lang="scss"></style>
<script src="./MainContent.js"></script>

<template>
  <main class="main-content">
    <div class="main-content-wrapper">
      <p class="content-text">
        The ONLY place to watch SummerSlam, WrestleMania and thousands of hours of WWE video on demand. 
      </p>
      <div class="content-grid">
        <div class="grid-col cta">
          <Button text="Join Free for a Month" class="cta-button"/>
          <i>
            No commitment, cancel anytime
          </i>
        </div>
        <div class="grid-col summer-slam">
          <div class="summer-slam-logo">
            <img :src="summerSlamLogo" alt="Summer Slam">
          </div>
          <p>
            <span>
              Live
            </span>
            <span>
              This Sunday <br>
              7e/4p
            </span>
          </p>
        </div>
      </div>
      <div class="scroll-down-icon"></div>
    </div>
  </main>
</template>


