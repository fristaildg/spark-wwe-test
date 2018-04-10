<style src="./MainContent.scss" lang="scss"></style>
<script src="./MainContent.js"></script>

<template>
  <main class="main-content">
    <p class="content-text">
      The ONLY place to watch SummerSlam, WrestleMania and thousands of hours of WWE video on demand. 
    </p>
    <div class="content-grid">
      <div class="grid-col cta">
        <Button text="Join Free for a Month"/>
        <p>
          No commitment, cancel anytime
        </p>
      </div>
      <div class="grid-col summer-slam">
        <img :src="summerSlamLogo" alt="Summer Slam">
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
  </main>
</template>


