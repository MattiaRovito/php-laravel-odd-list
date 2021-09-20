<template>
    <header class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brend" :to="{name: 'home'}" >
                                Navbar
                            </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'home'}" >
                                Home
                            </router-link>
                        </li>
                        
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'about'}" >
                                About
                            </router-link>
                           
                        </li>
                        
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'contact'}" >
                                Contatti
                            </router-link>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contatti</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    </header>
</template>


<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
</style>