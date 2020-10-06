<template>
    <div class="header">
        <div class="header-image">
            <div class="header-image-title">Это главный текст</div>
        </div>
        <!-- <img src="./../assets/picture.jpg" /> -->

        <router-link to="/vote">
            <button class="btn header-btn btn-primary">
                ПРИНЯТЬ УЧАСТИЕ В ГОЛОСОВАНИИ
            </button>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.header {
    .header-image {
        background-image: linear-gradient( rgba(42, 66, 75, 0.6), rgba(42, 66, 75, 0.6) ), url("./../assets/picture.jpg");
        background-attachment: fixed;
        background-position-y: 65%;
        width: 100%;
        height: 200px;
        
        .header-image-title {
            padding-top: 60px;
            font-size: 3rem;
            color: #EEE;
            text-transform: uppercase;
        }
    }

    .header-btn {
        width: 100%;
        border-radius: 0;
    }
}
</style>