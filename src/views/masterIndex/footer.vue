<template>
    <div class="footer-main">
        <div class="text">
            <p class="text-container">Released under the MIT License. (083ff96d)</p>
            <p class="text-container">Copyright © 2019-present VoidZero Inc. & Vite Contributors</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-main {
    display: flex;
    justify-content: center;
    margin-top: 300px;
    background-color: #000000;
    color: #6a6566;
    width: 100%;
    min-height: 20vh;

    .text {
        height: calc(2 * 3.1em);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-top: 20px;
    }

    .text-container {
        font-size: 15px;
        line-height: 1.5;
        background: linear-gradient(to top, #999, #fff);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
        margin: 0.25rem 0;
    }

    @media(max-width < 768px ) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>